import classes from "./OfferedMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import { useEffect, useState } from "react";

const firebaseRoot = "https://my-dummy-firebase-link"
const firebaseMealsAddress = firebaseRoot + "meals.json"

const OfferedMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(firebaseMealsAddress);
      const responseData = await response.json();

      let loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        });
      }

      setMeals(loadedMeals);
    };

    // fetch meals from API into meals var
    fetchMeals();
  }, []);
  // runs only when component is first loaded

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default OfferedMeals;
