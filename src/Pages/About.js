import './About.css';
import NavbarMenu from "../Layout/NavbarMenu";

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../Components/LanguageSwitcher";

import Footer from "../Layout/Footer";
import NavbarMenuMobile from "../Layout/NavbarMenuMobile";
import OurWorkflow from "../Layout/OurWorkflow";


import video_drone from "../MyVideos/DRONE_SHOT_VIDEO.mp4";
import video_drone_mobile from "../MyVideos/DRONE_SHOT_VIDEO (Mobile).mp4";

import React, { useState, useEffect } from "react";
import PageLoader from "../Components/PageLoader";
import RequestAQuoteModal from "../Components/Modal/RequestAQuoteModal";
import RequestAQuote from "../Components/RequestAQuote";


import Michea_pic_about from "../Images/michael_pic1.png";
// import mike_direction_photo from "../Images/mike_photography_model2";
import pic_about_tel1 from "../Images/pic_about_tel1.png";
import WhyUs from "../Layout/WhyUs";
import CertificationMichael from "../Layout/CertificationMichael";
import OurTeamAbout from "../Layout/OurTeamAbout";
import WhatsappFunction from "../Components/WhatsappFunction";

function About() {
    const [openQuote, setOpenQuote] = useState(false);
    const [loading, setLoading] = useState(true);


    const { t } = useTranslation();

    useEffect(() => {
        // page lourde (vidéos + images)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 700);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {loading && <PageLoader />}
            <div className={`about-wrapper ${loading ? "hidden" : "visible"}`}>
                <NavbarMenu/>
                <NavbarMenuMobile/>
                {/*<Navbar2/>*/}
                <div className="container-top"></div>

                {/*---------------Banner-About----------------*/}

                <div className="section-drone-video" style={{ backgroundColor: "#f3bb2f" }}>
                    <div className="texte-drone" style={{ backgroundColor: "#f3bb2f" }}>
                        <h1
                            style={{ fontSize: "48px", lineHeight:1.1 , fontWeight:400, color:"black"}}>
                            {t("About.Banner.Title")}
                        </h1>
                        <p style={{color:"black"}}>
                            {t("About.Banner.Content")}
                        </p>
                        <button className="Drone-quote-button"
                                onClick={() => setOpenQuote(true)}

                                style={{backgroundColor: "#f3bb2f",color:"black", border:"1px solid black"}}>
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
                        {/* Vidéo Desktop */}
                        <video
                            className="drone-video-desktop"
                            src={video_drone}
                            autoPlay
                            muted
                            loop
                            playsInline
                        />

                        {/* Vidéo Mobile */}
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

                {/*---------------Who are we?---------------------------------------*/}

                <div className="Section-WhoAreWe"
                     style={{background:"black"}}>
                    <div className="WhoAreWe-left">
                        <h1>{t("About.WhoAreWe.Title")}</h1>
                    </div>

                    <div className="WhoAreWe-right">
                        <p className="WhoAreWe-title" style ={{fontSize:"18px", fontWeight:"400"}}>
                            <strong > FalconXXL </strong>
                            {t("About.WhoAreWe.Subtitle2")}
                        </p>

                        <div className="WhoAreWe-text">
                            <div className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <div style ={{fontSize:"16px", fontWeight:"400"}}>
                                    <strong style={{color:"#75deff"}}>{t("About.WhoAreWe.ContentLine1a")}</strong>
                                    {t("About.WhoAreWe.ContentLine1b")}
                                </div>
                            </div>

                            <div className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <div style ={{fontSize:"16px", fontWeight:"400"}}>
                                    <strong style={{color:"#75deff"}}>{t("About.WhoAreWe.ContentLine2a")}</strong>
                                    {t("About.WhoAreWe.ContentLine2b")}
                                </div>
                            </div>

                            <div className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <div style ={{fontSize:"16px", fontWeight:"400"}}>
                                    <strong style={{color:"#75deff"}}>{t("About.WhoAreWe.ContentLine3a")}</strong>
                                    {t("About.WhoAreWe.ContentLine3b")}
                                </div>
                            </div>

                            <div className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <div style ={{fontSize:"16px", fontWeight:"400"}}>
                                    <strong style={{color:"#75deff"}}>{t("About.WhoAreWe.ContentLine4a")}</strong>
                                    {t("About.WhoAreWe.ContentLine4b")}
                                </div>
                            </div>

                            <div className="checklist-item">
                                <i className="fa-solid fa-circle-check checklist-icon"></i>
                                <div style ={{fontSize:"16px", fontWeight:"400"}}>
                                    <strong style={{color:"#75deff"}}>{t("About.WhoAreWe.ContentLine5a")}</strong>
                                    {t("About.WhoAreWe.ContentLine5b")}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/*--------section-about-founder-Michael Ilunga------------------*/}

                <section className="audiovisual-direction-Mike" style={{
                    borderBottom: "1px solid",
                    borderImage: "linear-gradient(to right, #f9e054, #cb954d) 1",
                    paddingBottom:"0px"}}
                >
                    <div className="direction-Mike-inner" style={{width:"100%", maxWidth:"1400px"}}>
                        <div className="audiovisual-direction-image" style={{maxWidth:"600px"}}>
                            <img src={Michea_pic_about} alt="Mike giving direction during a shoot"
                                 style={{width:"400px"}}/>
                        </div>
                        <div className="audiovisual-direction-text" style={{padding:"20px"}}>
                            <div className="audiovisual-direction-badge">
                            </div>

                            <h1>{t("FounderMichael.BigTitle")}</h1>

                            <p style={{color:"black", fontWeight:"320", fontFamily:"Poppins, sans-serif", lineHeight:"1.5"}}>
                                {t("FounderMichael.Paragraphe1")}<br/><br/>

                                {t("FounderMichael.Paragraphe2")}<br/><br/>

                                {t("FounderMichael.Paragraphe3")}<br/><br/>

                                {t("FounderMichael.Paragraphe4")}
                            </p><br/>
                        </div>
                    </div>
                </section>

                {/*--------Certification------------------*/}

                <CertificationMichael/>

                {/*--------section-about-mission & vision------------------*/}

                <section className="audiovisual-direction-Mike" style={{backgroundColor:"black"}}>
                    <div className="direction-Mike-inner" style={{width:"100%", maxWidth:"1400px"}}>

                        <div className="audiovisual-direction-text" style={{backgroundColor:"black", padding:"20px"}}>
                            <div className="audiovisual-direction-badge">
                            </div>
                            <h1 style={{color:"white"}}>
                                {t("MissionVision.OurMission")}
                            </h1>

                            <h2 style={{
                                color:"#f3bb2f",
                                fontWeight:"400",
                                fontFamily:"Poppins, " +
                                    "sans-serif",
                                marginBottom:"20px",
                                fontSize:"21px"
                            }}>
                                {t("MissionVision.Subtitle1")}
                            </h2>

                            <p style={{color:"white", fontWeight:"320", fontFamily:"Poppins, sans-serif", lineHeight:"1.5"}}>
                                {t("MissionVision.Content1")}
                                <br/><br/>

                                <h2 style={{
                                    color:"#f3bb2f",
                                    fontWeight:"400",
                                    fontFamily:"Poppins, " +
                                        "sans-serif",
                                    marginBottom:"20px",
                                    fontSize:"21px"
                                }}>
                                    {t("MissionVision.Subtitle2")}
                                </h2>

                                {t("MissionVision.Content2")}<br/><br/>
                            </p><br/>

                            <h1 style={{color:"white"}}>{t("MissionVision.OurVision")}</h1>

                            <h2 style={{
                                color:"#f3bb2f",
                                fontWeight:"400",
                                fontFamily:"Poppins, " +
                                    "sans-serif",
                                marginBottom:"20px",
                                fontSize:"21px"
                            }}>
                                {t("MissionVision.Subtitle3")}
                            </h2>

                            <p style={{color:"white", fontWeight:"320", fontFamily:"Poppins, sans-serif", lineHeight:"1.5"}}>
                                {t("MissionVision.Content3")}<br/><br/>

                                <h2 style={{
                                    color:"#f3bb2f",
                                    fontWeight:"400",
                                    fontFamily:"Poppins, " +
                                        "sans-serif",
                                    marginBottom:"20px",
                                    fontSize:"21px"
                                }}>
                                    {t("MissionVision.Subtitle4")}
                                </h2>

                                {t("MissionVision.Content4")}<br/><br/>
                            </p><br/>
                        </div>

                        <div className="audiovisual-direction-image" style={{maxWidth:"600px"}}>
                            <img src={pic_about_tel1} alt="Mike giving direction during a shoot"
                                 style={{width:"400px"}}/>
                        </div>
                    </div>
                </section>

                {/*-------------------------------------------------------------*/}

                <OurTeamAbout/>

                {/*-------------------------------------------------------------*/}

                {/*<h1 className="text-try">{t("about")}</h1>*/}
                {/*<LanguageSwitcher/>*/}
                <NavbarMenu/>



                {/*<div className="text-try">*/}
                {/*    {t("welcome").split("\n").map((line, index) => (*/}
                {/*        <p key={index}>{line}</p>*/}
                {/*    ))}*/}

                {/*    {t("about").split("\n").map((line, index) => (*/}
                {/*        <p key={index}>{line}</p>*/}
                {/*    ))}*/}

                {/*    {t("contact").split("\n").map((line, index) => (*/}
                {/*        <p key={index}>{line}</p>*/}
                {/*    ))}*/}

                {/*    {t("yes").split("\n").map((line, index) => (*/}
                {/*        <p key={index}>{line}</p>*/}
                {/*    ))}*/}
                {/*</div>*/}

                <OurWorkflow/>
                <WhyUs/>
                <WhatsappFunction/>
                <Footer/>
            </div>

        </div>
    );
}

export default About;