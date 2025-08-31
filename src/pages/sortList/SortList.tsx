import React from "react"
import styles from "./SortList.module.css"
import hero from "../../assets/bgs/hero-trans.png"

import logo from "../../assets/logos/SBSORT.png"
import { ChevronRight } from "lucide-react"
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
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

const SortList = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();


    return (
        <>
            <div className={styles.Page}>
                <Navbar/>

                <div className={styles.Content}>

                    <div className={styles.SortSection}>
                        <div className={styles.SortTitle}>
                            <p>{t('sort_list.title')}</p>
                        </div>
                        <div className={styles.Sorts}>
                            
                            <div className={styles.Sort} onClick={() => navigate("/bubble")}>
                                <div className={styles.SortItemGroup}>
                                    <div className={styles.SortImage}
                                    style={{backgroundImage: `url(${bubble})`}}
                                    ></div>
                                    <div className={styles.SortText}>
                                        <p className={styles.SortTitle}>{t('sort_list.algorithms.bubble.title')}</p>
                                        <p className={styles.SortDesc}>{t('sort_list.algorithms.bubble.description')}</p>
                                    </div>
                                </div>
                                <ChevronRight/>
                            </div>

                            <div className={styles.Sort} onClick={() => navigate("/merge")}>
                                <div className={styles.SortItemGroup}>
                                    <div className={styles.SortImage}
                                    style={{backgroundImage: `url(${merge})`}}
                                    ></div>
                                    <div className={styles.SortText}>
                                        <p className={styles.SortTitle}>{t('sort_list.algorithms.merge.title')}</p>
                                        <p className={styles.SortDesc}>{t('sort_list.algorithms.merge.description')}</p>
                                    </div>
                                </div>
                                <ChevronRight/>
                            </div>

                            <div className={styles.Sort} onClick={() => navigate("/selection")}>
                                <div className={styles.SortItemGroup}>
                                    <div className={styles.SortImage}
                                    style={{backgroundImage: `url(${selection})`}}
                                    ></div>
                                    <div className={styles.SortText}>
                                        <p className={styles.SortTitle}>{t('sort_list.algorithms.selection.title')}</p>
                                        <p className={styles.SortDesc}>{t('sort_list.algorithms.selection.description')}</p>
                                    </div>
                                </div>
                                <ChevronRight/>
                            </div>

                            <div className={styles.Sort} onClick={() => navigate("/quick")}>
                                <div className={styles.SortItemGroup}>
                                    <div className={styles.SortImage}
                                    style={{backgroundImage: `url(${quick})`}}
                                    ></div>
                                    <div className={styles.SortText}>
                                        <p className={styles.SortTitle}>{t('sort_list.algorithms.quick.title')}</p>
                                        <p className={styles.SortDesc}>{t('sort_list.algorithms.quick.description')}</p>
                                    </div>
                                </div>
                                <ChevronRight/>
                            </div>

                            <div className={styles.Sort} onClick={() => navigate("/insertion")}>
                                <div className={styles.SortItemGroup}>
                                    <div className={styles.SortImage}
                                    style={{backgroundImage: `url(${insertion})`}}
                                    ></div>
                                    <div className={styles.SortText}>
                                        <p className={styles.SortTitle}>{t('sort_list.algorithms.insertion.title')}</p>
                                        <p className={styles.SortDesc}>{t('sort_list.algorithms.insertion.description')}</p>
                                    </div>
                                </div>
                                <ChevronRight/>
                            </div>

                            <div className={styles.Sort} onClick={() => navigate("/heap")}>
                                <div className={styles.SortItemGroup}>
                                    <div className={styles.SortImage}
                                    style={{backgroundImage: `url(${heap})`}}
                                    ></div>
                                    <div className={styles.SortText}>
                                        <p className={styles.SortTitle}>{t('sort_list.algorithms.heap.title')}</p>
                                        <p className={styles.SortDesc}>{t('sort_list.algorithms.heap.description')}</p>
                                    </div>
                                </div>
                                <ChevronRight/>
                            </div>

                            <div className={styles.Sort} onClick={() => navigate("/counting")}>
                                <div className={styles.SortItemGroup}>
                                    <div className={styles.SortImage}
                                    style={{backgroundImage: `url(${counting})`}}
                                    ></div>
                                    <div className={styles.SortText}>
                                        <p className={styles.SortTitle}>{t('sort_list.algorithms.counting.title')}</p>
                                        <p className={styles.SortDesc}>{t('sort_list.algorithms.counting.description')}</p>
                                    </div>
                                </div>
                                <ChevronRight/>
                            </div>
                        </div>

                    </div>
                </div>

                <Footer/>
            </div>
        </>
    )
}
export default SortList