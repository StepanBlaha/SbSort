import React from "react"
import styles from "../sort/SortPage.module.css"
import { Play, Pause } from "lucide-react"
import { useState, useEffect } from "react"
import RangeSlider from "../../components/range/Range"
import Visualizer from "../../components/visualizer/Visualizer"
import heapSort from "../../assets/complexity/heapSort.png"
import SortCode from "../../components/SortCode/SortCode"
import Navbar from "../../components/Navbar/Navbar"
import { useTheme } from "../../context/ThemeContext"
import Footer from "../../components/Footer/Footer"

import heroLight from "../../assets/bgs/hero-heap-light.png"
import heroDark from "../../assets/bgs/hero-heap-dark.png"


import howLight from "../../assets/bgs/how-heap-light.png"
import howDark from "../../assets/bgs/how-heap-dark.png"
import { useTranslation } from "react-i18next"
import PlayButton from "../../components/Buttons/PlayButton/PlayButton"
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton"
const HeapSort = () => {
    const [ numbers, setNumbers ] = useState<string>()
    const [ play, setPlay ] = useState<boolean>(false)
    const [ dataType, setDataType ] = useState<"number" | "letter">("number")
    const [reset, setReset] = useState<boolean>(false)
    const { theme } = useTheme();
    const { t } = useTranslation();

    const [ speed, setSpeed ] = useState<number>(10)

    const [ num, setNum] = useState<number[]>([1, 5, 1, 2, 3, 8, 9, 1, 3, 1, 2])
    const [error, setError] = useState<string>()
    
    const [step, setStep] = useState<boolean>(false)


    useEffect(() => {
        try {
            console.log(numbers)
            const nums = numbers?.split(",").filter(n=>!isNaN(Number(n))).filter(n=>n.trim() !== "").map((n,i)=>Number(n))
            console.log(nums)
            if (nums && nums !== num) {
                setNum(nums)
            }
        } catch (error) {
            console.log(error)
        }
    }, [numbers])
    
    const [ selectedExplanation, setSelectedExplanation ] = useState<"how"| "time" | "when">("how")


    return (
        <>
            <div className={styles.Page}>
                <Navbar/>

                <div className={styles.Content}>
                    <div className={styles.Hero} style={{backgroundImage: `url(${theme === "light" ? heroLight : heroDark})`}}>
                        <p className={styles.HeroTitle}>{t("hero.heap.title")}</p>
                        <p className={styles.HeroSubtitle}>{t("hero.heap.subtitle")}</p>
                    </div>

                    <div className={styles.ContentWrap}>
                        <div className={styles.Console}>
                            <p className={styles.ConsoleTitle}>{t("console.input")}</p>
                            <div className={styles.ConsoleContent}>


                                <input type="text" className={styles.NumberInput} value={numbers} onChange={(e) => setNumbers(e.target.value)} />
                                <div className={styles.ConsoleButtons}>
                                    <div className={styles.ConsoleButtonsGroup}>
                                        <PlayButton onClick={()=>setPlay(true)}/>
                                        <PrimaryButton onClick={() => setPlay(false)} Icon={Pause} fill={true} />
                                    </div>

                                    <div className={styles.ConsoleButtonsGroup}>
                                        {/*
                                        <div className={styles.PrimaryButton} onClick={() => {
                                        setStep(true);
                                        setTimeout(() => setStep(false), 0); // reset step flag
                                    }}>
                                            <p>Step</p>
                                        </div>
                                        */}
                                        <PrimaryButton onClick={() => {
                                            setReset(true);
                                            setTimeout(() => setReset(false), 0);
                                            setPlay(false);             
                                        }} text={t("console.reset")}/>
                                    </div>


                                </div>


                                <div className={styles.Speed}>
                                    <p className={styles.SpeedTitle}>{t("console.speed")}</p>
                                    <RangeSlider
                                        min={1}
                                        max={40}
                                        step={1}
                                        defaultValue={5}
                                        onChange={(val) => setSpeed(val)}
                                    />
                                </div>

                                {
                                    /*
                                    
                                    <div className={styles.DataTypes}>
                                        <p className={styles.DataTitle}>Data type</p>
                                        <div className={styles.DataTypesGroup}>
                                            <div className={`${styles.PrimaryButton} ${dataType === "number" ? styles.SelectedType : ""}`} onClick={()=>setDataType("number")}>
                                                <p>Numbers</p>
                                            </div>
                                            <div className={`${styles.PrimaryButton} ${dataType === "letter" ? styles.SelectedType : ""}`} onClick={()=>setDataType("letter")}>
                                                <p>Letters</p>
                                            </div>
                                        </div>
                                    </div>
                                    */
                                }
                            </div>

                        </div>
                        <div className={styles.DataDiv}>
                            <p className={styles.DataTitle}>{t("console.visualization")}</p>
                            <div className={styles.DataContent}>
                                <div className={styles.VisualizationGraph}>
                                    <Visualizer
                                        numbers={num}
                                        className={styles.Visualizer}
                                        functionType="heap"
                                        play={play}
                                        reset={reset}
                                        speed={speed}
                                    
                                    />
                                </div>


                                <div className={styles.Explanation}>
                                    <div className={styles.ExplanationHeader}>
                                        <div className={`${styles.ExplanationHeaderitem} ${selectedExplanation === "how" ? styles.SelectedExplanation : ""}`}
                                            onClick={()=>setSelectedExplanation("how")}
                                        >
                                            <p>{t("console.how")}</p>
                                        </div>
                                        <div className={`${styles.ExplanationHeaderitem} ${selectedExplanation === "time" ? styles.SelectedExplanation : ""}`}
                                            onClick={()=>setSelectedExplanation("time")}
                                        >
                                            <p>{t("console.time")}</p>
                                        </div>
                                        <div className={`${styles.ExplanationHeaderitem} ${selectedExplanation === "when" ? styles.SelectedExplanation : ""}`}
                                            onClick={()=>setSelectedExplanation("when")}
                                        >
                                            <p>{t("console.when")}</p>
                                        </div>
                                    </div>
                                    <div className={styles.ExplanationContent}>
                                        {selectedExplanation === "how" && (
                                            <div className={styles.ExplanationItem}>
                                                <div className={styles.ExplanationItemText}>
                                                    <ul>
                                                        <li>{t("console.how_list.heap.1")}</li>
                                                        <li>{t("console.how_list.heap.2")}</li>
                                                        <li>{t("console.how_list.heap.3")}</li>
                                                        <li>{t("console.how_list.heap.4")}</li>
                                                    </ul>
                                                </div>
                                                <div className={styles.ExplanationItemImage} style={{backgroundImage: `url(${theme === "light" ? howLight : howDark})`}}></div>
                                            </div>
                                        )}
                                        {selectedExplanation === "time" && (
                                            <div className={styles.ExplanationItem}>
                                                <div className={styles.ExplanationItemText}>
                                                    <ul>
                                                        <li><b>Best Case:</b> O(n log n)</li>
                                                        <li><b>Average Case:</b> O(n log n)</li>
                                                        <li><b>Worst Case:</b> O(n log n)</li>
                                                        <li><b>Space Complexity:</b> O(1)</li>
                                                    </ul>
                                                </div>
                                                <div
                                                    style={{backgroundImage: `url(${heapSort})`}}
                                                    className={styles.ExplanationItemImage}
                                                ></div>
                                            </div>
                                        )}
                                        {selectedExplanation === "when" && (
                                            <div className={styles.ExplanationItem}>
                                                <div className={styles.ExplanationItemText}>
                                                    <ul>
                                                        <li>{t("console.when_list.heap.1")}</li>
                                                        <li>{t("console.when_list.heap.2")}</li>
                                                        <li>{t("console.when_list.heap.3")}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                </div>

                                {/*code */} 
                                <SortCode sort="heap"/>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        </>
    )
}
export default HeapSort