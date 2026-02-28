import './TypePhotos.css';
import { useTranslation } from "react-i18next";


function TypePhotos() {

    const { t } = useTranslation();

    return (

        <>

           <div className="Container-WhyUs">

            <div className="Container-WhyUs-left">
                <h1>
                    {t("TypePhotos.Title")}
                </h1>
            </div>

            <div className="Container-WhyUs-right">

                {/* Bloc 1 */}
                <div className="Container-WhyUs-right-content">
                    <div className="Container-WhyUs-right-title">

                        {/*Artists, Musicians & Performers*/}
                        {t("TypePhotos.ArtistsMusiciansPerformers.Subtitle")}

                    </div>
                    <div className="Container-WhyUs-right-paragraf">
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypePhotos.ArtistsMusiciansPerformers.ContentLine1")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypePhotos.ArtistsMusiciansPerformers.ContentLine2")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypePhotos.ArtistsMusiciansPerformers.ContentLine3")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypePhotos.ArtistsMusiciansPerformers.ContentLine4")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypePhotos.ArtistsMusiciansPerformers.ContentLine5")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypePhotos.ArtistsMusiciansPerformers.ContentLine6")}
                            </p>
                        </div>
                    </div>
                </div>

                {/*---------------------------------------------------*/}

                {/* Bloc 1 */}
                <div className="Container-WhyUs-right-content">
                    <div className="Container-WhyUs-right-title">
                        {t("TypePhotos.WeddingsLuxuryEvents.Subtitle")}
                    </div>
                    <div className="Container-WhyUs-right-paragraf">
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypePhotos.WeddingsLuxuryEvents.ContentLine1")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypePhotos.WeddingsLuxuryEvents.ContentLine2")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypePhotos.WeddingsLuxuryEvents.ContentLine3")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypePhotos.WeddingsLuxuryEvents.ContentLine4")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypePhotos.WeddingsLuxuryEvents.ContentLine5")}
                            </p>
                        </div>
                    </div>
                </div>

                {/*------------------------------------------------------------*/}

                {/* Bloc 1 */}
                <div className="Container-WhyUs-right-content">
                    <div className="Container-WhyUs-right-title">
                        {t("TypePhotos.LifestyleSportsContentCreators.Subtitle")}
                    </div>
                    <div className="Container-WhyUs-right-paragraf">
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypePhotos.LifestyleSportsContentCreators.ContentLine1")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypePhotos.LifestyleSportsContentCreators.ContentLine2")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypePhotos.LifestyleSportsContentCreators.ContentLine3")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypePhotos.LifestyleSportsContentCreators.ContentLine4")}
                            </p>
                        </div>
                    </div>
                </div>

                {/*------------------------------------------------------------*/}

                {/* Bloc 2 */}
                <div className="Container-WhyUs-right-content">
                    <div className="Container-WhyUs-right-title">
                        {t("TypePhotos.BeautyFashion.Subtitle")}
                    </div>
                    <div className="Container-WhyUs-right-paragraf">
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>{t("TypePhotos.BeautyFashion.ContentLine1")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypePhotos.BeautyFashion.ContentLine2")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypePhotos.BeautyFashion.ContentLine3")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypePhotos.BeautyFashion.ContentLine4")}
                            </p>
                        </div>
                    </div>
                </div>

                {/*------------------------------------------------------------*/}

                {/* Bloc 2 */}
                <div className="Container-WhyUs-right-content-x">
                    <div className="Container-WhyUs-right-title">
                        {t("TypePhotos.BusinessHospitalityRealEstate.Subtitle")}
                    </div>
                    <div className="Container-WhyUs-right-paragraf">
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypePhotos.BusinessHospitalityRealEstate.ContentLine1")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypePhotos.BusinessHospitalityRealEstate.ContentLine2")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypePhotos.BusinessHospitalityRealEstate.ContentLine3")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypePhotos.BusinessHospitalityRealEstate.ContentLine4")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypePhotos.BusinessHospitalityRealEstate.ContentLine5")}
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </div>

        </>

    );
}

export default TypePhotos;
