import React from "react";

const TextAtom = ({
  text = "",
  size = "base",               // sm, base, lg, xl, etc.
  color = "text-gray-800",     
  weight = "font-normal",      // font-light, font-medium, font-bold
  tag = "span",                // span, p, h1, etc.
  className = "",
  border = "border border-gray-300", // Estilo de borde por defecto
  padding = "px-2 py-1",             // Padding por defecto
  rounded = "rounded-md",            // Bordes redondeados
  bg = "",                           // Fondo opcional
}) => {
  const Tag = tag;

  const classes = `
    text-${size} 
    ${color} 
    ${weight} 
    ${border} 
    ${padding} 
    ${rounded} 
    ${bg} 
    ${className}
  `;

  return <Tag className={classes}>{text}</Tag>;
};

export default TextAtom;
