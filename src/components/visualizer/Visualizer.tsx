import styles from "./Visualizer.module.css"
import { useState, useEffect, useRef } from "react"
import { pastelColors } from "../../constants/colors"
import { getRandomNumber } from "../../utils/random"


interface VisualizerProps {
    numbers: number[],
    play: boolean,
    reset?: boolean,
    className?: string,
    speed?: number
}

const Visualizer = ({ numbers, play, reset, className, speed = 1 }: VisualizerProps) => {
    const [nums, setNums] = useState<number[]>(numbers);
    const [activeIndices, setActiveIndices] = useState<number[]>([]);
    const [colorByValue, setColorByValue] = useState<Map<number, string>>(new Map());
    const timeout = 800 / speed;
    // --- progress tracking ---
    const iRef = useRef(0);
    const jRef = useRef(0);
    const playRef = useRef(play);
    const runningRef = useRef(false);
    const resetIdRef = useRef(0);



    // Handle stopping
    useEffect(() => {
        playRef.current = play;
    }, [play]);
    // Handle rest
    useEffect(() => {
        if (reset) {
            
            resetIdRef.current += 1;
            console.log(reset)
            setNums(numbers)
            playRef.current = false;
            setActiveIndices([]);
    
            iRef.current = 0;
            jRef.current = 0;
        }
    }, [reset])
    // Handle number change
    useEffect(() => {
        if (numbers.length > 0) {
            resetIdRef.current += 1;
            setNums(numbers)
            playRef.current = false;
            setActiveIndices([]);
            iRef.current = 0;
            jRef.current = 0;

            // Build value → color map (same value gets same color)
            const uniques = Array.from(new Set(numbers));
            // Optionally shuffle the palette to get some variation per update:
            const palette = [...pastelColors].sort(() => Math.random() - 0.5);

            const map = new Map<number, string>();
            let idx = 0;
            for (const v of uniques) {
                map.set(v, palette[idx % palette.length]);
                idx++;
            }
            setColorByValue(map);
        }   
    },[numbers])

    // Bubble sort
    const bubbleSort = async (arr: number[]) => {
        if (runningRef.current) return;
        runningRef.current = true;

        const myResetId = resetIdRef.current;

        const len = arr.length;

        for (let i = iRef.current; i < len; i++) {
            for (let j = jRef.current; j < len - i - 1; j++) {
                if (!playRef.current && myResetId === resetIdRef.current) {
                    // bail out completely on reset
                    runningRef.current = false;
                    iRef.current = i
                    jRef.current = j
                    return;
                }
                if (myResetId !== resetIdRef.current) {
                    // reset happened → bail without saving progress
                    runningRef.current = false;
                    iRef.current = 0
                    jRef.current = 0
                    j = 0
                    i = 0
                    return;
                }

                setActiveIndices([j, j + 1]);
                await new Promise((res) => setTimeout(res, timeout));

                if (!playRef.current && myResetId === resetIdRef.current) {
                    runningRef.current = false;
                    iRef.current = i
                    jRef.current = j
                    return;
                }
                if (myResetId !== resetIdRef.current) {
                    // reset happened → bail without saving progress
                    runningRef.current = false;
                    iRef.current = 0
                    jRef.current = 0
                    j = 0
                    i = 0
                    return;
                }

                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    setNums([...arr]);
                    await new Promise((res) => setTimeout(res, timeout));
                }
            }
            jRef.current = 0;
        }

        setActiveIndices([]);
        iRef.current = 0;
        jRef.current = 0;
        runningRef.current = false;
    };


    useEffect(() => {
        console.log(play)
        if (play) {
            bubbleSort([...nums]);
        }
    }, [play]);

    return (
        <div className={`${styles.Visualizer} ${className ?? ""}`}>
            {nums.map((n, i) => (
                <div
                    key={i}
                    className={`${styles.Block} ${activeIndices.includes(i) ? styles.ActiveBlock : ""}`}
                    style={{ height: `${n * 20}px`, backgroundColor: colorByValue.get(n) ?? "#ccc", }}
                />
            ))}
        </div>
    )
}

export default Visualizer;
