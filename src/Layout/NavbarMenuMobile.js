import './NavbarMenuMobile.css';
import {NavLink} from "react-router-dom";
import logo from '../Assets/2.Logo_Falcon_XX_4_jaune.png';
import { useTranslation } from "react-i18next";
import LanguageDropdown from "../Components/LanguageDropdown"
import Hamburger from "../Components/Hamburger";


function NavbarMenu() {

    // ------------------------languages selector--------------------------------------

    const { i18n } = useTranslation();

    // --------------------------------------------------------------

    return (
        <div className="Navbar-mobile">
            <div className="Container-NavbarMenuMobile">

                {/*------------------selector languages-------------------------------------*/}

                <div className="container-languages">
                    <LanguageDropdown i18n={i18n} />
                </div>

                <NavLink to='/'  className="logo-menu">
                    <img src={logo} alt="flaconXXL-logo" className="logo-falcon-NavMenu2"/>
                </NavLink>

                <div className="Container-Hamburger">

                    <Hamburger/>

                </div>

            </div>


        </div>
    );
}

export default NavbarMenu;