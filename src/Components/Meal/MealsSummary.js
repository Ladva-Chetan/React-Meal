import classes from "./MealsSummary.module.css";

const MealSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious food, Delivered to you</h2>
      <p>
        choose your favorite meals from our broad selection of available meals
        and enjoy delicious lunch or dinner at home
      </p>
      <p>
        All our meal are cooked with high quality ingreadients,just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};
export default MealSummary;
