import React from "react"
import styles from "../sort/SortPage.module.css"
import { Play, Pause } from "lucide-react"
import { useState, useEffect } from "react"
import RangeSlider from "../../components/range/Range"
import Visualizer from "../../components/visualizer/Visualizer"
import bubbleSort from "../../assets/complexity/bubbleSort.png"
import Navbar from "../../components/Navbar/Navbar"
import hero from "../../assets/bgs/hero-bubble.png"
import SortCode from "../../components/SortCode/SortCode"
import how from "../../assets/bgs/how-bubble.png"
import PlayButton from "../../components/Buttons/PlayButton/PlayButton"
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton"
import Footer from "../../components/Footer/Footer"


const BubbleSort = () => {
    const [ numbers, setNumbers ] = useState<string>()
    const [ play, setPlay ] = useState<boolean>(false)
    const [ dataType, setDataType ] = useState<"number" | "letter">("number")
    const [reset, setReset] = useState<boolean>(false)
    

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
                    <div className={styles.Hero} style={{backgroundImage: `url(${hero})`}}>
                        <p className={styles.HeroTitle}>Bubble Sort</p>
                        <p className={styles.HeroSubtitle}>Step-by-step visual explanation of Bubble Sort.</p>
                    </div>

                    <div className={styles.ContentWrap}>
                        <div className={styles.Console}>
                            <p className={styles.ConsoleTitle}>Input array</p>
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
                                        }} text="Reset"/>
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
                                        functionType="bubble"
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
                                                        <li>Compare each pair of adjacent elements</li>
                                                        <li>Swap them if they are in the wrong order</li>
                                                        <li>After each pass, the largest element moves to the end</li>
                                                        <li>Repeat the process for the remaining unsorted part</li>
                                                        <li>Stop when no swaps are needed (array is sorted)</li>
                                                    </ul>
                                                </div>
                                                <div className={styles.ExplanationItemImage} style={{backgroundImage: `url(${how})`}}></div>
                                            </div>
                                        )}
                                        {selectedExplanation === "time" && (
                                            <div className={styles.ExplanationItem}>
                                                <div className={styles.ExplanationItemText}>
                                                    <ul>
                                                        <li><b>Best Case:</b> O(n) &mdash; when the array is already sorted (with optimized version that stops if no swaps are made)</li>
                                                        <li><b>Average Case:</b> O(n<sup>2</sup>) &mdash; typical performance when elements are in random order</li>
                                                        <li><b>Worst Case:</b> O(n<sup>2</sup>) &mdash; when the array is sorted in reverse order</li>
                                                        <li><b>Space Complexity:</b> O(1) &mdash; since it sorts in place</li>
                                                    </ul>
                                                </div>
                                                <div
                                                    style={{backgroundImage: `url(${bubbleSort})`}}
                                                    className={styles.ExplanationItemImage}
                                                ></div>
                                            </div>
                                        )}
                                        {selectedExplanation === "when" && (
                                            <div className={styles.ExplanationItem}>
                                                <div className={styles.ExplanationItemText}>
                                                    <ul>
                                                        <li>When teaching or learning sorting basics (easy to understand)</li>
                                                        <li>For very small arrays where simplicity is more important than efficiency</li>
                                                        <li>When the array is almost sorted and only a few swaps are needed</li>
                                                        <li>Useful for demonstrating algorithm concepts (swapping, comparisons, passes)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                </div>


                                {/*code */} 
                                <SortCode sort="bubble"/>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        </>
    )
}
export default BubbleSort