import React, {useContext, useEffect, useState} from 'react';

import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"

const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const {items} = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0);


    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timerId = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timerId)
        };
    }, [items]);

    return (
        // <button className={btnClasses} onClick={props.onClick}>
        <button className={`cursor-pointer border-none bg-slate-800 text-white py-3 px-12 flex justify-around items-center rounded-3xl font-bold hover:bg-black active:bg-black ${btnIsHighlighted ? 'animate-ping' : ''}`} onClick={props.onClick}>
            {/*<span className={classes.icon}>*/}
            <span className={'w-5 h-5 mr-2'}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            {/*<span className={classes.badge}>{numberOfCartItems}</span>*/}
            <span className={'bg-amber-700 py-1 px-4 rounded-3xl ml-4 font-bold'}>{numberOfCartItems}</span>
        </button>
    )
};

export default HeaderCartButton;