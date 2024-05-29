import { Dispatch } from 'react';
import { useState } from 'react';
import type { Guitar } from '../types';
import type { CartActions } from '../reducers/cart-reducer';

type GuitarProps = {
    guitar: Guitar;
    dispatch: Dispatch<CartActions>
};

export default function Guitar({ guitar, dispatch }: GuitarProps) {
    const { name, image, image2, description, price } = guitar;
    const [hovered, setHovered] = useState(false);

    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img
                    className="img-fluid"
                    src={hovered ? `/img/${image2}.avif` : `/img/${image}.avif`}
                    alt="imagen guitarra"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                <p>{description}</p>
                <p className="fw-black text-primary fs-3">$ {price}</p>
                <button 
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={() => dispatch({type:"add-to-cart", payload:{item: guitar} })}
                    style={{ fontSize: '0.8rem' }}
                >
                    Agregar al Carrito
                </button>
            </div>
        </div>
    );
}
