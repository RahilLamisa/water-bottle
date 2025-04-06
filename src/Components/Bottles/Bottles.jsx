import { use, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'


const Bottles = ({fetchBottles}) => {

    const [cart, setCart] = useState([])

    const bottles = use(fetchBottles);
    // console.log(bottles);

    const handleAddToCart = (bottle) => {
        console.log('added to cart', bottle);
        const newCart = [...cart, bottle]
        setCart(newCart)

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