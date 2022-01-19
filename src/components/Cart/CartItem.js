import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    // <li className={classes['cart-item']}>
    <li className={'flex justify-between items-center border-b-2 border-solid border-[#8a2b06] py-4 px-0 my-4 mx-0'}>
      <div>
        <h2 className={'m-[0 0 0.5rem 0]'}>{props.name}</h2>
        {/*<div className={classes.summary}>*/}
        <div className={'w-40 flex justify-between items-center'}>
          {/*<span className={classes.price}>{price}</span>*/}
          <span className={'font-bold text-[#8a2b06]'}>{price}</span>
          {/*<span className={classes.amount}>x {props.amount}</span>*/}
          <span className={'font-bold border border-solid border-[#ccc} py-1 px-3 rounded-md'}>x {props.amount}</span>
        </div>
      </div>
      {/*<div className={classes.actions}>*/}
      <div className={'flex flex-col'}>
        <button onClick={props.onRemove} className={'font-bold text-xl text-[#8a2b06] border border-solid border-[#8a2b06] w-12 text-center rounded-md bg-transparent cursor-pointer m-1 hover:bg-[#8a2b06] hover:text-white active:bg-[#8a2b06] active:text-white'}>
            +
        </button>
        <button onClick={props.onAdd} className={'font-bold text-xl text-[#8a2b06] border border-solid border-[#8a2b06] w-12 text-center rounded-md bg-transparent cursor-pointer m-1 hover:bg-[#8a2b06] hover:text-white active:bg-[#8a2b06] active:text-white'}>
            -
        </button>
      </div>
    </li>
  );
};

export default CartItem;
