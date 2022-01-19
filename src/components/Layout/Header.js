import React, {Fragment} from 'react';

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from '../../assets/meals.jpeg';
import classes from './Header.module.css';

const Header = props => {
    return <Fragment>
        {/*<header className={classes.header}>*/}
        <header
            className={'fixed top-0 left-0 h-20 w-full bg-red-900 text-white flex justify-between items-center py-0 px-[10%] z-10 shadow[0_2px_8px_rgba(0, 0, 0, 0.25)]'}>
            <h1>React-Meals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        {/*<div className={classes['main-image']}>*/}
        <div className={'w-full h-96 z-0 overflow-hidden'}>
            {/*<img src={mealsImage} alt="A table full of delicious food"/>*/}
            <img className={'w-full h-full object-cover -rotate-6 -translate-y-16 -translate-x-4'} src={mealsImage} alt="A table full of delicious food"/>
        </div>
    </Fragment>
};

export default Header;