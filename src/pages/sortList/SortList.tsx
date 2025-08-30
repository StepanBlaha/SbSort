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

import { useNavigate } from "react-router-dom"

const SortList = () => {


    const navigate = useNavigate();


    return (
        <>
            <div className={styles.Page}>
                <Navbar/>

                <div className={styles.Content}>

                    <div className={styles.SortSection}>
                        <div className={styles.SortTitle}>
                            <p>Sorting Algorithms</p>
                        </div>
                        <div className={styles.Sorts}>
                            
                            <div className={styles.Sort} onClick={() => navigate("/bubble")}>
                                <div className={styles.SortItemGroup}>

                                    <div className={styles.SortImage}
                                    style={{backgroundImage: `url(${bubble})`}}
                                    ></div>
                                    <div className={styles.SortText}>
                                        <p className={styles.SortTitle}>Bubble Sort</p>
                                        <p className={styles.SortDesc}>Repeatedly swaps adjacent elements until sorted</p>
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
                                        <p className={styles.SortTitle}>Merge Sort</p>
                                        <p className={styles.SortDesc}>Divides array, sorts halves, and merges them</p>
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
                                        <p className={styles.SortTitle}>Selection Sort</p>
                                        <p className={styles.SortDesc}>Repeatedly selects the smallest element and places it</p>
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
                                        <p className={styles.SortTitle}>Quick Sort</p>
                                        <p className={styles.SortDesc}>Partitions array around a pivot and sorts recursively</p>
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
                                        <p className={styles.SortTitle}>Insertion Sort</p>
                                        <p className={styles.SortDesc}>Builds sorted list by inserting elements one by one</p>
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
                                        <p className={styles.SortTitle}>Heap Sort</p>
                                        <p className={styles.SortDesc}>Uses a heap structure to repeatedly extract max/min</p>
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
                                        <p className={styles.SortTitle}>Counting Sort</p>
                                        <p className={styles.SortDesc}>Counts element frequencies to place them in order</p>
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