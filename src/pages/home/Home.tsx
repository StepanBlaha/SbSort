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

import CallToActionButton from "../../components/Buttons/CallToActionButton/CallToAction"
import { span } from "framer-motion/client"
import { useTranslation } from "react-i18next"
import SpotlightCard from "../../components/SpotlightCard/SpotlightCard"

const Home = () => {

    const { t } = useTranslation();
    const navigate = useNavigate();

    const items=[
    ['🔁','Bubble Sort'],['🧩','Insertion'],['🧲','Selection'],['🪄','Merge'],['⚡','Quick'],['⛰️','Heap'],
    ['⏱️','O(n²)'],['📈','O(n log n)'],['💾','Space O(1..n)'],['🎛️','Visualizer'],['🧪','Worst‑case'],['📚','Stable/Unstable']
    ];


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
                    <div className={styles.Hero} >
                        <div className={styles.Bars}>
                            <div className={styles.BarsTrack}></div>
                        </div>
                        <div className={styles.HeroContainer}>
                            <p className={styles.HeroTitle}>{t("main.title")}</p>
                            <p className={styles.HeroSubtitle}>{t("main.subtitle")}</p>
                            <div className={styles.HeroActions}>
                                {/*<a href="/bubble" className={styles.HeroAction}>▶ Try the Visualizer</a>*/}
                                <CallToActionButton text={t("main.visualize_button")} onClick={()=>navigate("/bubble")}/>
                                    <SpotlightCard className={styles.HeroAction} onClick={()=>navigate("/about")}>
                                        <p>{t("main.learn_button")}</p>
                                    </SpotlightCard>
                            </div>

                        </div>
                    </div>
                    <div className={styles.Marquee}>
                        <div className={styles.MarqueeTrack}>
                            {Array(6).fill(items).flat().map(([icon, label], i) => (
                                <span className={styles.MarqueeTag} key={i}>
                                    <span>{icon}</span>
                                    <span>{label}</span>
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className={styles.SortSection}>
                        <p className={styles.SortSectionTitle}>{t("main.sorts_title")}</p>
                        <div className={styles.Sorts}>

                            <SpotlightCard className={styles.Sort} onClick={()=>navigate("/bubble")}>
                                <div className={styles.SortImage}>🔁</div>
                                <p className={styles.SortTitle}>{t("main.sorts.bubble")}</p>
                                <p className={styles.SortText}>{t("main.sort_desc.bubble")}</p>
                                <span className={styles.SortTime}>O(n²)</span>
                            </SpotlightCard>

                            <SpotlightCard className={styles.Sort} onClick={()=>navigate("/merge")}>
                                <div className={styles.SortImage}>🪄</div>
                                <p className={styles.SortTitle}>{t("main.sorts.merge")}</p>
                                <p className={styles.SortText}>{t("main.sort_desc.merge")}</p>
                                <span className={styles.SortTime}>O(n log n)</span>
                            </SpotlightCard>

                            <SpotlightCard className={styles.Sort} onClick={()=>navigate("/selection")}>
                                <div className={styles.SortImage}>🧲</div>
                                <p className={styles.SortTitle}>{t("main.sorts.selection")}</p>
                                <p className={styles.SortText}>{t("main.sort_desc.selection")}</p>
                                <span className={styles.SortTime}>O(n²)</span>
                            </SpotlightCard>
                            
                            <SpotlightCard className={styles.Sort} onClick={()=>navigate("/quick")}>
                                <div className={styles.SortImage}>⚡</div>
                                <p className={styles.SortTitle}>{t("main.sorts.quick")}</p>
                                <p className={styles.SortText}>{t("main.sort_desc.quick")}</p>
                                <span className={styles.SortTime}>O(n log n)</span>
                            </SpotlightCard>

                            <SpotlightCard className={styles.Sort} onClick={()=>navigate("/insertion")}>
                                <div className={styles.SortImage}>🧩</div>
                                <p className={styles.SortTitle}>{t("main.sorts.insertion")}</p>
                                <p className={styles.SortText}>{t("main.sort_desc.insertion")}</p>
                                <span className={styles.SortTime}>O(n²)</span>
                            </SpotlightCard>

                            <SpotlightCard className={styles.Sort} onClick={()=>navigate("/heap")}>
                                <div className={styles.SortImage}>⛰️</div>
                                <p className={styles.SortTitle}>{t("main.sorts.heap")}</p>
                                <p className={styles.SortText}>{t("main.sort_desc.heap")}</p>
                                <span className={styles.SortTime}>O(n log n)</span>
                            </SpotlightCard>

                            <SpotlightCard className={styles.Sort} onClick={()=>navigate("/counting")}>
                                <div className={styles.SortImage}>🔢</div>
                                <p className={styles.SortTitle}>{t("main.sorts.counting")}</p>
                                <p className={styles.SortText}>{t("main.sort_desc.counting")}</p>
                                <span className={styles.SortTime}>O(n + k)</span>
                            </SpotlightCard>

                        </div>

                    </div>
                </div>

                <Footer/>
            </div>
        </>
    )
}
export default Home


/*


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


*/