import classes from './Card.module.css';

const Card = props => {
    return (
        // <div className={classes.card}>
        <div className={'p-4 rounded-xl bg-white shadow-[0_2px_8px_10px_rgba(0,0,0,0.25)]'}>
            {props.children}
        </div>
    )
};

export default Card;