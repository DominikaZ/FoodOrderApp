import MealsInfo from "./MealsInfo";
import classes from "./Meals.module.css";
import { Fragment } from "react";

const Meals = () => {
  return (
    <Fragment className={classes.mealsSec}>
      <MealsInfo></MealsInfo>
    </Fragment>
  );
};

export default Meals;
