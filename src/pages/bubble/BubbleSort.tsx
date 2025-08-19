import React from "react"
import styles from "./BubbleSort.module.css"
import { Play, Pause } from "lucide-react"
import { useState } from "react"
import RangeSlider from "../../components/range/Range"



const BubbleSort = () => {
    const [ numbers, setNumbers ] = useState<string>()

    const [ dataType, setDataType ] = useState<"number" | "letter">("number")

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

                    <div className={styles.ContentWrap}>
                        <div className={styles.Console}>
                            <p className={styles.ConsoleTitle}>Input array</p>
                            <div className={styles.ConsoleContent}>


                                <input type="text" className={styles.NumberInput} value={numbers} onChange={(e) => setNumbers(e.target.value)} />
                                <div className={styles.ConsoleButtons}>
                                    <div className={styles.ConsoleButtonsGroup}>
                                        <div className={styles.PlayButton}>
                                            <Play  fill="#ffffff"/>
                                            <p>Play</p>
                                        </div>
                                        <div className={styles.PrimaryButton}>
                                            <Pause fill="#333333" />
                                        </div>
                                    </div>

                                    <div className={styles.ConsoleButtonsGroup}>
                                        <div className={styles.PrimaryButton}>
                                            <p>Step</p>
                                        </div>
                                        <div className={styles.PrimaryButton}>
                                            <p>Reset</p>
                                        </div>
                                    </div>


                                </div>


                                <div className={styles.Speed}>
                                    <p className={styles.SpeedTitle}>Speed</p>
                                    <RangeSlider
                                        min={0}
                                        max={200}
                                        step={10}
                                        defaultValue={100}
                                        onChange={(val) => console.log("Slider value:", val)}
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
                                <div className={styles.VisualizationGraph}></div>
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