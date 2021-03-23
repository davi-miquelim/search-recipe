import React from "react";
import style from "./recipe.module.css";

export const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 style={{ margin: "3rem", fontSize: "2.5rem" }}>{title}</h1>
      <figure>
        <img src={image} style={{ width: "500px" }} alt="" />
      </figure>
      <p style={{ margin: "2rem" }}>
        <h2>Calories: {calories}</h2>
      </p>
      <h2 style={{ margin: "2rem" }}> Ingredients </h2>
      <ul style={{ margin: "1rem" }}>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p>
        <ul>
          <li>
            <a href="">
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="">
              {" "}
              <i class="fas fa-code"></i>
            </a>
          </li>
        </ul>
      </p>
    </div>
  );
};
