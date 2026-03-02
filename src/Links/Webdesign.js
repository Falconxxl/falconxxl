import { Helmet } from 'react-helmet-async';
import './Webdesign.css';
import NavbarMenu from "../Layout/NavbarMenu";

import Navbar2 from "../Layout/Navbar2";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import Footer from "../Layout/Footer";

import desktop_banner_photograhy from "../Images/background_webdesign6.jpg";
import mobile_banner from "../Images/background_Brenda_blue_mobile6.jpg";
import compo_webdesign_laptop1 from "../Images/compo_laptop1a_webdesign.png";
import compo_webdesign_laptop2 from "../Images/compo_laptop2b_webdesign.png";
import compo_webdesign_laptop3 from "../Images/compo_laptop3a_webdesign.png";

import { Link } from "react-scroll";
import OurWorkflow from "../Layout/OurWorkflow";
// import PricingWebdesign from "../Layout/PricingWebdesign";

import React, { useState, useEffect } from "react";
import PageLoader from "../Components/PageLoader";

import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";
import WhatsappFunction from "../Components/WhatsappFunction";
import { useTranslation } from "react-i18next";

function Webdesign() {

    const { t } = useTranslation();
    const [openQuote, setOpenQuote] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // images lourdes → petit délai pour rendu fluide
        const timer = setTimeout(() => {
            setLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Helmet>
                <title>{t("HelmetSEO.Webdesign.title")}</title>
                <meta name="description" content={t("HelmetSEO.Webdesign.description")} />
                <link rel="canonical" href="https://www.falconxxl.com/Webdesign" />
            </Helmet>

            {loading && <PageLoader />}

            <div className={`webdesign-wrapper ${loading ? "hidden" : "visible"}`}>
                <NavbarMenu/>
                <NavbarMenuMobile/>
                <Navbar2/>

                {/*---------------- Banner ----------------*/}
                <div className="Container-webdesign">
                    <img
                        src={desktop_banner_photograhy}
                        alt="Banner desktop"
                        className="Webdesign-banner desktop-image"
                    />

                    <img
                        src={mobile_banner}
                        alt="Banner mobile"
                        className="Webdesign-banner mobile-image"
                    />

                    <div className="hero-content-webdesign">
                        <h1>{t("PageWebdesign.BannerWebdesign.Title")}</h1>

                        <p className="webdesign-paragraphe-desktop">
                            {t("PageWebdesign.BannerWebdesign.Content1")}<br/>
                            {t("PageWebdesign.BannerWebdesign.Content2")}
                        </p>

                        <p className="webdesign-paragraphe-mobile">
                            {t("PageWebdesign.BannerWebdesign.Content1")}
                        </p>

                        <button
                            className="cta-btn-webdesign"
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
                        to="Section-WhoAreWe"
                        className="scroll-down-webdesign"
                        offset={-90}
                        duration={500}
                        spy
                        smooth
                    >
                        <i className="fa-solid fa-angles-down"></i>
                    </Link>
                </div>

                {/*---------------- Description ----------------*/}
                <div className="Section-WhoAreWe"
                style={{backgroundColor:"black"}}>
                    <div className="WhoAreWe-left">
                        <h1>{t("PageWebdesign.WhatOurWebsite.BigTitle")}</h1>
                    </div>

                    <div className="WhoAreWe-right">
                        <p className="WhoAreWe-title">
                            {t("PageWebdesign.WhatOurWebsite.Title")}
                        </p>

                        <div className="WhoAreWe-text">
                            <div className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <div>{t("PageWebdesign.WhatOurWebsite.ContentLine1")}</div>
                            </div>
                            <div className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <div>{t("PageWebdesign.WhatOurWebsite.ContentLine2")}</div>
                            </div>
                            <div className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <div>{t("PageWebdesign.WhatOurWebsite.ContentLine3")}</div>
                            </div>
                            <div className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <div>{t("PageWebdesign.WhatOurWebsite.ContentLine1")}</div>
                            </div>
                            <div className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <div>{t("PageWebdesign.WhatOurWebsite.ContentLine2")}</div>
                            </div>
                            <div className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <div>{t("PageWebdesign.WhatOurWebsite.ContentLine3")}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*---------------- Projects ----------------*/}
                <div className="Container-OurWorkflow">
                    <h1>{t("OurWebDesignProjects")}</h1>

                    <div className="OurWorkflow-wrapper">
                        {[compo_webdesign_laptop1, compo_webdesign_laptop2, compo_webdesign_laptop3].map(
                            (img, index) => (
                                <div
                                    key={index}
                                    className="Container-OurWorkflow-content"
                                    style={{ backgroundColor: "#f3bb2f", width: "400px" }}
                                >
                                    <div className="OurRealisations-webdesign-image">
                                        <img
                                            src={img}
                                            alt="Webdesign project"
                                            className="image_realisation_iphone"
                                            style={{ width: "400px" }}
                                        />
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/*<PricingWebdesign/>*/}
                <OurWorkflow/>
                <WhatsappFunction/>
                <Footer/>
            </div>
        </>
    );
}

export default Webdesign;
