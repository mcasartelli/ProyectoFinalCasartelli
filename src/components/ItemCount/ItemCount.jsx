import React, {useState} from 'react';

import Button from 'react-bootstrap/Button';

import './itemCount.css'

const ItemCount = ({product, onAdd}) => {
    const [cant, setCant] = useState(1)

    let incrementar = () => {
        cant < product.stock && setCant(cant+1)
        console.log(product.stock)
    }

    let decrementar = () => {
        cant > 1 && setCant(cant-1)
    }

    let changeCart = () => {
        onAdd(cant)
    }

    return (
        <>
            <Button className='counter' variant="secondary" size="sm" onClick={decrementar}>-</Button>
            <p className='counter cant'>{cant}</p>
            <Button className='counter' variant="secondary" size="sm" onClick={incrementar}>+</Button>
            <Button variant="primary addButton" size="sm" onClick={changeCart}>Agregar al carrito</Button>
        </>
    );
};

export default ItemCount;