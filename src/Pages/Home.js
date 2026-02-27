import './Home.css';
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

import { useEffect, useState } from "react";
import PageLoader from "../Components/PageLoader";
import Ads from "../Layout/Ads";


function Home() {

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
            {loading && <PageLoader />}

            <div className={`home-wrapper ${loading ? "hidden" : "visible"}`}>

                <NavbarMenu/>
                <NavbarMenuMobile/>
                <Navbar2/>
                <ContainerBanner2/>
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
                <WhyUs/>
                <WhatsappFunction/>
                <Footer/>

            </div>
        </>
    );
}

export default Home;