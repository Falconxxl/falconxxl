import './Hamburger.css';
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {NavLink} from "react-router-dom";
import { useTranslation } from "react-i18next";

function Hamburger() {

    const { t } = useTranslation();

    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    return (
        <div className="navbar-hamburger">
            <button
                className="menu-icon"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* 🔥 ICI EXACTEMENT */}
            {menuOpen && (
                <div
                    className="menu-overlay"
                    onClick={() => setMenuOpen(false)}
                />
            )}
            {/* 🔥 FIN ICI */}

            <nav className={`menu ${menuOpen ? "open" : ""}`}>
                <ul>
                    <li>
                        <button
                            className="menu-button"
                            onClick={() => setServicesOpen(!servicesOpen)}
                        >
                            Services
                        </button>

                        <ul className={`submenu ${servicesOpen ? "open" : ""}`}>
                            <li>
                                <NavLink to='/AudioVisual' className="Submenu-button-hamburger">
                                {t("NavbarMenu.Service.Audiovisual")}
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/Photography' className="Submenu-button-hamburger">
                                {t("NavbarMenu.Service.Photography")}
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/Webdesign" className="Submenu-button-hamburger">
                                {t("NavbarMenu.Service.Webdesign")}
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/BrandIdentity" className="Submenu-button-hamburger">
                                    {t("NavbarMenu.Service.Branding")}
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/DigitalMarketing' className="Submenu-button-hamburger">
                                {t("NavbarMenu.Service.Digital Marketing")}
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/Music" className="Submenu-button-hamburger">
                                {t("NavbarMenu.Service.Music Production")}
                                </NavLink>
                            </li>

                        </ul>
                    </li>
                    <li>
                        <NavLink to='/Projects' className="menu-button">
                            {t("NavbarMenu.Projects")}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/About' className="menu-button">
                            {t("NavbarMenu.About")}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/Prices' className="menu-button">
                        {t("NavbarMenu.Prices")}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/News' className="menu-button">
                            {t("NavbarMenu.News")}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/Contact' className="menu-button">
                            {t("NavbarMenu.Contact")}
                        </NavLink>
                    </li>

                    <li>
                        <a
                            href="https://www.falconbeat.nl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="menu-button"
                        >
                            Falcon Beat
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Hamburger;