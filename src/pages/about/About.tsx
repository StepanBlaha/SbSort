import React from "react"
import styles from "./About.module.css"
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
import ShinyText from "../../components/ShinyText/ShinyText"


const About = () => {


    const navigate = useNavigate();


    return (
        <>
            <div className={styles.Page}>
                <Navbar/>

                <div className={styles.Content}>

                    <div className={styles.About}>
                        <div className={styles.AboutHero}>
                            <span className={styles.AboutHeroBadge}>About SBSORT -- Sorting Visualizer</span>
                            <h1 className={styles.AboutHeroTitle}>We make sorting algorithms <ShinyText speed={8}><em>click.</em></ShinyText></h1>
                            <p className={styles.AboutHeroSubtitle}>
                                SBSORT turns textbook algorithms into visual, step‑by‑step animations. 
                                Explore different strategies, compare their trade‑offs, and build intuition by watching them sort the very same array side‑by‑side.
                            </p>
                        </div>

                        <div className={styles.AboutFeatures}>
                            <div className={styles.AboutFeature}>
                                <div className={styles.AboutFeatureIcon}>🔍</div>
                                <p className={styles.AboutFeatureTitle}>Concepts you can see</p>
                                <p className={styles.AboutFeatureContent}>Animations reveal comparisons, swaps, and partitions so the logic behind each algorithm becomes obvious.</p>
                            </div>

                            <div className={styles.AboutFeature}>
                                <div className={styles.AboutFeatureIcon}>⏱️</div>
                                <p className={styles.AboutFeatureTitle}>Time & space intuition</p>
                                <p className={styles.AboutFeatureContent}>Built‑in notes and complexity tables connect what you see to Big‑O analysis and real‑world constraints.</p>
                            </div>

                            <div className={styles.AboutFeature}>
                                <div className={styles.AboutFeatureIcon}>🎛️</div>
                                <p className={styles.AboutFeatureTitle}>Interactive controls</p>
                                <p className={styles.AboutFeatureContent}>Change the input array, step through frames, or adjust speed to investigate best, average, and worst cases.</p>
                            </div>

                        </div>

                        <div className={styles.AboutProcess}>
                            <p className={styles.AboutProcessTitle}>How SBSORT teaches</p>
                            <div className={styles.AboutProcessContent}>
                                <div className={styles.ProcessStep}>
                                    <div className={styles.ProcessStepIcon}>1</div>
                                    <div className={styles.ProcessStepContent}>
                                        <p className={styles.ProcessStepTitle}>Pick an algorithm</p>
                                        <p className={styles.ProcessStepText}>Select Bubble, Insertion, Selection, Merge, Quick, Heap and more — each with a concise explanation and typical use‑cases.</p>
                                    </div>
                                </div>

                                <div className={styles.ProcessStep}>
                                    <div className={styles.ProcessStepIcon}>2</div>
                                    <div className={styles.ProcessStepContent}>
                                        <p className={styles.ProcessStepTitle}>Set your experimnt</p>
                                        <p className={styles.ProcessStepText}>Enter a custom array or randomize one. Choose visualization speed and whether to highlight swaps, pivots, or partitions.</p>
                                    </div>
                                </div>

                                <div className={styles.ProcessStep}>
                                    <div className={styles.ProcessStepIcon}>3</div>
                                    <div className={styles.ProcessStepContent}>
                                        <p className={styles.ProcessStepTitle}>Watch, pause, inspect</p>
                                        <p className={styles.ProcessStepText}>Play the animation, pause at any frame, and read the side notes to understand the exact operation at each step.</p>
                                    </div>
                                </div>

                                <div className={styles.ProcessStep}>
                                    <div className={styles.ProcessStepIcon}>4</div>
                                    <div className={styles.ProcessStepContent}>
                                        <p className={styles.ProcessStepTitle}>Compare & conclude</p>
                                        <p className={styles.ProcessStepText}>See how input order and size affect runtime. Learn when a simple algorithm is perfect — and when divide‑and‑conquer wins.</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className={styles.AboutWhy}>
                            <p className={styles.AboutWhyTitle}>Why learners choose SBSORT</p>
                            <div className={styles.AboutWhyContent}>
                                <div className={styles.AboutWhyCard}>
                                    <strong>12+</strong>
                                    <span>algorithms visualized</span>
                                </div>

                                <div className={styles.AboutWhyCard}>
                                    <strong>Step-by-step</strong>
                                    <span>explanations with Big-O</span>
                                </div>

                                <div className={styles.AboutWhyCard}>
                                    <strong>Accessible</strong>
                                    <span>keyboard & screen-reader friendly</span>
                                </div>

                                <div className={styles.AboutWhyCard}>
                                    <strong>Multilingual</strong>
                                    <span>EN / CZ ready</span>
                                </div>

                            </div>
                        </div>

                        <div className={styles.AboutPeople}>
                            <p className={styles.AboutPeopleTitle}>Who’s behind the project</p>
                            <div className={styles.AboutPeopleContent}>
                                <div className={styles.AboutPeopleCard}>
                                    <div className={styles.PeopleCardIcon}></div>
                                    <div className={styles.PeopleCardContent}>
                                        <p className={styles.PeopleCardTitle}>Stepan Blaha</p>
                                        <p className={styles.PeopleCardText}>Creator & Engineer — builds the visualizations and content.</p>
                                    </div>
                                </div>



                            </div>
                        </div>

                        <div className={styles.AboutQuestion}>
                            <p className={styles.AboutQuestionTitle}>Frequently asked questions</p>
                            <div className={styles.AboutQuestionContent}>
                                <div className={styles.AboutQuestionCard}>
                                    <p className={styles.QuestionCardTitle}>Can I use SBSORT in my course?</p>
                                    <p className={styles.QuestionCardText}>Yes. It’s designed for classrooms and self‑study. You can embed lessons or project it live during lectures.</p>
                                </div>

                                <div className={styles.AboutQuestionCard}>
                                    <p className={styles.QuestionCardTitle}>Does it work on mobile?</p>
                                    <p className={styles.QuestionCardText}>Absolutely. The UI scales down to phones and tablets with touch‑friendly controls.</p>
                                </div>

                                <div className={styles.AboutQuestionCard}>
                                    <p className={styles.QuestionCardTitle}>What about dark mode and languages?</p>
                                    <p className={styles.QuestionCardText}>Dark/light themes are built‑in. English and Czech are supported, and more languages can be added.</p>
                                </div>

                                <div className={styles.AboutQuestionCard}>
                                    <p className={styles.QuestionCardTitle}>Is SBSORT open source?</p>
                                    <p className={styles.QuestionCardText}>The visualizer core can be shared for educational use. Contact us for licensing or contributions.</p>
                                </div>



                            </div>
                        </div>


                    </div>
                </div>

                <Footer/>
            </div>
        </>
    )
}
export default About