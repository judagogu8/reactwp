import React from "react";
import ButtonAtom from "../atoms/ButtonAtom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-white py-3 px-6 heigh-auto">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
          Bienvenido a mi página web 🚀
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-3">
          En esta página puedes revisar mi información personal.
        </p>
      </div>
    </section>
  );
};

export default Hero;
