import './TypeVideos.css';
import { useTranslation } from "react-i18next";

function TypeVideos() {

    const { t } = useTranslation();

    return (

        <>

           <div className="Container-WhyUs">

            <div className="Container-WhyUs-left">
                <h1>
                    {t("TypeVideos.Title")}
                </h1>
                {/*<h1>Why <br />Choose <br /> Falcon XXL?</h1>*/}
            </div>

            <div className="Container-WhyUs-right">

                {/* Bloc 1 */}
                <div className="Container-WhyUs-right-content">
                    <div className="Container-WhyUs-right-title">
                        {t("TypeVideos.MusicVideosAndTeaser.Subtitle")}
                    </div>
                    <div className="Container-WhyUs-right-paragraf">
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypeVideos.MusicVideosAndTeaser.ContentLine1")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypeVideos.MusicVideosAndTeaser.ContentLine2")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypeVideos.MusicVideosAndTeaser.ContentLine3")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypeVideos.MusicVideosAndTeaser.ContentLine4")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypeVideos.MusicVideosAndTeaser.ContentLine5")}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bloc 1 */}
                <div className="Container-WhyUs-right-content">
                    <div className="Container-WhyUs-right-title">
                        {t("TypeVideos.WeddingLuxuriousAndEvents.Subtitle")}
                    </div>
                    <div className="Container-WhyUs-right-paragraf">
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypeVideos.WeddingLuxuriousAndEvents.ContentLine1")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypeVideos.WeddingLuxuriousAndEvents.ContentLine2")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypeVideos.WeddingLuxuriousAndEvents.ContentLine3")}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bloc 1 */}
                <div className="Container-WhyUs-right-content">
                    <div className="Container-WhyUs-right-title">
                        {t("TypeVideos.ContentCreatorsLifestyle.Subtitle")}
                    </div>
                    <div className="Container-WhyUs-right-paragraf">
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypeVideos.ContentCreatorsLifestyle.ContentLine1")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypeVideos.ContentCreatorsLifestyle.ContentLine2")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypeVideos.ContentCreatorsLifestyle.ContentLine3")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypeVideos.ContentCreatorsLifestyle.ContentLine4")}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bloc 2 */}
                <div className="Container-WhyUs-right-content">
                    <div className="Container-WhyUs-right-title">
                        {t("TypeVideos.BeautyFashionCreators.Subtitle")}
                    </div>
                    <div className="Container-WhyUs-right-paragraf">
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypeVideos.BeautyFashionCreators.ContentLine1")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypeVideos.BeautyFashionCreators.ContentLine2")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypeVideos.BeautyFashionCreators.ContentLine3")}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bloc 2 */}
                <div className="Container-WhyUs-right-content-x">
                    <div className="Container-WhyUs-right-title">
                        {t("TypeVideos.BusinessPromotionalVideos.Subtitle")}
                    </div>
                    <div className="Container-WhyUs-right-paragraf">
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypeVideos.BusinessPromotionalVideos.ContentLine1")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypeVideos.BusinessPromotionalVideos.ContentLine2")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypeVideos.BusinessPromotionalVideos.ContentLine3")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("TypeVideos.BusinessPromotionalVideos.ContentLine4")}
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
        </>

    );
}

export default TypeVideos;
