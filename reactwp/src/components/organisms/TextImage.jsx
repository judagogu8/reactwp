import React from "react";
import ButtonAtom from "../atoms/ButtonAtom";

const TextImage = ({
  imageSrc = "https://via.placeholder.com/300",
  altText = "Imagen de ejemplo",
  title = "Título de ejemplo",
  description = "Este es un texto descriptivo que acompaña a la imagen.",
  botonText = null,
  botonHref = null,
  reverse = false, // Muestra la imagen a la derecha si es true

}) => {
  if (botonText && botonHref) {
    return (
      <div className="flex-grow flex items-center justify-center bg-white px-6 bg-gradient-to-r from-blue-500 to-white">
        <div className={`flex flex-col md:flex-row items-center gap-8 max-w-5xl w-full ${reverse ? "md:flex-row-reverse" : ""}`}>
          <img
            src={imageSrc}
            alt={altText}
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-700 text-lg">{description}</p>
            <ButtonAtom text={botonText} href={botonHref} />

          </div>
        </div>
      </div>
    );
  }
  else{
    return (
      <div className="flex-grow flex items-center justify-center bg-white px-6 bg-gradient-to-r from-blue-500 to-white">
        <div className={`flex flex-col md:flex-row items-center gap-8 max-w-5xl w-full ${reverse ? "md:flex-row-reverse" : ""}`}>
          <img
            src={imageSrc}
            alt={altText}
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-700 text-lg">{description}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default TextImage;
