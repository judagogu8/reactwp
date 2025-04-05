import React from "react";

const ButtonAtom = ({
    text = "Click me",
    size = "base",
    color = "text-white",
    weight = "font-medium",
    bg = "bg-blue-500",
    border = "border border-transparent",
    padding = "px-4 py-2",
    rounded = "rounded-md",
    className = "",
    onClick,
    type = "button",
    disabled = false,
    href = null, // ⬅️ Aquí se define la prop
  }) => {
    const classes = `
      inline-block
      text-${size}
      ${color}
      ${weight}
      ${bg}
      ${border}
      ${padding}
      ${rounded}
      hover:text-black
      ${className}
      ${disabled ? "opacity-60 cursor-not-allowed" : "hover:opacity-90"}
      transition duration-150 ease-in-out
    `;
  
    // Si hay href, usar <a>
    if (href) {
      return (
        <a
          href={href}
          className={classes}
          onClick={disabled ? (e) => e.preventDefault() : onClick}
        >
          {text}
        </a>
      );
    }
  
    // Si no hay href, usar <button>
    return (
      <button
        type={type}
        className={classes}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    );
  }
  
  export default ButtonAtom;
  