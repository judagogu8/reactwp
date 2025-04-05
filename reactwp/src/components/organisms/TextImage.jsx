import React from "react";
import ButtonAtom from "../atoms/ButtonAtom";

const TextImage = ({
  imageSrc = "https://via.placeholder.com/300",
  altText = "Imagen de ejemplo",
  title = "Título de ejemplo",
  description = "Este es un texto descriptivo que acompaña a la imagen.",
  height = "50",
  botonText = null,
  botonHref = null,
  reverse = false, // Muestra la imagen a la derecha si es true
}) => {
  return (
    <div className="w-full px-4 py-10 flex justify-center">
      <div className={`flex flex-col md:flex-row items-center gap-8 max-w-5xl w-full bg-white shadow-md rounded-2xl p-6 ${reverse ? "md:flex-row-reverse" : ""}`}>
        <img
          src={imageSrc}
          alt={altText}
          style={{ height }}
          className="max-h-40 w-auto md:max-h-80 object-contain rounded-xl shadow-md"
          />
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">{title}</h2>
          <p className="text-gray-700 text-lg mb-4 text-justify">{description}</p>
          {botonText && botonHref && (
            <ButtonAtom text={botonText} href={botonHref} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TextImage;
