import React from "react"
import styles from "./Home.module.css"


const Home = () => {
    return (
        <>
            <div className={styles.Page}>
                <div className={styles.Header}>
                    <div className={styles.Logo}></div>
                    <div className={styles.HeaderGroup}>

                        <div className={styles.Pages}>
                            <div className={styles.HeaderPage}>
                                <p>Home</p>
                            </div>
                            <div className={styles.HeaderPage}>
                                <p>Sort Types</p>
                            </div>
                            <div className={styles.HeaderPage}>
                                <p>About</p>
                            </div>
                        </div>
                        <div className={styles.Theme}></div>
                    </div>
                </div>

                <div className={styles.Content}>
                    <div className={styles.Hero}>
                        <p className={styles.HeroTitle}>Sorting Visualizer</p>
                        <p className={styles.HeroSubtitle}>Learn sorting algorithms through step-by-step visual guides</p>
                    </div>

                    <div className={styles.SortSection}>
                        <div className={styles.SortTitle}>
                            <p>Sorting Algorithms</p>
                        </div>
                        <div className={styles.Sorts}>
                            
                            <div className={styles.Sort}>
                                <div className={styles.SortImage}></div>
                                <p className={styles.SortText}>Bubble Sort</p>
                            </div>

                            <div className={styles.Sort}>
                                <div className={styles.SortImage}></div>
                                <p className={styles.SortText}>Bubble Sort</p>
                            </div>

                            <div className={styles.Sort}>
                                <div className={styles.SortImage}></div>
                                <p className={styles.SortText}>Bubble Sort</p>
                            </div>

                            <div className={styles.Sort}>
                                <div className={styles.SortImage}></div>
                                <p className={styles.SortText}>Bubble Sort</p>
                            </div>

                            <div className={styles.Sort}>
                                <div className={styles.SortImage}></div>
                                <p className={styles.SortText}>Bubble Sort</p>
                            </div>

                            <div className={styles.Sort}>
                                <div className={styles.SortImage}></div>
                                <p className={styles.SortText}>Bubble Sort</p>
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