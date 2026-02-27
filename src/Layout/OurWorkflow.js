import './OurWorkflow.css';
import icon_contact from "../Images/icon_contact7.png"
import icon_delivery from "../Images/icon_delivery6"
import icon_brief from "../Images/icon_brief5.png"
import icon_production from "../Images/icon_production4"
import React from "react";
import { useTranslation } from "react-i18next";

function OurWorkflow() {

    const { t } = useTranslation();

    return (
        <div className="Container-OurWorkflow">
            <h1>
                {t("OurWorkflow.BigTitle")}
            </h1>

            <div className="OurWorkflow-wrapper">

                <div className="Container-OurWorkflow-content">
                    <img src={icon_contact} alt="wedding_home" className="icon_home_workflow" />

                    <h2>
                        {t("OurWorkflow.GettingInTouch.Title")}
                    </h2>

                    <ul className="checklist">
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>
                                {t("OurWorkflow.GettingInTouch.ContentLine1")}
                            </span>
                        </li>

                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>
                                {t("OurWorkflow.GettingInTouch.ContentLine2")}
                            </span>
                        </li>

                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>
                                {t("OurWorkflow.GettingInTouch.ContentLine3")}
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="Container-OurWorkflow-content">
                    <img src={icon_brief} alt="wedding_home" className="icon_home_workflow" />
                    <h2>
                        {t("OurWorkflow.Debriefing.Title")}
                    </h2>

                    <ul className="checklist">
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>
                                {t("OurWorkflow.Debriefing.ContentLine1")}
                            </span>
                        </li>
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>
                                {t("OurWorkflow.Debriefing.ContentLine2")}
                            </span>
                        </li>
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>
                                {t("OurWorkflow.Debriefing.ContentLine2")}
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="Container-OurWorkflow-content">
                    <img src={icon_production} alt="wedding_home" className="icon_home_workflow" />
                    <h2>
                        {t("OurWorkflow.Producing.Title")}
                    </h2>
                    <ul className="checklist">
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>
                                {t("OurWorkflow.Producing.ContentLine1")}
                            </span>
                        </li>
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>
                                {t("OurWorkflow.Producing.ContentLine2")}
                            </span>
                        </li>
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>
                                {t("OurWorkflow.Producing.ContentLine3")}
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="Container-OurWorkflow-content">
                    <img src={icon_delivery} alt="wedding_home" className="icon_home_workflow" />
                    <h2>
                        {t("OurWorkflow.DeliveringResult.Title")}
                    </h2>
                    <ul className="checklist">
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>
                                {t("OurWorkflow.DeliveringResult.ContentLine1")}
                            </span>
                        </li>
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>
                                {t("OurWorkflow.DeliveringResult.ContentLine2")}
                            </span>
                        </li>
                        <li>
                            <i className="fa-solid fa-circle-check fa-2x"></i>
                            <span>
                                {t("OurWorkflow.DeliveringResult.ContentLine3")}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default OurWorkflow;