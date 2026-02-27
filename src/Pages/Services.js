import './Services.css';
import NavbarMenu from "../Layout/NavbarMenu";
import Navbar2 from "../Layout/Navbar2";
import WhatsappFunction from "../Components/WhatsappFunction";

function Services() {
    return (
        <div className="Container-Services">
            <NavbarMenu/>
            <Navbar2/>
            <p>Services</p>
            <WhatsappFunction/>
        </div>
    );
}

export default Services;