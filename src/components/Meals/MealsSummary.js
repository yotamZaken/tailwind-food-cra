import classes from './MealsSummary.module.css';

const MealsSummary = () => {
    return (
        // <section className={classes.summary}>
        <section className={'text-center max-w-3xl w-11/12 m-auto -mt-40 relative bg-stone-700 text-white rounded-xl p-4 shadow-[0_1px_18px_10px_rgba(0, 0, 0, 0.25)]'}>
            {/*<h2>Delicious Food, Delivered To You</h2>*/}
            <h2 className={'text-4xl mt-0 pb-4'}>Delicious Food, Delivered To You</h2>
            <p>
                Choose your favorite meal from our broad selection of available meals
                and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
                All our meals are cooked with high-quality ingredients just-in-time and
                of course by experienced chefs!
            </p>
        </section>)
};

export default MealsSummary;