import React from "react"
import styles from "./Home.module.css"
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
import { t } from "i18next"

const Home = () => {


    const navigate = useNavigate();


    return (
        <>
            <div className={styles.Page}>
                <Navbar/>

                <div className={styles.Content}>
                    <div className={styles.Hero} style={{backgroundImage: `url(${hero})`}}>
                        <p className={styles.HeroTitle}>{t("main.title")}</p>
                        <p className={styles.HeroSubtitle}>{t("main.subtitle")}</p>
                    </div>

                    <div className={styles.SortSection}>
                        <div className={styles.SortTitle}>
                            <p>{t("main.sorts_title")}</p>
                        </div>
                        <div className={styles.Sorts}>
                            
                            <div className={styles.Sort} onClick={()=>navigate("/bubble")}>
                                <div className={styles.SortImage}
                                style={{backgroundImage: `url(${bubble})`}}
                                ></div>
                                <p className={styles.SortText}>{t("main.sorts.bubble")}</p>
                            </div>

                            <div className={styles.Sort} onClick={()=>navigate("/merge")}>
                                <div className={styles.SortImage}
                                style={{backgroundImage: `url(${merge})`}}
                                ></div>
                                <p className={styles.SortText}>{t("main.sorts.merge")}</p>
                            </div>

                            <div className={styles.Sort} onClick={()=>navigate("/selection")}>
                                <div className={styles.SortImage}
                                style={{backgroundImage: `url(${selection})`}}
                                ></div>
                                <p className={styles.SortText}>{t("main.sorts.selection")}</p>
                            </div>

                            <div className={styles.Sort} onClick={()=>navigate("/quick")}>
                                <div className={styles.SortImage}
                                style={{backgroundImage: `url(${quick})`}}
                                ></div>
                                <p className={styles.SortText}>{t("main.sorts.quick")}</p>
                            </div>

                            <div className={styles.Sort} onClick={()=>navigate("/insertion")}>
                                <div className={styles.SortImage}
                                style={{backgroundImage: `url(${insertion})`}}
                                ></div>
                                <p className={styles.SortText}>{t("main.sorts.insertion")}</p>
                            </div>

                            <div className={styles.Sort} onClick={()=>navigate("/heap")}>
                                <div className={styles.SortImage}
                                style={{backgroundImage: `url(${heap})`}}
                                ></div>
                                <p className={styles.SortText}>{t("main.sorts.heap")}</p>
                            </div>

                            <div className={styles.Sort} onClick={()=>navigate("/counting")}>
                                <div className={styles.SortImage}
                                style={{backgroundImage: `url(${counting})`}}
                                ></div>
                                <p className={styles.SortText}>{t("main.sorts.counting")}</p>
                            </div>
                        </div>

                    </div>
                </div>

                <Footer/>
            </div>
        </>
    )
}
export default Home