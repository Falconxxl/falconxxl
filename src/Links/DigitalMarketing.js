import './DigitalMarketing.css';
import NavbarMenu from "../Layout/NavbarMenu";
import Navbar2 from "../Layout/Navbar2";
import Footer from "../Layout/Footer";

import desktop_banner_photograhy from "../Images/background_digital_marketing5d.png";
import mobile_banner from "../Images/background_Brenda_blue_mobile6d.png";

import {Link} from "react-scroll";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";

import OurWorkflow from "../Layout/OurWorkflow";
import PricingDigitalMarketing from "../Layout/PricingDigitalMarketing";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import WhatsappFunction from "../Components/WhatsappFunction";

function DigitalMarketing() {

    const { t } = useTranslation();

    const [openQuote, setOpenQuote] = useState(false);

    return (
        <div className="Container-DigitalMarketing">
            <NavbarMenu/>
            <NavbarMenuMobile/>
            <Navbar2/>

            <div className="Container-webdesign">

                <img src={desktop_banner_photograhy} alt="Banner desktop" className="Webdesign-banner desktop-image"/>

                <img src={mobile_banner} alt="Banner mobile" className="Webdesign-banner mobile-image"/>

                <div className="hero-content-webdesign">

                    <h1
                        // style={{color:"#f3bb2f"}}
                        style={{color:"black"}}
                    >{t("DigitalMarketing.Banner.Title")}</h1>

                    <p className="webdesign-paragraphe-desktop"
                       // style={{color:"white"}}
                       style={{color:"black"}}
                    >
                        {t("DigitalMarketing.Banner.Content1")}<br/>
                        {t("DigitalMarketing.Banner.Content2")}<br/>
                        {t("DigitalMarketing.Banner.Content3")}
                    </p>

                    <p className="webdesign-paragraphe-mobile" style={{color:"white", fontSize:"17px"}}>
                        {t("DigitalMarketing.Banner.Content")}
                    </p>

                    <button className="cta-btn-webdesign"
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

                <Link to="AudioVisual-Description" className="scroll-down-webdesign"
                      style={{border:"2px solid #f3bb2f"}}
                      offset={-90} duration={500} spy={true} smooth={true} >
                    <i className="fa-solid fa-angles-down"></i>
                </Link>
            </div>

            {/*---------------Description-digital Marketing----------------*/}

            <div className="AudioVisual-Description">

                <div className="AudioVisual-Description-left">
                    <p>
                        {t("DigitalMarketing.Description.Title")}
                    </p>

                </div>

                <div className="AudioVisual-Description-Right">
                    <p>
                        {t("DigitalMarketing.Description.Content")}
                    </p>

                </div>

            </div>

            {/*---------------Type-Services Digital-Marketing--------------------*/}

            <div className="Container-WhyUs">

                <div className="Container-WhyUs-left">
                    <h1>{t("DigitalMarketing.TypeServicesDigitalMarketing.Title")}</h1>
                    {/*<h1>Why <br />Choose <br /> Falcon XXL?</h1>*/}
                </div>

                <div className="Container-WhyUs-right">

                    {/* Bloc 1 */}
                    <div className="Container-WhyUs-right-content">
                        <div className="Container-WhyUs-right-title">
                            {t("DigitalMarketing.TypeServicesDigitalMarketing.1igitalStrategyConsulting.Title")}
                        </div>
                        <div className="Container-WhyUs-right-paragraf">
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.1igitalStrategyConsulting.ContentLine1")}
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.1igitalStrategyConsulting.ContentLine2")}
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.1igitalStrategyConsulting.ContentLine3")}
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.1igitalStrategyConsulting.ContentLine4")}
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.1igitalStrategyConsulting.ContentLine5")}
                                </p>
                            </div>
                            <div className="icon-text" style={{marginBottom:"30px"}}>
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.1igitalStrategyConsulting.ContentLine6")}
                                </p>
                            </div>

                            <div className="icon-text">
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.1igitalStrategyConsulting.ContentLine7")}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*---------------------------------------------------*/}

                    {/* Bloc 1 */}
                    <div className="Container-WhyUs-right-content">
                        <div className="Container-WhyUs-right-title">
                            {t("DigitalMarketing.TypeServicesDigitalMarketing.2SocialediaManagement.Title")}
                        </div>
                        <div className="Container-WhyUs-right-paragraf">
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.2SocialediaManagement.ContentLine1")}
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.2SocialediaManagement.ContentLine2")}
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.2SocialediaManagement.ContentLine3")}
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.2SocialediaManagement.ContentLine4")}
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.2SocialediaManagement.ContentLine5")}
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.2SocialediaManagement.ContentLine6")}
                                </p>
                            </div>
                            <div className="icon-text" style={{marginBottom:"30px"}}>
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.2SocialediaManagement.ContentLine7")}
                                </p>
                            </div>

                            <div className="icon-text">
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.2SocialediaManagement.ContentLine8")}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*---------------------------------------------------*/}

                    {/* Bloc 1 */}
                    <div className="Container-WhyUs-right-content">
                        <div className="Container-WhyUs-right-title">
                            {t("DigitalMarketing.TypeServicesDigitalMarketing.3DigitalContentCreation.Title")}
                        </div>
                        <div className="Container-WhyUs-right-paragraf">
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.3DigitalContentCreation.ContentLine1")}
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.3DigitalContentCreation.ContentLine2")}
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.3DigitalContentCreation.ContentLine3")}
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.3DigitalContentCreation.ContentLine4")}
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.3DigitalContentCreation.ContentLine5")}
                                </p>
                            </div>
                            <div className="icon-text" style={{marginBottom:"30px"}}>
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.3DigitalContentCreation.ContentLine6")}
                                </p>
                            </div>

                            <div className="icon-text">
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.3DigitalContentCreation.ContentLine7")}
                                </p>
                            </div>

                            <div className="icon-text">
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.3DigitalContentCreation.ContentLine8")}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*---------------------------------------------------*/}

                    {/* Bloc 1 */}
                    <div className="Container-WhyUs-right-content">
                        <div className="Container-WhyUs-right-title">
                            {t("DigitalMarketing.TypeServicesDigitalMarketing.4SearchEngineOptimization.Title")}
                        </div>
                        <div className="Container-WhyUs-right-paragraf">
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.4SearchEngineOptimization.ContentLine1")}
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.4SearchEngineOptimization.ContentLine2")}
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.4SearchEngineOptimization.ContentLine3")}
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.4SearchEngineOptimization.ContentLine4")}
                                </p>
                            </div>
                            <div className="icon-text" style={{marginBottom:"30px"}}>
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.4SearchEngineOptimization.ContentLine5")}
                                </p>
                            </div>

                            <div className="icon-text">
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.4SearchEngineOptimization.ContentLine6")}
                                </p>
                            </div>

                            <div className="icon-text">
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.4SearchEngineOptimization.ContentLine7")}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*---------------------------------------------------*/}

                    {/* Bloc 1 */}
                    <div className="Container-WhyUs-right-content">
                        <div className="Container-WhyUs-right-title">
                            {t("DigitalMarketing.TypeServicesDigitalMarketing.5OnlineAdvertising.Title")}
                        </div>
                        <div className="Container-WhyUs-right-paragraf">
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.5OnlineAdvertising.ContentLine1")}
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.5OnlineAdvertising.ContentLine2")}
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.5OnlineAdvertising.ContentLine3")}
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.5OnlineAdvertising.ContentLine4")}
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.5OnlineAdvertising.ContentLine5")}
                                </p>
                            </div>

                            <div className="icon-text">
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.5OnlineAdvertising.ContentLine6")}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*---------------------------------------------------*/}

                    {/* Bloc 1 */}
                    <div className="Container-WhyUs-right-content">
                        <div className="Container-WhyUs-right-title">
                            {t("DigitalMarketing.TypeServicesDigitalMarketing.6EmailMarketingAutomation.Title")}
                        </div>
                        <div className="Container-WhyUs-right-paragraf">
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.6EmailMarketingAutomation.ContentLine1")}
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.6EmailMarketingAutomation.ContentLine2")}
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.6EmailMarketingAutomation.ContentLine3")}
                                </p>
                            </div>
                            <div className="icon-text" style={{marginBottom:"30px"}}>
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.6EmailMarketingAutomation.ContentLine4")}
                                </p>
                            </div>

                            <div className="icon-text">
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.6EmailMarketingAutomation.ContentLine5")}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*---------------------------------------------------*/}

                    {/* Bloc 1 */}
                    <div className="Container-WhyUs-right-content">
                        <div className="Container-WhyUs-right-title">
                            {t("DigitalMarketing.TypeServicesDigitalMarketing.7BrandingDigitalIdentity.Title")}
                        </div>
                        <div className="Container-WhyUs-right-paragraf">
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.7BrandingDigitalIdentity.ContentLine1")}
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.7BrandingDigitalIdentity.ContentLine2")}
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.7BrandingDigitalIdentity.ContentLine3")}
                                </p>
                            </div>
                            <div className="icon-text" style={{marginBottom:"30px"}}>
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.7BrandingDigitalIdentity.ContentLine4")}
                                </p>
                            </div>

                            <div className="icon-text">
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.7BrandingDigitalIdentity.ContentLine5")}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*------------------------------------------------------------*/}

                    {/* Bloc 1 */}
                    <div className="Container-WhyUs-right-content">
                        <div className="Container-WhyUs-right-title">
                            {t("DigitalMarketing.TypeServicesDigitalMarketing.8AnalyticsOptimization.Title")}
                        </div>
                        <div className="Container-WhyUs-right-paragraf">
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.8AnalyticsOptimization.ContentLine1")}
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.8AnalyticsOptimization.ContentLine2")}
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.8AnalyticsOptimization.ContentLine3")}
                                </p>
                            </div>

                            <div className="icon-text" style={{marginBottom:"30px"}}>
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.8AnalyticsOptimization.ContentLine4")}
                                </p>
                            </div>

                            <div className="icon-text">
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.8AnalyticsOptimization.ContentLine5")}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*------------------------------------------------------------*/}

                    {/* Bloc 1 */}
                    <div className="Container-WhyUs-right-content-x">
                        <div className="Container-WhyUs-right-title">
                            {t("DigitalMarketing.TypeServicesDigitalMarketing.9ContentMarketing.Title")}
                        </div>
                        <div className="Container-WhyUs-right-paragraf">
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.9ContentMarketing.ContentLine1")}
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.9ContentMarketing.ContentLine2")}
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.9ContentMarketing.ContentLine3")}
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.9ContentMarketing.ContentLine4")}
                                </p>
                            </div>
                            <div className="icon-text">
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.9ContentMarketing.ContentLine5")}
                                </p>
                            </div>
                            <div className="icon-text" style={{marginBottom:"30px"}}>
                                <i className="fa-solid fa-circle-check"></i>
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.9ContentMarketing.ContentLine6")}
                                </p>
                            </div>

                            <div className="icon-text">
                                <p>
                                    {t("DigitalMarketing.TypeServicesDigitalMarketing.9ContentMarketing.ContentLine7")}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/*------------------------------------------------------------*/}

            <PricingDigitalMarketing/>
            <OurWorkflow/>
            <WhatsappFunction/>
            <Footer/>
        </div>
    );
}

export default DigitalMarketing;