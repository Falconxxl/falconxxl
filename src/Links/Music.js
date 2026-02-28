import './Music.css';

import NavbarMenu from "../Layout/NavbarMenu";
import Navbar2 from "../Layout/Navbar2";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import Footer from "../Layout/Footer";

import desktop_banner_music from "../Images/background_banner_music5.jpg";
import mobile_banner from "../Images/background_Brenda_blue_mobile8af.jpg";

import {Link} from "react-scroll";
import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from "react";
import PageLoader from "../Components/PageLoader";

import TypeMusic from "../Layout/TypeMusic";
import OurWorkflow from "../Layout/OurWorkflow";
import PricingMusic from "../Layout/PricingMusic";

import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";
import WhatsappFunction from "../Components/WhatsappFunction";


function Music() {

    const { t } = useTranslation();

    const [openQuote, setOpenQuote] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // images lourdes → petit délai pour rendu fluide
        const timer = setTimeout(() => {
            setLoading(false);
        }, 600);

        return () => clearTimeout(timer);
    }, []);


    return (

        <>
            {loading && <PageLoader />}

    <div>
            <NavbarMenu/>
            <NavbarMenuMobile/>
            <Navbar2/>
            {/*------banner---------------*/}

            <header className="hero-banner">
                {/* Image desktop */}
                <img src={desktop_banner_music} alt="Banner desktop" className="hero-image desktop-image" />

                {/* Image mobile */}
                <img src={mobile_banner} alt="Banner mobile" className="hero-image mobile-image" />

                <div className="hero-content">

                    <h1
                    style={{color:"White"}}>
                        {t("MusicPage.Banner.Title")}
                    </h1>

                    <p>
                        {t("MusicPage.Banner.ContentLine1")}<br/>
                        {t("MusicPage.Banner.ContentLine2")}<br/>
                    </p>

                    <a
                        href="https://www.falconbeat.nl"
                        className="cta-music-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t("MusicPage.Banner.BtnLine")}
                    </a>

                    <RequestAQuoteModal
                        open={openQuote}
                        onClose={() => setOpenQuote(false)}
                    >
                        <RequestAQuote />
                    </RequestAQuoteModal>

                </div>

                <Link to="AudioVisual-Description" className="scroll-down-music"
                      offset={-90} duration={500} spy={true} smooth={true} >
                    <i className="fa-solid fa-angles-down"></i>
                </Link>
            </header>

            {/*------------description-music--------------*/}

            <div className="AudioVisual-Description">

                <div className="AudioVisual-Description-left">

                    <h1 style={{
                        fontSize:"39px"
                    }}>
                        {t("MusicPage.DescriptionMusic.Title")}
                    </h1>

                    <p style={{
                        fontSize:"25px"
                    }}>
                        {t("MusicPage.DescriptionMusic.Subtitle")}
                    </p>

                </div>

                <div className="AudioVisual-Description-Right" style={{height:"auto"}}>

                    <p style={{
                        fontSize:"16px",
                    }}>
                        {t("MusicPage.DescriptionMusic.Content")}
                    </p>

                </div>

            </div>

            {/*-------TypeMusic---------*/}

            <TypeMusic/>

            <PricingMusic/>

            <OurWorkflow/>

            {/*----------why shoosing our music services-----------*/}

            <div className="Section-WhoAreWe"
                 style={{backgroundColor:"black"}}>
                <div className="WhoAreWe-left">
                    <h1>{t("MusicPage.WhyChoose.Title")}</h1>
                </div>

                <div className="WhoAreWe-right">

                    <div className="WhoAreWe-text">
                        <div className="checklist-item">
                            <i className="fa-solid fa-circle-check checklist-icon"></i>
                            <div>
                                {t("MusicPage.WhyChoose.ContentLine1")}
                            </div>
                        </div>

                        <div className="checklist-item">
                            <i className="fa-solid fa-circle-check checklist-icon"></i>
                            {t("MusicPage.WhyChoose.ContentLine2")}
                            <div>

                            </div>
                        </div>

                        <div className="checklist-item">
                            <i className="fa-solid fa-circle-check checklist-icon"></i>
                            <div>
                                {t("MusicPage.WhyChoose.ContentLine3")}
                            </div>
                        </div>

                        <div className="checklist-item">
                            <i className="fa-solid fa-circle-check checklist-icon"></i>
                            <div>
                                {t("MusicPage.WhyChoose.ContentLine4")}
                            </div>
                        </div>

                        <div className="checklist-item">
                            <i className="fa-solid fa-circle-check checklist-icon"></i>
                            <div>
                                {t("MusicPage.WhyChoose.ContentLine5")}
                            </div>
                        </div>

                        <div className="checklist-item">
                            <i className="fa-solid fa-circle-check checklist-icon"></i>
                            <div>
                                {t("MusicPage.WhyChoose.ContentLine6")}
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/*---------------------*/}

            <WhatsappFunction/>
            <Footer/>
        </div>

      </>
    );
}

export default Music;