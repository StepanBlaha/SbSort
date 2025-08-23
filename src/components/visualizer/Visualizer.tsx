import styles from "./Visualizer.module.css"
import { useState, useEffect, useRef } from "react"
import { pastelColors } from "../../constants/colors"
import { getRandomNumber } from "../../utils/random"

interface VisualizerProps {
    numbers: number[],
    play: boolean,
    functionType: string,
    reset?: boolean,
    className?: string,
    speed?: number,
    step?: boolean,
    sort?: string
}

type SortFunc = (arr: number[]) =>  Promise<void>;


const Visualizer = ({ numbers, play, reset, className, functionType, step, speed = 1, sort = "bubble" }: VisualizerProps) => {
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

    // keep playRef synced
    useEffect(() => {
        playRef.current = play;
    }, [play]);

    // Handle reset
    useEffect(() => {
        if (reset) {
            resetIdRef.current += 1;
            setNums(numbers);
            playRef.current = false;
            setActiveIndices([]);
            iRef.current = 0;
            jRef.current = 0;
        }
    }, [reset]);

    // Handle numbers change (also rebuild color mapping)
    useEffect(() => {
        if (numbers.length > 0) {
            resetIdRef.current += 1;
            setNums(numbers);
            playRef.current = false;
            setActiveIndices([]);
            iRef.current = 0;
            jRef.current = 0;

            const uniques = Array.from(new Set(numbers));
            const palette = [...pastelColors].sort(() => Math.random() - 0.5);
            const map = new Map<number, string>();
            uniques.forEach((v, idx) => {
                map.set(v, palette[idx % palette.length]);
            });
            setColorByValue(map);
        }
    }, [numbers]);

    

    const mergeSort = async (arr: number[]) => {
        if (runningRef.current) return;
        runningRef.current = true;
        
        const myResetId = resetIdRef.current;
        await mergeSortHelper(arr, 0, arr.length - 1, myResetId);
        
        setActiveIndices([]);
        runningRef.current = false;
    }

    const mergeSortHelper = async (arr: number[], left: number, right: number, myResetId: number) => {
        if (left >= right) return;
        
        const mid = Math.floor((left + right) / 2);
        
        await mergeSortHelper(arr, left, mid, myResetId);
        await mergeSortHelper(arr, mid + 1, right, myResetId);
        await mergeInPlace(arr, left, mid, right, myResetId);
    }

    const mergeInPlace = async (arr: number[], left: number, mid: number, right: number, myResetId: number) => {
        const leftArr = arr.slice(left, mid + 1);
        const rightArr = arr.slice(mid + 1, right + 1);
        
        let i = 0, j = 0, k = left;
        
        while (i < leftArr.length && j < rightArr.length) {
            // Reset handling
            if (myResetId !== resetIdRef.current) return;
            
            // Pause handling
            if (!playRef.current && myResetId === resetIdRef.current) return;
            
            setActiveIndices([k]);
            await new Promise((res) => setTimeout(res, timeout));
            
            if (leftArr[i] <= rightArr[j]) {
                arr[k] = leftArr[i];
                i++;
            } else {
                arr[k] = rightArr[j];
                j++;
            }
            
            setNums([...arr]);
            await new Promise((res) => setTimeout(res, timeout));
            k++;
        }
        
        while (i < leftArr.length) {
            arr[k] = leftArr[i];
            setNums([...arr]);
            await new Promise((res) => setTimeout(res, timeout));
            i++;
            k++;
        }
        
        while (j < rightArr.length) {
            arr[k] = rightArr[j];
            setNums([...arr]);
            await new Promise((res) => setTimeout(res, timeout));
            j++;
            k++;
        }
    }


    const quickSort = async (arr: number[]): Promise<number[]> => {
        
        // base case
        if (arr.length <= 1) {
            return arr;
        }

        // select our pivot -- the last element in the array
        const pivot = arr[arr.length - 1];

        // create 2 sub-arrays
        const leftArr: number[] = [];
        const rightArr: number[] = [];

        // loop through the array
        for (let i = 0; i < arr.length - 1; i++) {
            // if the current item is less than the value of our pivot
            // add the item to our leftArr, otherwise, add it to our
            // rightArr
            if (arr[i] < pivot) {
                leftArr.push(arr[i]);
            } else {
                rightArr.push(arr[i]);
            }
        }

        // repeat/recurse this process for our sub arrays
        const sortedLeft = await quickSort(leftArr);
        const sortedRight = await quickSort(rightArr);
        return [...sortedLeft, pivot, ...sortedRight];
    }
    const heapSort = async (arr: number[]) => { 
        
    }
    const countingSort = async (arr: number[]) => { 
        
    }


    // Step mode doesnt work
    const insertionSort = async (arr: number[]) => {
        if (runningRef.current) return;
        runningRef.current = true;

        const myResetId = resetIdRef.current;
        const len = arr.length;

        for (let i = iRef.current; i < len; i++) {
            const currentElement = arr[i];
            let j = i - 1;
            // Move elements greater than currentElement to the right
            setActiveIndices([j, j + 1]);
            await new Promise((res) => setTimeout(res, timeout));
            while (j >= 0 && arr[j] > currentElement) {
                arr[j + 1] = arr[j];
                j--;
                setNums([...arr]);
                await new Promise((res) => setTimeout(res, timeout));
            }
            // Insert currentElement into its correct position
            arr[j + 1] = currentElement;
            setNums([...arr]); // ADD THIS LINE!
            await new Promise((res) => setTimeout(res, timeout)); // AND THIS FOR VISUAL

            jRef.current = j;
            iRef.current = i;

            // ---- Pause handling ----
            if (!playRef.current && myResetId === resetIdRef.current) {
                runningRef.current = false;
                return;
            }

            // ---- Reset handling ----
            if (myResetId !== resetIdRef.current) {
                runningRef.current = false;
                iRef.current = 0;
                jRef.current = 0;
                return;
            }
        }
        jRef.current = 0;

        // Done sorting
        setActiveIndices([]);
        iRef.current = 0;
        jRef.current = 0;
        runningRef.current = false;
    }

    const selectionSort = async (arr: number[]) => {
        if (runningRef.current) return;
        runningRef.current = true;

        const myResetId = resetIdRef.current;
        const len = arr.length;

        for (let i = iRef.current; i < len - 1; i++) {
            let minIndex = i;

            // Determine starting position for inner loop
            let startJ;
            if (i === iRef.current && jRef.current > 0) {
                startJ = jRef.current + 1;
            } else {
                startJ = i + 1;
            }
            
            // If we're resuming and jRef.current indicates we finished the inner loop
            // (jRef.current === len means we completed all comparisons for this i)
            if (i === iRef.current && jRef.current >= len) {
                // We need to perform the swap for the previous iteration
                // Find the minimum in the remaining unsorted portion
                minIndex = i;
                for (let k = i + 1; k < len; k++) {
                    if (arr[k] < arr[minIndex]) minIndex = k;
                }
                
                if (minIndex !== i) {
                    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
                    setNums([...arr]);
                    await new Promise((res) => setTimeout(res, timeout));
                }
                
                // Move to next iteration
                iRef.current = i + 1;
                jRef.current = 0;
                continue;
            }
            
            for (let j = startJ; j < len; j++) {
                setActiveIndices([i, j]);
                await new Promise((res) => setTimeout(res, timeout));

                if (arr[j] < arr[minIndex]) minIndex = j;

                // Save progress
                jRef.current = j;
                iRef.current = i;

                // Pause/Reset handling
                if (!playRef.current && myResetId === resetIdRef.current) {
                    runningRef.current = false;
                    return;
                }
                if (myResetId !== resetIdRef.current) {
                    runningRef.current = false;
                    iRef.current = 0;
                    jRef.current = 0;
                    return;
                }
            }

            // Inner loop completed - mark that we need to swap
            jRef.current = len; // Signal that inner loop is complete
            
            // If not in step mode, do the swap immediately
        
            if (minIndex !== i) {
                [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
                setNums([...arr]);
                await new Promise((res) => setTimeout(res, timeout));
            }
            
            // Prepare for next outer loop iteration
            iRef.current = i + 1;
            jRef.current = 0;

        }

        // Done sorting
        setActiveIndices([]);
        iRef.current = 0;
        jRef.current = 0;
        runningRef.current = false;
    };

    // --- Bubble sort driver ---
    const bubbleSort = async (arr: number[]) => {
        if (runningRef.current) return;
        runningRef.current = true;

        const myResetId = resetIdRef.current;
        const len = arr.length;

        for (let i = iRef.current; i < len; i++) {
            for (let j = jRef.current; j < len - i - 1; j++) {
                setActiveIndices([j, j + 1]);
                await new Promise((res) => setTimeout(res, timeout));

                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    setNums([...arr]);
                    await new Promise((res) => setTimeout(res, timeout));
                }

                jRef.current = j + 1;
                iRef.current = i;

                // ---- Pause handling ----
                if (!playRef.current && myResetId === resetIdRef.current) {
                    runningRef.current = false;
                    return;
                }

                // ---- Reset handling ----
                if (myResetId !== resetIdRef.current) {
                    runningRef.current = false;
                    iRef.current = 0;
                    jRef.current = 0;
                    return;
                }
            }
            jRef.current = 0;
        }

        // Done sorting
        setActiveIndices([]);
        iRef.current = 0;
        jRef.current = 0;
        runningRef.current = false;
    };


    const sortFunction: Record<string, SortFunc> = {
        merge: mergeSort,
        bubble: bubbleSort,
        insertion: insertionSort,
        selection: selectionSort,
        heap: heapSort,
        counting: countingSort,
        //quick: quickSort
        // ... other sort functions
    };

    // Continuous play
    useEffect(() => {
        if (play) {
            sortFunction[functionType]([...nums]);
        }
    }, [play]);

    // Step-by-step
    /*
    useEffect(() => {
        if (step) {
            mergeSort([...nums], true);
        }
    }, [step]);*/

    return (
        <div className={`${styles.Visualizer} ${className ?? ""}`}>
            {nums.map((n, i) => (
                <div
                    key={i}
                    className={`${styles.Block} ${activeIndices.includes(i) ? styles.ActiveBlock : ""}`}
                    style={{
                        height: `${n * 20}px`,
                        backgroundColor: colorByValue.get(n) ?? "#ccc",
                    }}
                />
            ))}
        </div>
    )
}

