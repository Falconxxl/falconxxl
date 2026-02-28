import './WhyUs.css';
import { useTranslation } from "react-i18next";


function WhyUs() {

    const { t } = useTranslation();

    return (

        <>

           <div className="Container-WhyUs">

            <div className="Container-WhyUs-left">
                <h1>
                    {t("WhyUs.Title")}
                    {/*Why <br />Choose <br /> Falcon XXL?*/}
                </h1>
            </div>

            <div className="Container-WhyUs-right">

                {/* Bloc 1 */}
                <div className="Container-WhyUs-right-content">
                    <div className="Container-WhyUs-right-title">
                        {t("WhyUs.Audiovisual.Subtitle")}
                    </div>
                    <div className="Container-WhyUs-right-paragraf">
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("WhyUs.Audiovisual.ContentLine1")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("WhyUs.Audiovisual.ContentLine2")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("WhyUs.Audiovisual.ContentLine3")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("WhyUs.Audiovisual.ContentLine4")}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bloc 1 */}
                <div className="Container-WhyUs-right-content">
                    <div className="Container-WhyUs-right-title">
                        {t("WhyUs.Webdesign.Subtitle")}
                    </div>
                    <div className="Container-WhyUs-right-paragraf">
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("WhyUs.Webdesign.ContentLine1")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("WhyUs.Webdesign.ContentLine2")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("WhyUs.Webdesign.ContentLine3")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("WhyUs.Webdesign.ContentLine4")}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bloc 1 */}
                <div className="Container-WhyUs-right-content">
                    <div className="Container-WhyUs-right-title">
                        {t("WhyUs.Branding.Subtitle")}
                    </div>
                    <div className="Container-WhyUs-right-paragraf">
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("WhyUs.Branding.ContentLine1")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("WhyUs.Branding.ContentLine2")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("WhyUs.Branding.ContentLine3")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("WhyUs.Branding.ContentLine4")}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bloc 2 */}
                <div className="Container-WhyUs-right-content-x">
                    <div className="Container-WhyUs-right-title">
                        {t("WhyUs.Music.Subtitle")}
                    </div>
                    <div className="Container-WhyUs-right-paragraf">
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("WhyUs.Music.ContentLine1")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("WhyUs.Music.ContentLine2")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("WhyUs.Music.ContentLine3")}
                            </p>
                        </div>
                        <div className="icon-text">
                            <i className="fa-solid fa-circle-check"></i>
                            <p>
                                {t("WhyUs.Music.ContentLine4")}
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>

      </>
    );
}

export default WhyUs;
