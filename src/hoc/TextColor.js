import React from "react";

const TextColor = (WrappedComponent) => {
  const colors = ["orange", "blue", "green", "pink", "grey"];
  const randomColor = colors[Math.floor(Math.random() * 4)];
  const className = randomColor + "-text";

  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default TextColor;
