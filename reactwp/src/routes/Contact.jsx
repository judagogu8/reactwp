import NavBar from "../components/organisms/NavBar";
import TextImage from "../components/organisms/TextImage";
import fotoLinkedIn from "../../src/assets/LinkedIn.png";
import fotoGmail from "../../src/assets/Gmail.png";

const Contact =() =>{
    return(
        <div className="min-h-screen bg-blue-50 max-h-100 flex flex-col">
            <NavBar/>
            <TextImage imageSrc={fotoLinkedIn} altText="LinkedIn image" title="" botonHref={"https://www.linkedin.com/in/juan-david-gg"} botonText={"Contáctame"} description=""/>
            <TextImage reverse imageSrc={fotoGmail} altText="LinkedIn image" title="" botonHref={"mailto:judagogu8@gmail.com"} botonText={"Contáctame"} description="" />
        </div>
    );
}

export default Contact;

