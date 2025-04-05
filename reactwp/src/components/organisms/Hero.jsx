import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Bienvenido a mi página web 🚀
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-8">
          Creamos soluciones inteligentes para que tu negocio crezca más rápido que nunca.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Empezar ahora
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
            Más información
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
