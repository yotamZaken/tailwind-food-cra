import {useContext} from "react";

import MealItemForm from "./MealItemForm";
import classes from './MealItem.module.css';
import CartContext from "../../../store/cart-context";

const MealItem = props => {
    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    };

    return (
        // <li className={classes.meal}>
        <li className={'flex justify-between m-4 pb-4 border border-solid border-white'}>
            <div>
                <h3 className={'text-2xl mb-1'}>{props.name}</h3>
                <div className={'italic'}>{props.description}</div>
                <div className={'mt-1 font-bold text-orange-700 text-xl'}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
            </div>
        </li>
    )
};

export default MealItem;