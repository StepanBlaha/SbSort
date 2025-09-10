import React, { useState, useEffect } from "react";
import styles from "../sort/SortPage.module.css";
import { Pause } from "lucide-react";
import RangeSlider from "../../components/range/Range";
import Visualizer from "../../components/visualizer/Visualizer";
import bubbleSort from "../../assets/complexity/bubbleSort.png";
import Navbar from "../../components/Navbar/Navbar";
import hero from "../../assets/bgs/hero-bubble.png";
import SortCode from "../../components/SortCode/SortCode";
import how from "../../assets/bgs/how-bubble.png";
import PlayButton from "../../components/Buttons/PlayButton/PlayButton";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";

const BubbleSort = () => {
  const { t } = useTranslation();

  const [numbers, setNumbers] = useState<string>();
  const [play, setPlay] = useState<boolean>(false);
  const [dataType, setDataType] = useState<"number" | "letter">("number");
  const [reset, setReset] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(10);
  const [num, setNum] = useState<number[]>([1, 5, 1, 2, 3, 8, 9, 1, 3, 1, 2]);
  const [error, setError] = useState<string>();
  const [step, setStep] = useState<boolean>(false);

  useEffect(() => {
    try {
      const nums = numbers
        ?.split(",")
        .filter((n) => !isNaN(Number(n)))
        .filter((n) => n.trim() !== "")
        .map((n) => Number(n));
      if (nums && nums !== num) setNum(nums);
    } catch (error) {
      console.log(error);
    }
  }, [numbers]);

  const [selectedExplanation, setSelectedExplanation] =
    useState<"how" | "time" | "when">("how");

  return (
    <>
      <div className={styles.Page}>
        <Navbar />

        <div className={styles.Content}>
          {/* HERO — aligned to About page style */}
          <section
            className={styles.Hero}
            style={{ backgroundImage: `url(${hero})` }}
            aria-labelledby="bubble-hero-title"
          >
            <span className={styles.HeroBadge}>
              Bubble Sort — {t("console.visualization")}
            </span>
            <h1 id="bubble-hero-title" className={styles.HeroTitle}>
              {t("hero.bubble.title")}
            </h1>
            <p className={styles.HeroSubtitle}>{t("hero.bubble.subtitle")}</p>
          </section>

          {/* MAIN WRAP — two-column card layout like About */}
          <div className={styles.ContentWrap}>
            {/* LEFT: Controls */}
            <aside className={styles.Console}>
              <h2 className={styles.SectionTitle}>{t("console.input")}</h2>
              <div className={styles.ConsoleCard}>
                <label htmlFor="numbers" className={styles.InputLabel}>
                  {t("console.input")}
                </label>
                <input
                  id="numbers"
                  type="text"
                  className={styles.NumberInput}
                  placeholder="e.g. 5,3,8,1,2"
                  value={numbers ?? ""}
                  onChange={(e) => setNumbers(e.target.value)}
                />

                <div className={styles.ConsoleButtons}>
                  <div className={styles.ConsoleButtonsGroup}>
                    <PlayButton onClick={() => setPlay(true)} />
                    <PrimaryButton
                      onClick={() => setPlay(false)}
                      Icon={Pause}
                      fill={true}
                      text={t("console.pause") as string}
                    />
                  </div>

                  <div className={styles.ConsoleButtonsGroup}>
                    {/* Uncomment if you bring back stepping
                    <PrimaryButton
                      onClick={() => {
                        setStep(true);
                        setTimeout(() => setStep(false), 0);
                      }}
                      text="Step"
                    />
                    */}
                    <PrimaryButton
                      onClick={() => {
                        setReset(true);
                        setTimeout(() => setReset(false), 0);
                        setPlay(false);
                      }}
                      text={t("console.reset") as string}
                    />
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
              </div>
            </aside>

            {/* RIGHT: Visualization + Explanation + Code */}
            <section className={styles.DataDiv} aria-label={t("console.visualization")}>
              <h2 className={styles.SectionTitle}>{t("console.visualization")}</h2>

              <div className={styles.DataContent}>
                {/* Visualizer frame */}
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

                {/* Explanation tabs (About-style pills + card body) */}
                <div className={styles.Explanation}>
                  <div className={styles.ExplanationHeader} role="tablist" aria-label="Explanation tabs">
                    <button
                      role="tab"
                      aria-selected={selectedExplanation === "how"}
                      className={`${styles.ExplanationHeaderitem} ${
                        selectedExplanation === "how" ? styles.SelectedExplanation : ""
                      }`}
                      onClick={() => setSelectedExplanation("how")}
                    >
                      <p>{t("console.how")}</p>
                    </button>
                    <button
                      role="tab"
                      aria-selected={selectedExplanation === "time"}
                      className={`${styles.ExplanationHeaderitem} ${
                        selectedExplanation === "time" ? styles.SelectedExplanation : ""
                      }`}
                      onClick={() => setSelectedExplanation("time")}
                    >
                      <p>{t("console.time")}</p>
                    </button>
                    <button
                      role="tab"
                      aria-selected={selectedExplanation === "when"}
                      className={`${styles.ExplanationHeaderitem} ${
                        selectedExplanation === "when" ? styles.SelectedExplanation : ""
                      }`}
                      onClick={() => setSelectedExplanation("when")}
                    >
                      <p>{t("console.when")}</p>
                    </button>
                  </div>

                  <div className={styles.ExplanationContent}>
                    {selectedExplanation === "how" && (
                      <div className={styles.ExplanationItem}>
                        <div className={styles.ExplanationItemText}>
                          <ul>
                            <li>{t("console.how_list.bubble.1")}</li>
                            <li>{t("console.how_list.bubble.2")}</li>
                            <li>{t("console.how_list.bubble.3")}</li>
                            <li>{t("console.how_list.bubble.4")}</li>
                            <li>{t("console.how_list.bubble.5")}</li>
                          </ul>
                        </div>
                        <div
                          className={styles.ExplanationItemImage}
                          style={{ backgroundImage: `url(${how})` }}
                        />
                      </div>
                    )}

                    {selectedExplanation === "time" && (
                      <div className={styles.ExplanationItem}>
                        <div className={styles.ExplanationItemText}>
                          <ul>
                            <li>
                              <b>{t("console.complexity_labels.best_case")}:</b>{" "}
                              {t("console.time_list.bubble.best_case.complexity")} —{" "}
                              {t("console.time_list.bubble.best_case.description")}
                            </li>
                            <li>
                              <b>{t("console.complexity_labels.average_case")}:</b>{" "}
                              {t("console.time_list.bubble.average_case.complexity")} —{" "}
                              {t("console.time_list.bubble.average_case.description")}
                            </li>
                            <li>
                              <b>{t("console.complexity_labels.worst_case")}:</b>{" "}
                              {t("console.time_list.bubble.worst_case.complexity")} —{" "}
                              {t("console.time_list.bubble.worst_case.description")}
                            </li>
                            <li>
                              <b>{t("console.complexity_labels.space_complexity")}:</b>{" "}
                              {t("console.time_list.bubble.space_complexity.complexity")} —{" "}
                              {t("console.time_list.bubble.space_complexity.description")}
                            </li>
                          </ul>
                        </div>
                        <div
                          className={styles.ExplanationItemImage}
                          style={{ backgroundImage: `url(${bubbleSort})` }}
                        />
                      </div>
                    )}

                    {selectedExplanation === "when" && (
                      <div className={styles.ExplanationItem}>
                        <div className={styles.ExplanationItemText}>
                          <ul>
                            <li>{t("console.when_list.bubble.1")}</li>
                            <li>{t("console.when_list.bubble.2")}</li>
                            <li>{t("console.when_list.bubble.3")}</li>
                            <li>{t("console.when_list.bubble.4")}</li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Code snippet card */}
                <div className={styles.CodeCard}>
                  <SortCode sort="bubble" />
                </div>
              </div>
            </section>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default BubbleSort;



/*

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
import { useTranslation } from "react-i18next"

const BubbleSort = () => {
    const { t } = useTranslation();
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
    const labels = t('complexity_labels', { returnObjects: true });
    const timeData = t(`time_list.bubble`, { returnObjects: true });

    return (
        <>
            <div className={styles.Page}>
                <Navbar/>

                <div className={styles.Content}>
                    <div className={styles.Hero} style={{backgroundImage: `url(${hero})`}}>
                        <p className={styles.HeroTitle}>{t("hero.bubble.title")}</p>
                        <p className={styles.HeroSubtitle}>{t("hero.bubble.subtitle")}</p>
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
                                                        <li>{t("console.how_list.bubble.1")}</li>
                                                        <li>{t("console.how_list.bubble.2")}</li>
                                                        <li>{t("console.how_list.bubble.3")}</li>
                                                        <li>{t("console.how_list.bubble.4")}</li>
                                                        <li>{t("console.how_list.bubble.5")}</li>
                                                    </ul>
                                                </div>
                                                <div className={styles.ExplanationItemImage} style={{backgroundImage: `url(${how})`}}></div>
                                            </div>
                                        )}
                                        {selectedExplanation === "time" && (
                                            <div className={styles.ExplanationItem}>
                                                <div className={styles.ExplanationItemText}>
                                                    <ul>
                                                        <li>
                                                            <b>{t('console.complexity_labels.best_case')}:</b> {t(`console.time_list.bubble.best_case.complexity`)} &mdash; {t(`console.time_list.bubble.best_case.description`)}
                                                        </li>
                                                        <li>
                                                            <b>{t('console.complexity_labels.average_case')}:</b> {t(`console.time_list.bubble.average_case.complexity`)} &mdash; {t(`console.time_list.bubble.average_case.description`)}
                                                        </li>
                                                        <li>
                                                            <b>{t('console.complexity_labels.worst_case')}:</b> {t(`console.time_list.bubble.worst_case.complexity`)} &mdash; {t(`console.time_list.bubble.worst_case.description`)}
                                                        </li>
                                                        <li>
                                                            <b>{t('console.complexity_labels.space_complexity')}:</b> {t(`console.time_list.bubble.space_complexity.complexity`)} &mdash; {t(`console.time_list.bubble.space_complexity.description`)}
                                                        </li>
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
                                                        <li>{t("console.when_list.bubble.1")}</li>
                                                        <li>{t("console.when_list.bubble.2")}</li>
                                                        <li>{t("console.when_list.bubble.3")}</li>
                                                        <li>{t("console.when_list.bubble.4")}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                </div>



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
*/