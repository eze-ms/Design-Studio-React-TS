import { useState, useEffect, useMemo } from 'react';
import { db } from '../data/db';
import type { Guitar, CartItem } from '../types'

const useCart = () => {

    const initialCart = () : CartItem[] => {

        const localStorageCart =  localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : [] 
    }

    const [data] = useState(db)
    const [cart, setCart] = useState(initialCart)

    const MAX_ITEMS = 10
    const MIN_ITEMS = 1

    useEffect (() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    function addToCart(item : Guitar) {
        // Busca el índice del elemento en el carrito que coincide con el ID del item
        const itemExist = cart.findIndex(guitar => guitar.id === item.id);
        // Si el ítem ya existe en el carrito
        if (itemExist >= 0) {
            if ( cart[ itemExist ].cantidad >= MAX_ITEMS )return
            const updateCart = [...cart]; // Copia el estado actual del carrito
            updateCart[itemExist].cantidad++; // Incrementa la cantidad del ítem existente
            setCart(updateCart); // Actualiza el estado del carrito
        } else {
            const newItem: CartItem = { ...item, cantidad: 1 };

            // Establece la cantidad del nuevo ítem a 1
            setCart([...cart, newItem]); // Añade el nuevo ítem al carrito
        }
    } 

    function removeFromCart(id : Guitar ['id']) {
        setCart(prevCart => prevCart.filter(guitar => guitar.id !== id)) //Fíltrame las guitarras cuyo id sea diferente al que te estoy pasando
    }
    /**
     * El resultado devuelve un nuevo array y lo va a setear en nuestra función
     */

    function addCantidad(id : Guitar ['id']) {
        const updatedCart = cart.map( item => {
            if( item.id === id && item.cantidad < MAX_ITEMS ){
                return{
                    ...item,
                    cantidad: item.cantidad + 1 
                }
            }
            return item
        })
        setCart(updatedCart)
    }

    function removeCantidad(id : Guitar ['id']) {
        const updatedCart = cart.map( item => {
            if( item.id === id && item.cantidad > MIN_ITEMS ){
                return{
                    ...item,
                    cantidad: item.cantidad - 1 
                }
            }
            return item
        })
        setCart(updatedCart)
    }

    function clearCart() {
        setCart([])
    }

    //State Derivado
    const isEmpty = useMemo( () => cart.length === 0, [cart] )
    /** useMemo memoiza el resultado de una función y lo devuelve en futuros renders si las dependencias no han cambiado. 
     * Esto ayuda a optimizar el rendimiento al evitar cálculos innecesarios.
     */

    //Reduce itera el acumulado (total) y el item (actual). => Total + (cantidad * precio). 0->(el carrito inicia en 0)
    const carritoTotal = useMemo( () => cart.reduce( ( total, item) => total + (item.cantidad * item.price), 0 ), [cart] ) //

    return {
        data,
        cart,
        addToCart,
        removeFromCart,
        removeCantidad,
        addCantidad,
        clearCart, 
        isEmpty,
        carritoTotal
    }
}

export default useCart