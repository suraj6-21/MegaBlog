import React from "react";

function Button({
  children = "Click me",
  type = "button",
  bgColor = "bg-blue-500",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 ${bgColor} ${bgColor} ${className}`}
      {...props}
    >
      {children}{" "}
    </button>
  );
}

export default Button;
