import React from "react";
import NavBar from "../components/organisms/NavBar";
import Hero from "../components/organisms/Hero";
import Content from "./Studies";
import TextImage from "../components/organisms/TextImage";
import ButtonAtom from "../components/atoms/ButtonAtom";

const LandingTemplate = () => {
    return(
        <div className="min-h-screen bg-blue-50">
            <NavBar />
            <Hero />
            <TextImage botonText={"Contáctame"} botonHref={"/Contact"} altText="Imagen mia" title="Juan David González Guáqueta" imageSrc="../src/assets/PEM_8471.JPG" description="Hola! Yo soy Juan David González, tengo 22 años, soy graduado en Ingeniería Industrial y actualmente estudiante de Ingeniería de Software en la Pontificia Universidad Javeriana. Me apasiona profundamente la resolución de problemas y disfruto ayudando a personas y organizaciones a superar desafíos y alcanzar sus objetivos. Me caracterizo por tener un pensamiento analítico, ser adaptable y estar comprometido con la entrega de soluciones que generen un impacto real. Además, tengo la capacidad de aprender rápidamente y aprovechar eficientemente las herramientas tecnológicas para abordar los problemas de manera creativa y efectiva."/>
        </div>
    )
}

export default LandingTemplate;