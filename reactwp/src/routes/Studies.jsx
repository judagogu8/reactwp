import NavBar from "../components/organisms/NavBar";
import TextImage from "../components/organisms/TextImage";
import fotoJaveriana from "../../src/assets/Javeriana.png";
import fotoSanbartolo from "../../src/assets/SanBartolo.png";


function Studies (){
    return(
        <div className="min-h-screen bg-blue-50">
            <NavBar/>
            <TextImage reverse imageSrc={fotoJaveriana} altText="Javeriana" title="Pontificia Universidad Javeriana" description=" Graduado de Ingeniería Industrial y estudiante de último semestre de Ingeniería de Sistemas"/>
            <TextImage  imageSrc={fotoSanbartolo} altText="San Bartolo" title="Colegio San Bartolomé La Merced" description="Bachiller"/>
        </div>
    )
}
export default Studies;