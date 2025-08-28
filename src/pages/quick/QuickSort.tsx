import React from "react"
import styles from "../sort/SortPage.module.css"
import { Play, Pause } from "lucide-react"
import { useState, useEffect } from "react"
import RangeSlider from "../../components/range/Range"
import Visualizer from "../../components/visualizer/Visualizer"
import SortCode from "../../components/SortCode/SortCode"
import quickSort from "../../assets/complexity/quickSort.png"
import Navbar from "../../components/Navbar/Navbar"
import hero from "../../assets/bgs/hero-quick.png"
import { useTheme } from "../../context/ThemeContext"
import howLight from "../../assets/bgs/how-quick-light.png"
import howDark from "../../assets/bgs/how-quick-dark.png"

import PlayButton from "../../components/Buttons/PlayButton/PlayButton"
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton"

const QuickSort = () => {
    const [ numbers, setNumbers ] = useState<string>()
    const [ play, setPlay ] = useState<boolean>(false)
    const [ dataType, setDataType ] = useState<"number" | "letter">("number")
    const [reset, setReset] = useState<boolean>(false)
    

    const [ speed, setSpeed ] = useState<number>(10)

    const [ num, setNum] = useState<number[]>([1, 5, 1, 2, 3, 8, 9, 1, 3, 1, 2])
    const [error, setError] = useState<string>()
    const { theme } = useTheme();
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
                    <div className={styles.Hero} style={{backgroundImage: `url(${hero})`}}>
                        <p className={styles.HeroTitle}>Quick Sort</p>
                        <p className={styles.HeroSubtitle}>Step-by-step visual explanation of Quick Sort.</p>
                    </div>

                    <div className={styles.ContentWrap}>
                        <div className={styles.Console}>
                            <p className={styles.ConsoleTitle}>Input array</p>
                            <div className={styles.ConsoleContent}>


                                <input type="text" className={styles.NumberInput} value={numbers} onChange={(e) => setNumbers(e.target.value)} />
                                <div className={styles.ConsoleButtons}>
                                    <div className={styles.ConsoleButtonsGroup}>
                                        <PlayButton onClick={()=>setPlay(true)}/>
                                        <PrimaryButton onClick={()=>setPlay(false)}/>
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
                                        <div className={styles.PrimaryButton} onClick={() => {
                                            setReset(true);
                                            setTimeout(() => setReset(false), 0);
                                            setPlay(false);             // stop any running sort first
                                        }}>
                                            <p>Reset</p>
                                        </div>
                                    </div>


                                </div>


                                <div className={styles.Speed}>
                                    <p className={styles.SpeedTitle}>Speed</p>
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
                            <p className={styles.DataTitle}>Visualization</p>
                            <div className={styles.DataContent}>
                                <div className={styles.VisualizationGraph}>
                                    <Visualizer
                                        numbers={num}
                                        className={styles.Visualizer}
                                        functionType="quick"
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
                                            <p>How it works</p>
                                        </div>
                                        <div className={`${styles.ExplanationHeaderitem} ${selectedExplanation === "time" ? styles.SelectedExplanation : ""}`}
                                            onClick={()=>setSelectedExplanation("time")}
                                        >
                                            <p>Time complexity</p>
                                        </div>
                                        <div className={`${styles.ExplanationHeaderitem} ${selectedExplanation === "when" ? styles.SelectedExplanation : ""}`}
                                            onClick={()=>setSelectedExplanation("when")}
                                        >
                                            <p>When to use</p>
                                        </div>
                                    </div>
                                    <div className={styles.ExplanationContent}>
                                        {selectedExplanation === "how" && (
                                            <div className={styles.ExplanationItem}>
                                                <div className={styles.ExplanationItemText}>
                                                    <ul>
                                                        <li>Pick a pivot element</li>
                                                        <li>Partition array so smaller elements go left, larger go right</li>
                                                        <li>Recursively apply the process to left and right partitions</li>
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
                                                        <li><b>Worst Case:</b> O(n<sup>2</sup>) (rare, when pivots are poor)</li>
                                                        <li><b>Space Complexity:</b> O(log n) (recursive stack)</li>
                                                    </ul>
                                                </div>
                                                <div
                                                    style={{backgroundImage: `url(${quickSort})`}}
                                                    className={styles.ExplanationItemImage}
                                                ></div>
                                            </div>
                                        )}
                                        {selectedExplanation === "when" && (
                                            <div className={styles.ExplanationItem}>
                                                <div className={styles.ExplanationItemText}>
                                                    <ul>
                                                        <li>For large datasets</li>
                                                        <li>When average performance matters</li>
                                                        <li>When in-place sorting is preferred</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                </div>

                                {/*code */} 
                                <SortCode sort="quick"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.Footer}></div>
            </div>
        </>
    )
}
export default QuickSort