import MealsInfo from "./MealsInfo";
import OfferedMeals from "./OfferedMeals";
import { Fragment } from "react";

const Meals = () => {
  return (
    <Fragment>
      <MealsInfo/>
      <OfferedMeals />
    </Fragment>
  );
};

export default Meals;
