import './Projects.css';
import NavbarMenu from "../Layout/NavbarMenu";
import Navbar2 from "../Layout/Navbar2";
import Footer from "../Layout/Footer";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";

import video_boucle_banner from "../../src/MyVideos/z_banner40 (quality 19MB).mp4";
import video_boucle_banner_mobile from "../../src/MyVideos/Banner_Site_ boucle (Mobile 21MB).mp4";

import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";
import PageLoader from "../Components/PageLoader";

import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";

import video_drone from "../../src/MyVideos/DRONE_SHOT_VIDEO_correct.mp4";
import video_drone_mobile from "../../src/MyVideos/DRONE_SHOT_VIDEO (Mobile 16 MB).mp4";

import ArchiveVideoReel from "../Layout/ArchiveVideoReel";
import PhotographyGallery from "../Components/PhotographyGallery";

import branding_image1 from "../Images/image_papeterie_branding4";
import branding_image2 from "../Images/image_support_pub2";
import branding_image3 from "../Images/image_branding_digital3";
import branding_image4 from "../Images/image_branding_digital4";

import compo_webdesign_laptop1 from "../Images/compo_laptop1a_webdesign.png";
import compo_webdesign_laptop2 from "../Images/compo_laptop2a_webdesign.png";
import compo_webdesign_laptop3 from "../Images/compo_laptop3a_webdesign.png";
import WhatsappFunction from "../Components/WhatsappFunction";
import { useTranslation } from "react-i18next";


function Projects() {

    const { t } = useTranslation();
    const [openQuote, setOpenQuote] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // page lourde (vidéos / images)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 600);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading && <PageLoader />}

            <div className={`projects-wrapper ${loading ? "hidden" : "visible"}`}>
                <NavbarMenu/>
                <NavbarMenuMobile/>
                <Navbar2/>

                {/*----------banner--------------------------------------*/}
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
                        to="#next-section"
                        className="AudioVisual-scroll-down"
                        offset={-90}
                        duration={500}
                        spy
                        smooth
                    >
                        <i className="fa-solid fa-angles-down"></i>
                    </Link>
                </header>

                {/*---------------Section Drone----------------*/}
                <div className="section-drone-video">
                    <div className="texte-drone">
                        <h1> {t("DroneShot.Title")}</h1>
                        <h2>{t("DroneShot.Subtitle")}</h2>
                        <p>
                            {t("DroneShot.Content")}
                        </p>
                        <button className="Drone-quote-button"
                                onClick={() => setOpenQuote(true)}>
                            {t("ContainerBanner2.CatBouton")}
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                        <RequestAQuoteModal
                            open={openQuote}
                            onClose={() => setOpenQuote(false)}
                        >
                            <RequestAQuote />
                        </RequestAQuoteModal>

                    </div>

                    <div className="wrapper-drone-video">
                        <video
                            className="drone-video-desktop"
                            src={video_drone}
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                        <video
                            className="drone-video-mobile"
                            src={video_drone_mobile}
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    </div>
                </div>

                <ArchiveVideoReel/>
                <PhotographyGallery/>

                {/*------------Our Branding Divisions----------------*/}

                <div className="Container-OurWorkflow" style={{backgroundColor:"white"}}>
                    <h1 style={{color:"#1c6077"}}>{t("Branding.OurBrandingDivisions.BigTitle")}</h1>

                    <div className="OurWorkflow-wrapper">

                        <div className="Container-OurWorkflow-content" style={{backgroundColor:"black"}}>
                            <img src={branding_image1} alt="wedding_home"
                                 className="icon_home_workflow"
                                 style={{textAlign:"center", width:"100%"}}/>
                            <h2>{t("Branding.OurBrandingDivisions.BrandIdentityCoreDesign.Title")}</h2>
                            <ul className="checklist">
                                <li>
                                    <i className="fa-solid fa-circle-check fa-2x"></i>
                                    <span>{t("Branding.OurBrandingDivisions.BrandIdentityCoreDesign.ContentLine1")}</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check fa-2x"></i>
                                    <span>{t("Branding.OurBrandingDivisions.BrandIdentityCoreDesign.ContentLine2")}</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check fa-2x"></i>
                                    <span>{t("Branding.OurBrandingDivisions.BrandIdentityCoreDesign.ContentLine3")}</span>
                                </li>
                            </ul>
                        </div>

                        <div className="Container-OurWorkflow-content" style={{backgroundColor:"black"}}>
                            <img src={branding_image2} alt="wedding_home"
                                 className="icon_home_workflow"
                                 style={{textAlign:"center", width:"100%"}}/>
                            <h2>{t("Branding.OurBrandingDivisions.ProductPackagingDesign.Title")}</h2>
                            <ul className="checklist">
                                <li>
                                    <i className="fa-solid fa-circle-check fa-2x"></i>
                                    <span>{t("Branding.OurBrandingDivisions.ProductPackagingDesign.ContentLine1")}</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check fa-2x"></i>
                                    <span>{t("Branding.OurBrandingDivisions.ProductPackagingDesign.ContentLine2")}</span>
                                </li>
                            </ul>
                        </div>

                        <div className="Container-OurWorkflow-content" style={{backgroundColor:"black"}}>
                            <img src={branding_image3} alt="wedding_home"
                                 className="icon_home_workflow"
                                 style={{textAlign:"center", width:"100%"}}/>
                            <h2>{t("Branding.OurBrandingDivisions.DigitalOnlineBranding.Title")}</h2>
                            <ul className="checklist">
                                <li>
                                    <i className="fa-solid fa-circle-check fa-2x"></i>
                                    <span>{t("Branding.OurBrandingDivisions.DigitalOnlineBranding.ContentLine1")}</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check fa-2x"></i>
                                    <span>{t("Branding.OurBrandingDivisions.DigitalOnlineBranding.ContentLine2")}</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check fa-2x"></i>
                                    <span>{t("Branding.OurBrandingDivisions.DigitalOnlineBranding.ContentLine3")}</span>
                                </li>
                            </ul>
                        </div>

                        <div className="Container-OurWorkflow-content" style={{backgroundColor:"black"}}>
                            <img src={branding_image4} alt="wedding_home"
                                 className="icon_home_workflow"
                                 style={{textAlign:"center", width:"100%"}}/>
                            <h2>{t("Branding.OurBrandingDivisions.MarketingCampaignDesign.Title")}</h2>
                            <ul className="checklist">
                                <li>
                                    <i className="fa-solid fa-circle-check fa-2x"></i>
                                    <span>{t("Branding.OurBrandingDivisions.MarketingCampaignDesign.ContentLine1")}</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check fa-2x"></i>
                                    <span>{t("Branding.OurBrandingDivisions.MarketingCampaignDesign.ContentLine2")}</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check fa-2x"></i>
                                    <span>{t("Branding.OurBrandingDivisions.MarketingCampaignDesign.ContentLine3")}</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-circle-check fa-2x"></i>
                                    <span>{t("Branding.OurBrandingDivisions.MarketingCampaignDesign.ContentLine4")}</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/*----------------Webdesign Projects----------------*/}

                <div className="Container-OurWorkflow">
                    <h1>{t("OurWebDesignProjects")}</h1>

                    <div className="OurWorkflow-wrapper">
                        <img src={compo_webdesign_laptop1} alt="" style={{ width: "400px" }} />
                        <img src={compo_webdesign_laptop2} alt="" style={{ width: "400px" }} />
                        <img src={compo_webdesign_laptop3} alt="" style={{ width: "400px" }} />
                    </div>
                </div>


                <WhatsappFunction/>
                <Footer/>
            </div>
        </>
    );
}

export default Projects;
