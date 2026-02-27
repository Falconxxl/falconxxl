import './ConditionsOfSale.css';
import NavbarMenu from "../Layout/NavbarMenu";
import TopButton from "../Components/TopButton";
import Navbar2 from "../Layout/Navbar2";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import Footer from "../Layout/Footer";
import React from "react";

function ConditionsOfSale() {
    return (
        <div >
            <NavbarMenu/>
            <NavbarMenuMobile/>
            <Navbar2/>

            <div className="Container-Contact">
                <div className="Container-Contact-text">
                    <h1>Page Update in Progress</h1>
                    <h2>This Page Will Be Available Soon</h2>
                    <p>
                        We’re currently updating this section to provide you with the most <br/>
                        accurate and useful information. Please check back soon, <br/>
                        the new content will be available shortly. in our communication. <br/>
                        Let us know what your preference is.
                    </p>
                </div>
            </div>

            <TopButton/>
            <Footer/>
        </div>
    );
}

export default ConditionsOfSale;