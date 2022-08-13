import React from "react";
import mealsImage from "../../../assets/meals.jpg";
import HeaderCartButon from "../HeaderCartButon/HeaderCartButon";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButon />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} />
      </div>
    </>
  );
}
