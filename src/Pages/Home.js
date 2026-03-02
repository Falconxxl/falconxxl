import './Home.css';
import { Helmet } from 'react-helmet-async';
import Navbar2 from "../Layout/Navbar2";
import Footer from "../Layout/Footer";
import NavbarMenu from "../Layout/NavbarMenu";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import ContainerBanner2 from "../Layout/ContainerBanner2";
import ServiceHome from "../Layout/ServiceHome";
import OurWorkflow from "../Layout/OurWorkflow";
import WhyUs from "../Layout/WhyUs";
import OurRealisations from "../Layout/OurRealisations";
import WhatsappFunction from "../Components/WhatsappFunction";
import { useTranslation } from "react-i18next";

import React, { useEffect, useState } from "react";
import PageLoader from "../Components/PageLoader";
import Ads from "../Layout/Ads";
import video_boucle_banner from "../MyVideos/z_banner40 (correct 4).mp4";
import video_boucle_banner_mobile from "../MyVideos/Banner_Site_ boucle (Mobile 10) correct3.mp4";
import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";
import {Link} from "react-scroll";
// import Welcome from "../Layout/Welcome";
// import WelcomeMobile from "../Layout/WelcomeMobile";


function Home() {

    const [openQuote, setOpenQuote] = useState(false);

    const { t } = useTranslation();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // simule le chargement (images, composants lourds)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 700); // ajuste si besoin

        return () => clearTimeout(timer);
    }, []);


    return (
        <>
            <Helmet>
                <title>{t("HelmetSEO.Home.title")}</title>
                <meta name="description" content={t("HelmetSEO.Home.description")} />
                <link rel="canonical" href="https://www.falconxxl.com/" />
            </Helmet>

            {loading && <PageLoader />}

            <div className={`home-wrapper ${loading ? "hidden" : "visible"}`}>

                <NavbarMenu/>
                <NavbarMenuMobile/>
                <Navbar2/>

                {/*----------banner audiovisuel--------------------------------------*/}
                <header className="AudioVisual-banner">
                    <video autoPlay muted loop playsInline className="AudioVisual-video desktop-video">
                        <source src={video_boucle_banner} type="video/mp4"/>
                    </video>

                    <video autoPlay muted loop playsInline className="AudioVisual-video mobile-video">
                        <source src={video_boucle_banner_mobile} type="video/mp4"/>
                    </video>

                    <div className="AudioVisual-content">
                        <button
                            className="cta-btn-AudioVisual"
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
                        to="AudioVisual-Description"
                        className="AudioVisual-scroll-down"
                        offset={-90}
                        duration={500}
                        spy
                        smooth
                    >
                        <i className="fa-solid fa-angles-down"></i>
                    </Link>
                </header>

                {/*---------------Description----------------*/}

                {/*<Welcome/>*/}

                {/*<WelcomeMobile/>*/}

                {/*--------------------------------------------------------------------------*/}

                <div className="Section-WhoAreWe"
                     style={{backgroundColor:"black"}}
                >
                    <div className="WhoAreWe-left">
                        <h1>
                            {t("HomeFalconXXL.Title")}
                        </h1>

                    </div>

                    <div className="WhoAreWe-right">
                        <p className="WhoAreWe-title">
                            {t("HomeFalconXXL.SubtitleLine1")}
                            <br/>
                            {t("HomeFalconXXL.SubtitleLine2")}

                        </p>

                        <div className="WhoAreWe-text">
                            <div className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <div>
                                    {t("HomeFalconXXL.ContentLine1")}
                                </div>
                            </div>

                            <div className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <div>
                                    {t("HomeFalconXXL.ContentLine2")}
                                </div>
                            </div>

                            <div className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <div>
                                    {t("HomeFalconXXL.ContentLine3")}
                                </div>
                            </div>

                            <div className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <div>
                                    {t("HomeFalconXXL.ContentLine4")}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <ServiceHome/>
                <Ads/>
                <OurRealisations/>
                <OurWorkflow/>
                {/*--------------------------------------------------------------------------*/}
                <ContainerBanner2/>

                {/*--------------------------------------------------------------------------*/}
                <WhyUs/>
                <WhatsappFunction/>
                <Footer/>

            </div>
        </>
    );
}

export default Home;