import './TypeMusic.css';
import { useTranslation } from "react-i18next";

function TypeMusic() {

    const { t } = useTranslation();

    return (

        <>

         <div className="Container-WhyUs">

            <div className="Container-WhyUs-left">
                <h1>{t("MusicPage.TypeVideo.BigTitle")}</h1>
                {/*<h1>Why <br />Choose <br /> Falcon XXL?</h1>*/}
            </div>

            <div className="Container-WhyUs-right">

                {/* Bloc 1 */}
                <div className="Container-WhyUs-right-content">
                    <div className="Container-WhyUs-right-title">
                        {t("MusicPage.TypeVideo.1ArtistsMusiciansPerformers.Title")}
                    </div>
                    <div className="Container-WhyUs-right-paragraf">
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("MusicPage.TypeVideo.1ArtistsMusiciansPerformers.ContentLine1")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("MusicPage.TypeVideo.1ArtistsMusiciansPerformers.ContentLine2")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("MusicPage.TypeVideo.1ArtistsMusiciansPerformers.ContentLine3")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("MusicPage.TypeVideo.1ArtistsMusiciansPerformers.ContentLine4")}
                            </p>
                        </div>
                    </div>
                </div>

                {/*---------------------------------------------------*/}

                {/* Bloc 1 */}
                <div className="Container-WhyUs-right-content">
                    <div className="Container-WhyUs-right-title">
                        {t("MusicPage.TypeVideo.2BusinessesEntrepreneurs.Title")}
                    </div>
                    <div className="Container-WhyUs-right-paragraf">
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("MusicPage.TypeVideo.2BusinessesEntrepreneurs.ContentLine1")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("MusicPage.TypeVideo.2BusinessesEntrepreneurs.ContentLine2")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("MusicPage.TypeVideo.2BusinessesEntrepreneurs.ContentLine3")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("MusicPage.TypeVideo.2BusinessesEntrepreneurs.ContentLine4")}
                            </p>
                        </div>
                    </div>
                </div>

                {/*------------------------------------------------------------*/}

                {/* Bloc 1 */}
                <div className="Container-WhyUs-right-content">
                    <div className="Container-WhyUs-right-title">
                        {t("MusicPage.TypeVideo.3ContentCreatorsInfluencers.Title")}
                    </div>
                    <div className="Container-WhyUs-right-paragraf">
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("MusicPage.TypeVideo.3ContentCreatorsInfluencers.ContentLine1")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("MusicPage.TypeVideo.3ContentCreatorsInfluencers.ContentLine2")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("MusicPage.TypeVideo.3ContentCreatorsInfluencers.ContentLine3")}
                            </p>
                        </div>
                    </div>
                </div>

                {/*------------------------------------------------------------*/}

                {/* Bloc 2 */}
                <div className="Container-WhyUs-right-content-x">
                    <div className="Container-WhyUs-right-title">
                        {t("MusicPage.TypeVideo.4ForFilmmakersCreators.Title")}
                    </div>
                    <div className="Container-WhyUs-right-paragraf">
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("MusicPage.TypeVideo.4ForFilmmakersCreators.ContentLine1")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("MusicPage.TypeVideo.4ForFilmmakersCreators.ContentLine2")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("MusicPage.TypeVideo.4ForFilmmakersCreators.ContentLine3")}
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        </>
    );
}

export default TypeMusic;
