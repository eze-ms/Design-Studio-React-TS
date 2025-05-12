import { useMemo, Dispatch } from 'react'
import type {CartItem} from '../types'
import type { CartActions } from '../reducers/cart-reducer'

type HeaderProps = {
    cart: CartItem[]
    dispatch: Dispatch<CartActions>
}

export default function Header({ cart, dispatch } : HeaderProps ) {

    //State Derivado
    const isEmpty = useMemo( () => cart.length === 0, [cart] )
    /** useMemo memoriza el resultado de una función y lo devuelve en futuros renders si las dependencias no han cambiado. 
     * Esto ayuda a optimizar el rendimiento al evitar cálculos innecesarios.
     */
 
    //Reduce itera el acumulado (total) y el item (actual). => Total + (cantidad * precio). 0->(el carrito inicia en 0)
    const carritoTotal = useMemo( () => cart.reduce( ( total, item) => total + (item.cantidad * item.price), 0 ), [cart] ) //
    
    return (
        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="index.html">
                            <img className="img-fluid" src="/img/logo.svg" alt="imagen logo" />
                        </a>
                    </div>
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                        <div className="carrito">
                            <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />
                            <div id="carrito" className="bg-white p-3">
                                { isEmpty ? (
                                    <p className="text-center">El carrito está vacío</p>
                                ) : (
                                    <>
                                        <table className="w-100 table">
                                            <thead>
                                                <tr>
                                                    <th>Imagen</th>
                                                    <th>Nombre</th>
                                                    <th>Precio</th>
                                                    <th>Cantidad</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cart.map(guitar => (
                                                    <tr key={guitar.id}>
                                                        <td>
                                                            <img
                                                                className="img-fluid"
                                                                src={`/img/${guitar.image}.avif`}
                                                                alt="imagen guitarra"
                                                            />
                                                        </td>
                                                        <td>{guitar.name}</td>
                                                        <td className="fw-bold">${guitar.price}</td>
                                                        <td className="d-flex align-items-center gap-4">
                                                            <button
                                                              type="button"
                                                              className="btn btn-dark"
                                                              onClick={() => dispatch({type:'decrease-quantity', payload: {id: guitar.id} })}
                                                              
                                                              >
                                                                -
                                                            </button>
                                                            {guitar.cantidad}
                                                            <button
                                                              type="button"
                                                              className="btn btn-dark"
                                                              onClick={() => dispatch({type:'increase-quantity', payload: {id: guitar.id}})}
                                                              >
                                                                +
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button
                                                              className="btn btn-danger"
                                                              type="button"
                                                              onClick= {() => dispatch({type: 'remove-from-cart', payload : {id: guitar.id}})}
                                                              >
                                                                X
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                               
                                    <p className="text-end">Total pagar: <span className="fw-bold">${carritoTotal}</span></p>
                                    </>
                                )}
                                
                                <button
                                  className="btn btn-dark w-100 mt-3 p-2"
                                  onClick={() => dispatch({type: 'clear-cart'})}
                                  style={{ fontSize: '0.8rem' }}
                                  >
                                    Vaciar Carrito
                                  </button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
