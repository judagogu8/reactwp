import React from "react";
import NavBar from "../components/organisms/NavBar";
import TextImage from "../components/organisms/TextImage";
import ButtonAtom from "../components/atoms/ButtonAtom";

const Contact =() =>{
    return(
        <div className="min-h-screen bg-blue-50 max-h-100 flex flex-col">
            <NavBar/>
            <TextImage imageSrc="../src/assets/LinkedIn.png" altText="LinkedIn image" title="" botonHref={"https://www.linkedin.com/in/juan-david-gg"} botonText={"Contáctame"} description=""/>
            <TextImage reverse imageSrc="../src/assets/Gmail.png" altText="LinkedIn image" title="" botonHref={"mailto:judagogu8@gmail.com"} botonText={"Contáctame"} description="" />
        </div>
    );
}

export default Contact;

