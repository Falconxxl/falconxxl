import './BrandIdentity.css';
import NavbarMenu from "../Layout/NavbarMenu";
import Navbar2 from "../Layout/Navbar2";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import Footer from "../Layout/Footer";

import desktop_banner_branding from "../Images/background_sky_green_yellow12.jpg";
import mobile_banner from "../Images/background_Brenda_blue_mobile8.jpg";

import {Link} from "react-scroll";

import React, { useState, useEffect } from "react";
import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";
import PageLoader from "../Components/PageLoader";


import TypeBranding from "../Layout/TypeBranding";

import branding_image1 from "../Images/image_papeterie_branding4"
import branding_image2 from "../Images/image_support_pub2"
import branding_image3 from "../Images/image_branding_digital3"
import branding_image4 from "../Images/image_branding_digital4"
import PricingBranding from "../Layout/PricingBranding";
import OurWorkflow from "../Layout/OurWorkflow";
import WhatsappFunction from "../Components/WhatsappFunction";
import { useTranslation } from "react-i18next";

function BrandIdentity() {

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
            {loading && <PageLoader />}

    <div>
            <NavbarMenu/>
            <NavbarMenuMobile/>
            <Navbar2/>

            {/*------banner---------------*/}

            <header className="hero-banner">
                {/* Image desktop */}
                <img src={desktop_banner_branding} alt="Banner desktop" className="hero-image desktop-image" />

                {/* Image mobile */}
                <img src={mobile_banner} alt="Banner mobile" className="hero-image mobile-image" />

                <div className="hero-content">

                    <h1 >  {t("Branding.Banner.Title")}</h1>

                    <p>
                        {t("Branding.Banner.ContentLine1")}<br/>
                        {t("Branding.Banner.ContentLine2")}<br/>
                        {t("Branding.Banner.ContentLine3")}
                    </p>

                    <button className="cta-btn"
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

                <Link to="AudioVisual-Description" className="scroll-down"
                      offset={-90} duration={500} spy={true} smooth={true} >
                    <i className="fa-solid fa-angles-down"></i>
                </Link>
            </header>

            {/*------------description--------------*/}

            <div className="AudioVisual-Description">

                <div className="AudioVisual-Description-left">

                    <h1 style={{
                        fontSize:"50px"
                    }}>
                        {t("Branding.Descsription.Title")}
                    </h1>

                    <p style={{
                        fontSize:"25px"
                    }}>
                        {t("Branding.Descsription.Subtitle")}
                    </p>

                </div>

                <div className="AudioVisual-Description-Right" style={{height:"auto"}}>

                    <p style={{fontSize:"16px"}}>
                        {t("Branding.Descsription.ContentLine1")}{" "}
                        <strong style={{color:"#f3bb2f"}}>{t("Branding.Descsription.ContentLineBold1")}</strong>{" "}
                        {t("Branding.Descsription.ContentLine2")}{" "}
                        <strong style={{color:"#f3bb2f"}}>{t("Branding.Descsription.ContentLineBold2")}</strong>,{" "}
                        {t("Branding.Descsription.ContentLine3")}
                    </p>


                </div>

            </div>

            {/*------------services list branding---------------------------------------*/}

             <TypeBranding/>

            {/*------------Nos poles de branding-------------------------------*/}

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

            {/*------------Pricing Branding-------------------------------*/}

            <PricingBranding/>
            <OurWorkflow/>

            {/*----------why shoosing our Branding services-----------*/}

            <div className="Section-WhoAreWe"
                 style={{background:"black"}}
            >
                <div className="WhoAreWe-left"
                     >
                    <h1>{t("Branding.WhyOurBranding.Title")}</h1>
                </div>

                <div className="WhoAreWe-right">

                    <div className="WhoAreWe-text">
                        <div className="checklist-item">
                            <i className="fa-solid fa-circle-check checklist-icon"></i>
                            <div><strong style={{color:"#75deff"}}>{t("Branding.WhyOurBranding.ContentLine1a")}</strong>
                                {t("Branding.WhyOurBranding.ContentLine1b")}
                            </div>
                        </div>

                        <div className="checklist-item">
                            <i className="fa-solid fa-circle-check checklist-icon"></i>
                            <div><strong style={{color:"#75deff"}}>{t("Branding.WhyOurBranding.ContentLine2a")}</strong>
                                {t("Branding.WhyOurBranding.ContentLine2b")}
                            </div>
                        </div>

                        <div className="checklist-item">
                            <i className="fa-solid fa-circle-check checklist-icon"></i>
                            <div><strong style={{color:"#75deff"}}>{t("Branding.WhyOurBranding.ContentLine3a")}</strong>
                                {t("Branding.WhyOurBranding.ContentLine3b")}
                            </div>
                        </div>

                        <div className="checklist-item">
                            <i className="fa-solid fa-circle-check checklist-icon"></i>
                            <div><strong style={{color:"#75deff"}}>{t("Branding.WhyOurBranding.ContentLine4a")}</strong>
                                {t("Branding.WhyOurBranding.ContentLine4b")}
                            </div>
                        </div>

                        <div className="checklist-item">
                            <i className="fa-solid fa-circle-check checklist-icon"></i>
                            <div><strong style={{color:"#75deff"}}>{t("Branding.WhyOurBranding.ContentLine5a")}</strong>
                                {t("Branding.WhyOurBranding.ContentLine5b")}
                            </div>
                        </div>

                        <div className="checklist-item">
                            <i className="fa-solid fa-circle-check checklist-icon"></i>
                            <div><strong style={{color:"#75deff"}}>{t("Branding.WhyOurBranding.ContentLine6a")}</strong>
                                {t("Branding.WhyOurBranding.ContentLine6b")}
                            </div>
                        </div>

                        <div className="checklist-item">
                            <i className="fa-solid fa-circle-check checklist-icon"></i>
                            <div><strong style={{color:"#75deff"}}>{t("Branding.WhyOurBranding.ContentLine7a")}</strong>
                                {t("Branding.WhyOurBranding.ContentLine7b")}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/*------------------------------------------------*/}

            <WhatsappFunction/>
            <Footer/>
        </div>

      </>
    );
}

export default BrandIdentity;