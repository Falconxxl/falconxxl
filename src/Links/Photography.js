import { Helmet } from 'react-helmet-async';
import './Photography.css';

import NavbarMenu from "../Layout/NavbarMenu";
import Footer from "../Layout/Footer";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import Navbar2 from "../Layout/Navbar2";

import desktop_banner_photograhy from "../Images/background_Brenda_blue2.jpg";
import mobile_banner from "../Images/background_Brenda_blue_mobile4.jpg";

import batemburgpic from "../Images/Batemburg_photography_models";
import mike_direction_photo from "../Images/mike_photography_model2";

import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";
import PageLoader from "../Components/PageLoader";
import { useTranslation } from "react-i18next";

import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";

import TypePhotos from "../Layout/TypePhotos";
import OurWorkflow from "../Layout/OurWorkflow";
import PricingPhotography from "../Layout/PricingPhotography";
import PhotographyGallery from "../Components/PhotographyGallery";
import WhatsappFunction from "../Components/WhatsappFunction";

function Photography() {

    const { t } = useTranslation();
    const [openQuote, setOpenQuote] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // images lourdes → petit délai pour un rendu fluide
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Helmet>
                <title>{t("HelmetSEO.Photography.title")}</title>
                <meta name="description" content={t("HelmetSEO.Photography.description")} />
                <link rel="canonical" href="https://www.falconxxl.com/Photography" />
            </Helmet>

            {loading && <PageLoader />}

            <div className={`photography-wrapper ${loading ? "hidden" : "visible"}`}>
                <NavbarMenuMobile/>
                <NavbarMenu/>
                <Navbar2/>

                {/*---------------- Banner ----------------*/}
                <div className="Container-Photography">
                    <img
                        src={desktop_banner_photograhy}
                        alt="Banner desktop"
                        className="Photography-banner desktop-image"
                    />

                    <img
                        src={mobile_banner}
                        alt="Banner mobile"
                        className="Photography-banner mobile-image"
                    />

                    <div className="hero-content-photography">
                        <h1>{t("Photography.Banner.Title")}</h1>

                        <p>
                            {t("Photography.Banner.ContentLine1")} <br/>
                            {t("Photography.Banner.ContentLine2")}<br/>
                            {t("Photography.Banner.ContentLine3")}
                        </p>

                        <button
                            className="cta-btn"
                            onClick={() => setOpenQuote(true)}
                        >
                            {t("ContainerBanner2.CatBouton")}
                        </button>

                        <RequestAQuoteModal
                            open={openQuote}
                            onClose={() => setOpenQuote(false)}
                        >
                            <RequestAQuote />
                        </RequestAQuoteModal>
                    </div>

                    <Link
                        to="Container-WhyUs"
                        className="scroll-down"
                        offset={-90}
                        duration={500}
                        spy
                        smooth
                    >
                        <i className="fa-solid fa-angles-down"></i>
                    </Link>
                </div>

                <TypePhotos/>
                <PricingPhotography/>
                <PhotographyGallery/>

                {/*---------------- Direction Section ----------------*/}
                <section className="audiovisual-direction-Mike">
                    <div className="direction-Mike-inner">
                        <div className="audiovisual-direction-image">
                            <img src={batemburgpic} alt="Portrait of the company director" />
                        </div>
                        <div className="audiovisual-direction-text">
                            <div className="audiovisual-direction-badge"></div>
                            <h1>
                                {t("WhereEmotionMeets.Title")}
                            </h1>
                            <p>
                                {t("WhereEmotionMeets.Content")}
                            </p>
                        </div>
                    </div>
                </section>

                <section
                    className="audiovisual-direction-Mike"
                    style={{ backgroundColor: "#2c0039" }}
                >
                    <div className="direction-Mike-inner">
                        <div className="audiovisual-direction-text">
                            <div className="audiovisual-direction-badge"></div>
                            <h1 style={{ color: "white" }}>
                                {t("WhereEmotionBecomes.Title")}
                            </h1>
                            <p style={{ color: "white", marginBottom: "30px" }}>
                                {t("WhereEmotionBecomes.Content")}
                            </p>
                        </div>
                        <div className="audiovisual-direction-image">
                            <img src={mike_direction_photo} alt="Direction mike monic" />
                        </div>
                    </div>
                </section>

                <OurWorkflow/>

                {/*---------------- Why Choose ----------------*/}
                <div
                    className="Section-WhoAreWe"
                    style={{
                        backgroundColor:"black",
                        color: "#75deff",
                        paddingBottom: "100px",
                        paddingTop: "100px"
                    }}
                >
                    <div className="WhoAreWe-left">
                        <h1>
                            {t("WhyChooseFalconXXL.BigTitle")}
                        </h1>
                    </div>

                    <div className="WhoAreWe-right">
                        <div className="WhoAreWe-text">
                            <div className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <div>
                                    <strong style={{ color: "#75deff" }}>
                                        {t("WhyChooseFalconXXL.ContentLine1a")}
                                    </strong>{" "}
                                    {t("WhyChooseFalconXXL.ContentLine1b")}
                                </div>
                            </div>

                            <div className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <div>
                                    <strong style={{ color: "#75deff" }}>
                                        {t("WhyChooseFalconXXL.ContentLine2a")}
                                    </strong>{" "}
                                    {t("WhyChooseFalconXXL.ContentLine2b")}
                                </div>
                            </div>

                            <div className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <div>
                                    <strong style={{ color: "#75deff" }}>
                                        {t("WhyChooseFalconXXL.ContentLine3a")}
                                    </strong>{" "}
                                    {t("WhyChooseFalconXXL.ContentLine3b")}
                                </div>
                            </div>
                            <div className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <div>
                                    <strong style={{ color: "#75deff" }}>
                                        {t("WhyChooseFalconXXL.ContentLine4a")}
                                    </strong>{" "}
                                    {t("WhyChooseFalconXXL.ContentLine4b")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <WhatsappFunction/>

                <Footer/>
            </div>
        </>
    );
}

export default Photography;
