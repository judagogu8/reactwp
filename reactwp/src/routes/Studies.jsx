import React from "react";
import NavBar from "../components/organisms/NavBar";
import TextImage from "../components/organisms/TextImage";

function Studies (){
    return(
        <div className="min-h-screen bg-blue-50">
            <NavBar/>
            <TextImage reverse imageSrc="../src/assets/Javeriana.png" altText="Javeriana" title="Pontificia Universidad Javeriana" description=" Graduado de Ingeniería Industrial y estudiante de último semestre de Ingeniería de Sistemas"/>
            <TextImage  imageSrc="../src/assets/SanBartolo.png" altText="San Bartolo" title="Colegio San Bartolomé La Merced" description="Bachiller"/>
        </div>
    )
}
export default Studies;