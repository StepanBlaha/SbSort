import React from "react"
import styles from "./BubbleSort.module.css"
import { Play, Pause } from "lucide-react"
import { useState, useEffect } from "react"
import RangeSlider from "../../components/range/Range"
import Visualizer from "../../components/visualizer/Visualizer"
import bubbleSort from "../../assets/complexity/bubbleSort.png"

const BubbleSort = () => {
    const [ numbers, setNumbers ] = useState<string>()
    const [ play, setPlay ] = useState<boolean>(false)
    const [ dataType, setDataType ] = useState<"number" | "letter">("number")
    const [reset, setReset] = useState<boolean>(false)
    

    const [ speed, setSpeed ] = useState<number>(10)

    const [ num, setNum] = useState<number[]>([1, 5, 1, 2, 3, 8, 9, 1, 3, 1, 2])
    const [error, setError] = useState<string>()
    
    const [step, setStep] = useState<boolean>(false)


    const [ codeLang, setCodeLang ] = useState<"c++"| "php"| "c"| "java"| "js"| "ts"| "c#"| "python">("c++")


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
                                        <div className={styles.PlayButton} onClick={()=>setPlay(true)}>
                                            <Play  fill="#ffffff"/>
                                            <p>Play</p>
                                        </div>
                                        <div className={styles.PrimaryButton} onClick={()=>setPlay(false)}>
                                            <Pause fill="#333333" />
                                        </div>
                                    </div>

                                    <div className={styles.ConsoleButtonsGroup}>
                                        <div className={styles.PrimaryButton} onClick={() => {
                                        setStep(true);
                                        setTimeout(() => setStep(false), 0); // reset step flag
                                    }}>
                                            <p>Step</p>
                                        </div>
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
                                                <div className={styles.ExplanationItemImage}></div>
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
                                <div className={styles.Explanation}>
                                    <div className={styles.ExplanationHeader}>
                                        <div className={`${styles.ExplanationHeaderitem} ${codeLang === "c++" ? styles.SelectedExplanation : ""}`}
                                            onClick={()=>setCodeLang("c++")}
                                        >
                                            <p>C++</p>
                                        </div>
                                        <div className={`${styles.ExplanationHeaderitem} ${codeLang === "c" ? styles.SelectedExplanation : ""}`}
                                            onClick={()=>setCodeLang("c")}
                                        >
                                            <p>C</p>
                                        </div>
                                        <div className={`${styles.ExplanationHeaderitem} ${codeLang === "c#" ? styles.SelectedExplanation : ""}`}
                                            onClick={()=>setCodeLang("c#")}
                                        >
                                            <p>C#</p>
                                        </div>
                                        <div className={`${styles.ExplanationHeaderitem} ${codeLang === "python" ? styles.SelectedExplanation : ""}`}
                                            onClick={()=>setCodeLang("python")}
                                        >
                                            <p>Python</p>
                                        </div>
                                        <div className={`${styles.ExplanationHeaderitem} ${codeLang === "java" ? styles.SelectedExplanation : ""}`}
                                            onClick={()=>setCodeLang("java")}
                                        >
                                            <p>Java</p>
                                        </div>
                                        <div className={`${styles.ExplanationHeaderitem} ${codeLang === "php" ? styles.SelectedExplanation : ""}`}
                                            onClick={()=>setCodeLang("php")}
                                        >
                                            <p>PHP</p>
                                        </div>
                                        <div className={`${styles.ExplanationHeaderitem} ${codeLang === "js" ? styles.SelectedExplanation : ""}`}
                                            onClick={()=>setCodeLang("js")}
                                        >
                                            <p>Javascript</p>
                                        </div>
                                        <div className={`${styles.ExplanationHeaderitem} ${codeLang === "ts" ? styles.SelectedExplanation : ""}`}
                                            onClick={()=>setCodeLang("ts")}
                                        >
                                            <p>Typescript</p>
                                        </div>
                                    </div>
                                    <div className={styles.ExplanationContent}>
                                        {codeLang === "c++" && (
                                            <div className={styles.ExplanationItem}>
                                                <div className={styles.ExplanationItemText}>
                                                    <p>c++</p>
                                                </div>
                                            </div>
                                        )}
                                        {codeLang === "c" && (
                                            <div className={styles.ExplanationItem}>
                                                <div className={styles.ExplanationItemText}>
                                                    <p>c</p>
                                                </div>
                                            </div>
                                        )}
                                        {codeLang === "c#" && (
                                            <div className={styles.ExplanationItem}>
                                                <div className={styles.ExplanationItemText}>
                                                    <p>c#</p>
                                                </div>
                                            </div>
                                        )}
                                        {codeLang === "python" && (
                                            <div className={styles.ExplanationItem}>
                                                <div className={styles.ExplanationItemText}>
                                                    <p>python</p>
                                                </div>
                                            </div>
                                        )}
                                        {codeLang === "php" && (
                                            <div className={styles.ExplanationItem}>
                                                <div className={styles.ExplanationItemText}>
                                                    <p>php</p>
                                                </div>
                                            </div>
                                        )}
                                        {codeLang === "java" && (
                                            <div className={styles.ExplanationItem}>
                                                <div className={styles.ExplanationItemText}>
                                                    <p>java</p>
                                                </div>
                                            </div>
                                        )}
                                        {codeLang === "js" && (
                                            <div className={styles.ExplanationItem}>
                                                <div className={styles.ExplanationItemText}>
                                                    <p>js</p>
                                                </div>
                                            </div>
                                        )}
                                        {codeLang === "ts" && (
                                            <div className={styles.ExplanationItem}>
                                                <div className={styles.ExplanationItemText}>
                                                    <p>ts</p>
                                                </div>
                                            </div>
                                        )}
                                        
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.Footer}></div>
            </div>
        </>
    )
}
export default BubbleSort