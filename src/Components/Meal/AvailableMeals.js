import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import Mealitem from "./MealItems/Mealitems";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Shushi",
    description: "finest fishes and veggie",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "German dish",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbeque Burger",
    description: "Amrican, raw, meaty",
    price: 15.34,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "veggie that made you healthy",
    price: 14.99,
  },
];
const AvailableMeals = () => {
  const meallist = DUMMY_MEALS.map((meal) => <Mealitem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}/>);
  return (
    <section className={classes.meals}>
      <Card>
      <ul>{meallist}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals
