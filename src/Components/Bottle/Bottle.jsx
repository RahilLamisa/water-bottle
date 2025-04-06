import React from 'react';
import './Bottle.css'

const Bottle = ({bottle, handleAddToCart}) => {

    const {img, name, seller , price, ratings, stock} = bottle;

    return (
        <div className='bottle'>
            <img src={img} alt="" />
            <div>
                <h3>Name : {name}</h3>
                <h3>Seller : {seller}</h3>
                <h3>Price : ${price}</h3>
                <h3>Ratings : {ratings}</h3>
                <h3>Remaining only : {stock}</h3>
                <button onClick={() => handleAddToCart(bottle)}>Add to cart</button>
            </div>
        </div>
    );
};

export default Bottle;