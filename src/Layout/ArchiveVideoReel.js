import React, { useState, useEffect } from "react";
import "./ArchiveVideoReel.css";
import { useTranslation } from "react-i18next";

function ArchiveVideoReel() {
    const [isMobile, setIsMobile] = useState(false);

    const { t } = useTranslation();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // seuil mobile
        };

        handleResize(); // vérifie au chargement
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Liens YouTube
    const desktopVideo = "https://www.youtube.com/embed/3psKeejOu0c";
    // const desktopVideo = "https://vimeo.com/1126640129";
    const mobileVideo = "https://www.youtube.com/embed/VkXnsf4n8Ps";


    return (

        <>

    <section className="video-session">
            <h1>{t("ArchiveVideoReel.Title")}</h1>
            <p>
                {t("ArchiveVideoReel.Content")}
            </p>
            <div className={`Archive-video-wrapper ${isMobile ? "mobile" : ""}`}>
                <iframe
                    src={isMobile ? mobileVideo : desktopVideo}
                    title="Compilation Falcon XXL"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </section>

        </>
    );
}

export default ArchiveVideoReel;
