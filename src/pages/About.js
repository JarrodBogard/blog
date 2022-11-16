import React from "react";
import TextColor from "../hoc/TextColor";

function About() {
  return (
    <div className="container">
      <h4 className="center blue-text">About</h4>
      <p className="black-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad rem
        perferendis perspiciatis saepe suscipit possimus ipsum maiores expedita
        maxime aperiam dolorem dolores vitae optio nisi non ipsa, quos
        molestiae? Sed.
      </p>
    </div>
  );
}

export default TextColor(About);
