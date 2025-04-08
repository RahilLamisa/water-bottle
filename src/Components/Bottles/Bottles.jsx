import { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addCart, getCart } from "../../utilities/localstorage";


const Bottles = ({fetchBottles}) => {

    const [cart, setCart] = useState([])

    const bottles = use(fetchBottles);
    // console.log(bottles);

    // useEffect
    useEffect(() => {
        const storedCartIds = getCart();
        // console.log(storedCartIds,bottles);

        const storedCart = [];

        for(const id of storedCartIds){
            // console.log(id);
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if(cartBottle){
                storedCart.push(cartBottle);
            }
        }
        setCart(storedCart);
    },[bottles])


    const handleAddToCart = (bottle) => {
        console.log('added to cart', bottle);
        const newCart = [...cart, bottle]
        setCart(newCart)

        addCart(bottle.id)

    }


    return (
        <div>
            <h2>Bottles : {bottles.length}</h2>
            <p>Added to cart : {cart.length}</p>
            <div className="bottles">
            {
                bottles.map(bottle => <Bottle 
                    key={bottle.id}
                    handleAddToCart={handleAddToCart}
                    bottle={bottle}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;