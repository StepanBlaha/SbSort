import React from "react"
import styles from "./About.module.css"
import hero from "../../assets/bgs/hero-trans.png"

import logo from "../../assets/logos/SBSORT.png"

import ThemeSwitch from "../../components/ThemeSwitch/ThemeSwitch"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"

import bubble from "../../assets/bgs/bubble.png"
import selection from "../../assets/bgs/selection.png"
import insertion from "../../assets/bgs/insertion.png"
import merge from "../../assets/bgs/merge.png"
import heap from "../../assets/bgs/heap.png"
import quick from "../../assets/bgs/quick.png"
import counting from "../../assets/bgs/counting.png"

import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import ShinyText from "../../components/ShinyText/ShinyText"


const About = () => {
    const {t} = useTranslation();


    const navigate = useNavigate();


    return (
        <>
            <div className={styles.Page}>
                <Navbar
                logo={logo}
                logoAlt="SBsort logo"
                baseColor="#fff"
                menuColor="#000"
                buttonBgColor="#111"
                buttonTextColor="#fff"
                ease="power3.out"
                />

                <div className={styles.Content}>

                    <div className={styles.About}>
                        <div className={styles.AboutHero}>
                            <span className={styles.AboutHeroBadge}>{t("about.badge")}</span>
                            <h1 className={styles.AboutHeroTitle}>{t("about.title")}<ShinyText speed={8}><em>{t("about.title_highlight")}</em></ShinyText></h1>
                            <p className={styles.AboutHeroSubtitle}>
                                {t("about.subtitle")}
                            </p>
                        </div>

                        <div className={styles.AboutFeatures}>
                            <div className={styles.AboutFeature}>
                                <div className={styles.AboutFeatureIcon}>🔍</div>
                                <p className={styles.AboutFeatureTitle}>{t("about.concepts.title")}e</p>
                                <p className={styles.AboutFeatureContent}>{t("about.concepts.subtitle")}</p>
                            </div>

                            <div className={styles.AboutFeature}>
                                <div className={styles.AboutFeatureIcon}>⏱️</div>
                                <p className={styles.AboutFeatureTitle}>{t("about.time.title")}</p>
                                <p className={styles.AboutFeatureContent}>{t("about.time.subtitle")}</p>
                            </div>

                            <div className={styles.AboutFeature}>
                                <div className={styles.AboutFeatureIcon}>🎛️</div>
                                <p className={styles.AboutFeatureTitle}>{t("about.controls.title")}</p>
                                <p className={styles.AboutFeatureContent}>{t("about.controls.subtitle")}</p>
                            </div>

                        </div>

                        <div className={styles.AboutProcess}>
                            <p className={styles.AboutProcessTitle}>{t("about.how.title")}</p>
                            <div className={styles.AboutProcessContent}>
                                <div className={styles.ProcessStep}>
                                    <div className={styles.ProcessStepIcon}>1</div>
                                    <div className={styles.ProcessStepContent}>
                                        <p className={styles.ProcessStepTitle}>{t("about.how.1.title")}</p>
                                        <p className={styles.ProcessStepText}>{t("about.how.1.subtitle")}</p>
                                    </div>
                                </div>

                                <div className={styles.ProcessStep}>
                                    <div className={styles.ProcessStepIcon}>2</div>
                                    <div className={styles.ProcessStepContent}>
                                        <p className={styles.ProcessStepTitle}>{t("about.how.2.title")}</p>
                                        <p className={styles.ProcessStepText}>{t("about.how.2.subtitle")}</p>
                                    </div>
                                </div>

                                <div className={styles.ProcessStep}>
                                    <div className={styles.ProcessStepIcon}>3</div>
                                    <div className={styles.ProcessStepContent}>
                                        <p className={styles.ProcessStepTitle}>{t("about.how.3.title")}</p>
                                        <p className={styles.ProcessStepText}>{t("about.how.3.subtitle")}</p>
                                    </div>
                                </div>

                                <div className={styles.ProcessStep}>
                                    <div className={styles.ProcessStepIcon}>4</div>
                                    <div className={styles.ProcessStepContent}>
                                        <p className={styles.ProcessStepTitle}>{t("about.how.4.title")}</p>
                                        <p className={styles.ProcessStepText}>{t("about.how.4.subtitle")}</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className={styles.AboutWhy}>
                            <p className={styles.AboutWhyTitle}>{t("about.why.title")}</p>
                            <div className={styles.AboutWhyContent}>
                                <div className={styles.AboutWhyCard}>
                                    <strong>{t("about.why.algorithms.title")}</strong>
                                    <span>{t("about.why.algorithms.subtitle")}</span>
                                </div>

                                <div className={styles.AboutWhyCard}>
                                    <strong>{t("about.why.notation.title")}</strong>
                                    <span>{t("about.why.notation.subtitle")}</span>
                                </div>

                                <div className={styles.AboutWhyCard}>
                                    <strong>{t("about.why.accessible.title")}</strong>
                                    <span>{t("about.why.accessible.subtitle")}</span>
                                </div>

                                <div className={styles.AboutWhyCard}>
                                    <strong>{t("about.why.languages.title")}</strong>
                                    <span>{t("about.why.languages.subtitle")}</span>
                                </div>

                            </div>
                        </div>

                        <div className={styles.AboutPeople}>
                            <p className={styles.AboutPeopleTitle}>{t("about.who.title")}</p>
                            <div className={styles.AboutPeopleContent}>
                                <div className={styles.AboutPeopleCard}>
                                    <div className={styles.PeopleCardIcon}></div>
                                    <div className={styles.PeopleCardContent}>
                                        <p className={styles.PeopleCardTitle}>{t("about.who.name")}</p>
                                        <p className={styles.PeopleCardText}>{t("about.who.role")}</p>
                                    </div>
                                </div>



                            </div>
                        </div>

                        <div className={styles.AboutQuestion}>
                            <p className={styles.AboutQuestionTitle}>{t("about.faq.title")}</p>
                            <div className={styles.AboutQuestionContent}>
                                <div className={styles.AboutQuestionCard}>
                                    <p className={styles.QuestionCardTitle}>{t("about.faq.1.title")}</p>
                                    <p className={styles.QuestionCardText}>{t("about.faq.1.subtitle")}</p>
                                </div>

                                <div className={styles.AboutQuestionCard}>
                                    <p className={styles.QuestionCardTitle}>{t("about.faq.2.title")}</p>
                                    <p className={styles.QuestionCardText}>{t("about.faq.2.subtitle")}</p>
                                </div>

                                <div className={styles.AboutQuestionCard}>
                                    <p className={styles.QuestionCardTitle}>{t("about.faq.3.title")}</p>
                                    <p className={styles.QuestionCardText}>{t("about.faq.3.subtitle")}</p>
                                </div>

                                <div className={styles.AboutQuestionCard}>
                                    <p className={styles.QuestionCardTitle}>{t("about.faq.4.title")}</p>
                                    <p className={styles.QuestionCardText}>{t("about.faq.4.subtitle")}</p>
                                </div>



                            </div>
                        </div>


                    </div>
                </div>

                <Footer/>
            </div>
        </>
    )
}
export default About