export default Visualizer;







/**




import styles from "./Visualizer.module.css"
import { useState, useEffect, useRef } from "react"
import { pastelColors } from "../../constants/colors"
import { getRandomNumber } from "../../utils/random"

interface VisualizerProps {
    numbers: number[],
    play: boolean,
    reset?: boolean,
    className?: string,
    speed?: number,
    step?: boolean,
    sort?: string
}

const Visualizer = ({ numbers, play, reset, className, step, speed = 1, sort = "bubble" }: VisualizerProps) => {
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

    // keep playRef synced
    useEffect(() => {
        playRef.current = play;
    }, [play]);

    // Handle reset
    useEffect(() => {
        if (reset) {
            resetIdRef.current += 1;
            setNums(numbers);
            playRef.current = false;
            setActiveIndices([]);
            iRef.current = 0;
            jRef.current = 0;
        }
    }, [reset]);

    // Handle numbers change (also rebuild color mapping)
    useEffect(() => {
        if (numbers.length > 0) {
            resetIdRef.current += 1;
            setNums(numbers);
            playRef.current = false;
            setActiveIndices([]);
            iRef.current = 0;
            jRef.current = 0;

            const uniques = Array.from(new Set(numbers));
            const palette = [...pastelColors].sort(() => Math.random() - 0.5);
            const map = new Map<number, string>();
            uniques.forEach((v, idx) => {
                map.set(v, palette[idx % palette.length]);
            });
            setColorByValue(map);
        }
    }, [numbers]);
    const mergeSort = async (arr: number[], stepMode = false) => { 

    }
    const quickSort = async (arr: number[], stepMode = false) => { 
        
    }
    const heapSort = async (arr: number[], stepMode = false) => { 
        
    }
    const countingSort = async (arr: number[], stepMode = false) => { 
        
    }


    // Step mode doesnt work
    const insertionSort = async (arr: number[], stepMode = false) => {
        if (runningRef.current) return;
        runningRef.current = true;

        const myResetId = resetIdRef.current;
        const len = arr.length;

        for (let i = iRef.current; i < len; i++) {
            const currentElement = arr[i];
            let j = i - 1;
            // Move elements greater than currentElement to the right
            setActiveIndices([j, j + 1]);
            await new Promise((res) => setTimeout(res, timeout));
            while (j >= 0 && arr[j] > currentElement) {
                arr[j + 1] = arr[j];
                j--;
                setNums([...arr]);
                await new Promise((res) => setTimeout(res, timeout));
            }
            // Insert currentElement into its correct position
            arr[j + 1] = currentElement;
            setNums([...arr]); // ADD THIS LINE!
            await new Promise((res) => setTimeout(res, timeout)); // AND THIS FOR VISUAL

            jRef.current = j;
            iRef.current = i;

            // ---- STEP MODE: stop after one comparison/swap ----
            if (stepMode) {
                runningRef.current = false;
                return;
            }
            // ---- Pause handling ----
            if (!playRef.current && myResetId === resetIdRef.current) {
                runningRef.current = false;
                return;
            }

            // ---- Reset handling ----
            if (myResetId !== resetIdRef.current) {
                runningRef.current = false;
                iRef.current = 0;
                jRef.current = 0;
                return;
            }
        }
        jRef.current = 0;

        // Done sorting
        setActiveIndices([]);
        iRef.current = 0;
        jRef.current = 0;
        runningRef.current = false;
    }

    const selectionSort = async (arr: number[], stepMode = false) => {
        if (runningRef.current) return;
        runningRef.current = true;

        const myResetId = resetIdRef.current;
        const len = arr.length;

        for (let i = iRef.current; i < len - 1; i++) {
            let minIndex = i;

            // Determine starting position for inner loop
            let startJ;
            if (i === iRef.current && jRef.current > 0) {
                startJ = jRef.current + 1;
            } else {
                startJ = i + 1;
            }
            
            // If we're resuming and jRef.current indicates we finished the inner loop
            // (jRef.current === len means we completed all comparisons for this i)
            if (i === iRef.current && jRef.current >= len) {
                // We need to perform the swap for the previous iteration
                // Find the minimum in the remaining unsorted portion
                minIndex = i;
                for (let k = i + 1; k < len; k++) {
                    if (arr[k] < arr[minIndex]) minIndex = k;
                }
                
                if (minIndex !== i) {
                    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
                    setNums([...arr]);
                    await new Promise((res) => setTimeout(res, timeout));
                }
                
                // Move to next iteration
                iRef.current = i + 1;
                jRef.current = 0;
                
                if (stepMode) {
                    runningRef.current = false;
                    return;
                }
                continue;
            }
            
            for (let j = startJ; j < len; j++) {
                setActiveIndices([i, j]);
                await new Promise((res) => setTimeout(res, timeout));

                if (arr[j] < arr[minIndex]) minIndex = j;

                // Save progress
                jRef.current = j;
                iRef.current = i;

                // Pause after comparison in step mode
                if (stepMode) {
                    runningRef.current = false;
                    return;
                }

                // Pause/Reset handling
                if (!playRef.current && myResetId === resetIdRef.current) {
                    runningRef.current = false;
                    return;
                }
                if (myResetId !== resetIdRef.current) {
                    runningRef.current = false;
                    iRef.current = 0;
                    jRef.current = 0;
                    return;
                }
            }

            // Inner loop completed - mark that we need to swap
            jRef.current = len; // Signal that inner loop is complete
            
            // If not in step mode, do the swap immediately
            if (!stepMode) {
                if (minIndex !== i) {
                    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
                    setNums([...arr]);
                    await new Promise((res) => setTimeout(res, timeout));
                }
                
                // Prepare for next outer loop iteration
                iRef.current = i + 1;
                jRef.current = 0;
            } else {
                // In step mode, we'll handle the swap on the next step call
                runningRef.current = false;
                return;
            }
        }

        // Done sorting
        setActiveIndices([]);
        iRef.current = 0;
        jRef.current = 0;
        runningRef.current = false;
    };

    // --- Bubble sort driver ---
    const bubbleSort = async (arr: number[], stepMode = false) => {
        if (runningRef.current) return;
        runningRef.current = true;

        const myResetId = resetIdRef.current;
        const len = arr.length;

        for (let i = iRef.current; i < len; i++) {
            for (let j = jRef.current; j < len - i - 1; j++) {
                setActiveIndices([j, j + 1]);
                await new Promise((res) => setTimeout(res, timeout));

                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    setNums([...arr]);
                    await new Promise((res) => setTimeout(res, timeout));
                }

                jRef.current = j + 1;
                iRef.current = i;

                // ---- STEP MODE: stop after one comparison/swap ----
                if (stepMode) {
                    runningRef.current = false;
                    return;
                }

                // ---- Pause handling ----
                if (!playRef.current && myResetId === resetIdRef.current) {
                    runningRef.current = false;
                    return;
                }

                // ---- Reset handling ----
                if (myResetId !== resetIdRef.current) {
                    runningRef.current = false;
                    iRef.current = 0;
                    jRef.current = 0;
                    return;
                }
            }
            jRef.current = 0;
        }

        // Done sorting
        setActiveIndices([]);
        iRef.current = 0;
        jRef.current = 0;
        runningRef.current = false;
    };

    // Continuous play
    useEffect(() => {
        if (play) {
            insertionSort([...nums]);
        }
    }, [play]);

    // Step-by-step
    useEffect(() => {
        if (step) {
            insertionSort([...nums], true);
        }
    }, [step]);

    return (
        <div className={`${styles.Visualizer} ${className ?? ""}`}>
            {nums.map((n, i) => (
                <div
                    key={i}
                    className={`${styles.Block} ${activeIndices.includes(i) ? styles.ActiveBlock : ""}`}
                    style={{
                        height: `${n * 20}px`,
                        backgroundColor: colorByValue.get(n) ?? "#ccc",
                    }}
                />
            ))}
        </div>
    )
}

export default Visualizer;

 */