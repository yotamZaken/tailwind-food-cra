import classes from './Card.module.css';

const Card = props => {
    return <div className={classes.card}>
        <div></div>
        {props.children}
    </div>
};

export default Card;