import React from "react"
import styles from "./Home.module.css"
import hero from "../../assets/bgs/hero-trans.png"

import logo from "../../assets/logos/SBSORT.png"

import ThemeSwitch from "../../components/ThemeSwitch/ThemeSwitch"
import Navbar from "../../components/Navbar/Navbar"

import bubble from "../../assets/bgs/bubble.png"
import selection from "../../assets/bgs/selection.png"
import insertion from "../../assets/bgs/insertion.png"
import merge from "../../assets/bgs/merge.png"
import heap from "../../assets/bgs/heap.png"
import quick from "../../assets/bgs/quick.png"
import counting from "../../assets/bgs/counting.png"

import { useNavigate } from "react-router-dom"

const Home = () => {


    const navigate = useNavigate();


    return (
        <>
            <div className={styles.Page}>
                <Navbar/>

                <div className={styles.Content}>
                    <div className={styles.Hero} style={{backgroundImage: `url(${hero})`}}>
                        <p className={styles.HeroTitle}>Sorting Visualizer</p>
                        <p className={styles.HeroSubtitle}>Learn sorting algorithms through step-by-step visual guides</p>
                    </div>

                    <div className={styles.SortSection}>
                        <div className={styles.SortTitle}>
                            <p>Sorting Algorithms</p>
                        </div>
                        <div className={styles.Sorts}>
                            
                            <div className={styles.Sort} onClick={()=>navigate("/bubble")}>
                                <div className={styles.SortImage}
                                style={{backgroundImage: `url(${bubble})`}}
                                ></div>
                                <p className={styles.SortText}>Bubble Sort</p>
                            </div>

                            <div className={styles.Sort} onClick={()=>navigate("/merge")}>
                                <div className={styles.SortImage}
                                style={{backgroundImage: `url(${merge})`}}
                                ></div>
                                <p className={styles.SortText}>Merge Sort</p>
                            </div>

                            <div className={styles.Sort} onClick={()=>navigate("/selection")}>
                                <div className={styles.SortImage}
                                style={{backgroundImage: `url(${selection})`}}
                                ></div>
                                <p className={styles.SortText}>Selection Sort</p>
                            </div>

                            <div className={styles.Sort} onClick={()=>navigate("/quick")}>
                                <div className={styles.SortImage}
                                style={{backgroundImage: `url(${quick})`}}
                                ></div>
                                <p className={styles.SortText}>Quick Sort</p>
                            </div>

                            <div className={styles.Sort} onClick={()=>navigate("/insertion")}>
                                <div className={styles.SortImage}
                                style={{backgroundImage: `url(${insertion})`}}
                                ></div>
                                <p className={styles.SortText}>Insertion Sort</p>
                            </div>

                            <div className={styles.Sort} onClick={()=>navigate("/heap")}>
                                <div className={styles.SortImage}
                                style={{backgroundImage: `url(${heap})`}}
                                ></div>
                                <p className={styles.SortText}>Heap Sort</p>
                            </div>

                            <div className={styles.Sort} onClick={()=>navigate("/counting")}>
                                <div className={styles.SortImage}
                                style={{backgroundImage: `url(${counting})`}}
                                ></div>
                                <p className={styles.SortText}>Counting Sort</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={styles.Footer}></div>
            </div>
        </>
    )
}
export default Home