import React, { Fragment } from "react";
import mealsHeaderImage from "../../resources/foodOnTable.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>FoodForYou</h1>
        <button>Your cart</button>
      </header>
      <div className={classes["top-img"]}>
        <img
          src={mealsHeaderImage}
          alt="Delicious food served on the table."
        />
      </div>
    </Fragment>
  );
};

export default Header;
