import React from "react";

const Button = ({ res, children, loadingText, color, outline, className }) => {
  const btnClassName = `col btn btn${outline ? "-outline" : ""}-${
    color || "primary"
  } ${className}`;

  // Check if the button is in a loading state
  if (res?.loading) {
    return (
      <button className={btnClassName} type="button" disabled>
        <span
          className="spinner-grow spinner-grow-sm"
          aria-hidden="true"
        ></span>
        <span role="status">{loadingText || "Loading"}...</span>
      </button>
    );
  }

  // Default button state
  return <button className={btnClassName}>{children}</button>;
};

export default Button;
