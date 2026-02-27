import './ContainerBanner2.css';
// import { NavLink } from "react-router-dom";
// import desktop_banner from "../../src/Images/background_sky_green_yellow7.png";
import desktop_banner1 from "../../src/Images/background_sky_green_yellow12s.png";

// import mobile_banner from "../../src/Images/background_Brenda_blue_mobile7.png";
import mobile_banner from "../../src/Images/background_Brenda_blue_mobile8i.png";
import { Link } from "react-scroll";
// import logo_banner from "../Assets/2.Logo_Falcon_XX_5_white.png";
// import React from "react";
import { useTranslation } from "react-i18next";

import React, { useState } from "react";
import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";

function ContainerBanner2() {

    const { t } = useTranslation();

    const [openQuote, setOpenQuote] = useState(false);
    return (
        <header className="hero-banner">
            {/* Image desktop */}
            <img src={desktop_banner1} alt="Banner desktop" className="hero-image desktop-image" />

            {/* Image mobile */}
            <img src={mobile_banner} alt="Banner mobile" className="hero-image mobile-image" />


            <div className="hero-content">

                <h1>
                    {t("ContainerBanner2.Title")}
                </h1>

                <p>
                    {t("ContainerBanner2.Subtitleline1")}
                </p>

                <button
                    className="cta-btn"
                    onClick={() => setOpenQuote(true)}>
                    {t("ContainerBanner2.CatBouton")}
                </button>
                <RequestAQuoteModal
                    open={openQuote}
                    onClose={() => setOpenQuote(false)}
                >
                    <RequestAQuote />
                </RequestAQuoteModal>

            </div>

            <Link to="Section-WhoAreWe" className="scroll-down"
                  offset={-90} duration={500} spy={true} smooth={true} >
                <i className="fa-solid fa-angles-down"></i>
            </Link>
        </header>
    );
}

export default ContainerBanner2;
