import './ServiceHome.css';
import React, {useState} from "react";

import Wedding_home from "../Images/mike_brenda_home7.png";
import laptops_home from "../Images/laptops_home8.png";
import Branding_home from "../Images/Branding_home8.png";
import logic_guitare_home from "../Images/logic_guitare_home7.png";
import icon_film from "../Images/icon_film3.png";
import icon_webdesign from "../Images/icon_webdesign2.png";
import icon_brand from "../Images/icon_brand2.png";
import icon_music from "../Images/icon_music2.png";

import {NavLink} from "react-router-dom";
import Modal1 from "../Components/Modal/Modal1";
import { useTranslation } from "react-i18next";


function ServiceHome () {

    const { t } = useTranslation();

    const [openModal, setOpenModal] = useState(false);


    return (

        <>

         <div className="Container-ServiceHome">

            <h1 className="title-ServiceHome">
                {t("ServiceHomeExplore.BigTitleLine1")}
                <br/>
                {t("ServiceHomeExplore.BigTitleLine2")}
            </h1>
            <h1 className="title-ServiceHome-mobile">
                {t("ServiceHomeExplore.BigTitleMobile")}
            </h1>

            {/*----------------Audiovisual--------------------------*/}

            <div className="Container-ServiceHome-single">

                <div className="text-Container-ServiceHome-single">
                    <h3>
                        <img src={icon_film} alt="wedding_home" className="icon_home_services" />
                        {t("ServiceHomeExplore.Audiovisual.Title")}
                    </h3>

                    <h2>
                        {t("ServiceHomeExplore.Audiovisual.SubtitleLine1")}
                    </h2>
                    <p>
                        {t("ServiceHomeExplore.Audiovisual.ContentLine1")}
                    </p>
                    <NavLink to="/AudioVisual"  className="btn-text-Container-ServiceHome-single">
                        {t("ServiceHomeExplore.Audiovisual.CAT")}
                        <i className="fa-solid fa-arrow-right"></i>
                    </NavLink>
                </div>

                <div
                    className="media-Container-ServiceHome-single-x"
                >
                    <button onClick={() => setOpenModal(true)}
                            className="media-Container-ServiceHome-single-x"
                    >
                        <img src={Wedding_home} alt="wedding_home"
                             className="image-mike_brenda-home-x"

                        />
                    </button>
                    <Modal1 open={openModal} onClose={() => setOpenModal(false)} />
                </div >

            </div>


            {/*----------------Webdesign--------------------------*/}

            <div className="Container-ServiceHome-single">

                <div className="text-Container-ServiceHome-single">

                    <h3>
                        <img src={icon_webdesign} alt="wedding_home" className="icon_home_services" />
                        {t("ServiceHomeExplore.Webdesign.Title")}
                    </h3>
                    <h2>
                        {t("ServiceHomeExplore.Webdesign.SubtitleLine1")}
                    </h2>
                    <p>
                        {t("ServiceHomeExplore.Webdesign.ContentLine1")}
                    </p>
                    <NavLink to='/Webdesign' className="btn-text-Container-ServiceHome-single">
                        {t("ServiceHomeExplore.Webdesign.CAT")}
                        <i className="fa-solid fa-arrow-right"></i>
                    </NavLink>

                </div>

                <NavLink to='/Webdesign' className="media-Container-ServiceHome-single">
                    <img src={laptops_home} alt="wedding_home"
                         className="image-mike_brenda-home"
                    />
                </NavLink>

            </div>

            {/*--------------Branding----------------------------*/}

            <div className="Container-ServiceHome-single">
                <div className="text-Container-ServiceHome-single">

                    <h3>
                        <img src={icon_brand} alt="wedding_home" className="icon_home_services" />
                        {t("ServiceHomeExplore.Branding.Title")}
                    </h3>
                    <h2>
                        {t("ServiceHomeExplore.Branding.SubtitleLine1")}
                    </h2>
                    <p>
                        {t("ServiceHomeExplore.Branding.ContentLine1")}
                    </p>
                    <NavLink to='/BrandIdentity' className="btn-text-Container-ServiceHome-single">
                        {t("ServiceHomeExplore.Webdesign.CAT")}
                        <i className="fa-solid fa-arrow-right"></i>
                    </NavLink>

                </div>

                <NavLink to='/BrandIdentity' className="media-Container-ServiceHome-single">
                    <img src={Branding_home} alt="Branding_home" className="image-mike_brenda-home" />
                </NavLink>
            </div>

            {/*---------------Music---------------------------*/}

            <div className="Container-ServiceHome-single">
                <div className="text-Container-ServiceHome-single">

                    <h3>
                        <img src={icon_music} alt="wedding_home" className="icon_home_services" />
                        {t("ServiceHomeExplore.MusicProduction.Title")}
                    </h3>
                    <h2>
                        {t("ServiceHomeExplore.MusicProduction.SubtitleLine1")}
                    </h2>
                    <p>
                        {t("ServiceHomeExplore.MusicProduction.ContentLine1")}{" "}

                        <a href="https://www.falconbeat.nl" target="_blank" rel="noopener noreferrer"
                        style={{color:"#f3bb2f", fontWeight:"800", textDecoration:"none"}}>
                            FalconBeat
                        </a>

                        {" "}{t("ServiceHomeExplore.MusicProduction.ContentLine2")}
                    </p>


                    <NavLink to='/Music' className="btn-text-Container-ServiceHome-single">
                        {t("ServiceHomeExplore.Webdesign.CAT")}
                        <i className="fa-solid fa-arrow-right"></i>
                    </NavLink>

                </div>

                <NavLink to='/Music' className="media-Container-ServiceHome-single-x">
                    <img src={logic_guitare_home} alt="wedding_home" className="image-mike_brenda-home-x" />
                </NavLink>
            </div>

        </div>
        </>

    );
}

export default ServiceHome ;