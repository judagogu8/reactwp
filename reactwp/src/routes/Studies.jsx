import React from "react";
import NavBar from "../components/organisms/NavBar";
import TextImage from "../components/organisms/TextImage";

function Studies (){
    return(
        <div>
            <NavBar/>
            <TextImage reverse imageSrc="../src/assets/Javeriana.png" altText="Javeriana" title="Ingeniero Industrial Pontificia universidad Javeriana" description="Me gradué de Ingeniería Industrial en la Pontificia Universidad Javeriana" />
            <TextImage imageSrc="../src/assets/Javeriana.png" altText="Javeriana" title="Ingeniero de Sistemas Pontificia universidad Javeriana" description="Actualmente soy estudiante de octavo semestre de Ingeniería de Sistemas" />
            <TextImage reverse imageSrc="../src/assets/SanBartolo.png" altText="San Bartolo" title="Bachiller Colegio San Bartolomé la merced" description="Estudié durante 14 años, en donde obtuve mi grado de bachiller"/>
        </div>
    )
}
export default Studies;