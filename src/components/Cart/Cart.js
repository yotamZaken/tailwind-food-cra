import {useContext} from 'react';

import Modal from '../UI/Modal';
import CartItem from "./CartItem";
import classes from './Cart.module.css';
import CartContext from "../../store/cart-context";

const Cart = props => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount: 1});
    };

    const cartItems = (
        // <ul className={classes['cart-items']}>
        <ul className={'list-none m-0 p-0 max-h-80 overflow-scroll'}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            {/*<div className={classes.total}>*/}
            <div className={'flex justify-between items-center font-bold text-2xl my-4 mx-0'}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {/*<div className={classes.actions}>*/}
            <div className={'text-right'}>
                {/*<button className={classes['button--alt']} onClick={props.onClose}>Close*/}
                <button className={'cursor-pointer bg-transparent py-4 px-2 ml-4 rounded-3xl border border-solid border-[#8a2b06] hover:bg-[#5a1a01] hover:border-[#5a1a01] hover:text-white active:bg-[#5a1a01] active:border-[#5a1a01] active:text-white text-[#8a2b06]'} onClick={props.onClose}>
                    Close
                </button>
                {hasItems &&
                    // <button className={classes.button}>
                    <button className={'text-white cursor-pointer bg-[#8a2b06] py-4 px-2 ml-4 rounded-3xl border border-solid border-[#8a2b06] hover:bg-[#5a1a01] hover:border-[#5a1a01] hover:text-white active:bg-[#5a1a01] active:border-[#5a1a01] active:text-white'}>
                        Order
                    </button>
                }
            </div>
        </Modal>
    );
};

export default Cart;