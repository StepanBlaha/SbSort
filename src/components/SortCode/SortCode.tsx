import styles from "./SortCode.module.css"
import { useState, useEffect } from "react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy } from 'lucide-react';
import Alert from "../Alert/Alert";
import { C, Cplus, Csharp, Python, PHP, Js, Ts, Java } from "../../constants/sorts";
import { motion, AnimatePresence } from "framer-motion";

type SortNames = "quick" | "heap" | "merge" | "selection" | "insertion" | "bubble" | "counting";
type LangNames = "c++"| "php"| "c"| "java"| "js"| "ts"| "c#"| "python";


interface SortCodeProps {
    sort: SortNames
}

const SortCode = ({ sort }: SortCodeProps) => {
    const [codeLang, setCodeLang] = useState<LangNames>("c"); // Selected coding language
    const [copying, setCopying] = useState<boolean>(false); // Copying flag
    // Flags for alert
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const codeSnippets: Record<LangNames, string> = {
        "c++": Cplus[sort as SortNames],
        "php": PHP[sort as SortNames],
        "c": C[sort as SortNames],
        "java": Java[sort as SortNames],
        "js": Js[sort as SortNames],
        "ts": Ts[sort as SortNames],
        "c#": Csharp[sort as SortNames],
        "python": Python[sort as SortNames],
    };

    const handleCopy = () => {
        if (copying) return;
        try {
            setCopying(true);
            console.log("Copying...");
            navigator.clipboard.writeText(codeSnippets[codeLang]);
            console.log("Code copied successfully!");
            setIsSuccess(true)
        } catch (error) {
            console.error(`Copying error: ${error}`);
            setIsSuccess(false)
        } finally {
            setCopying(false);

            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 8000); 
        }
    }


    return (
        <>
            <div className={styles.Explanation}>
                <div className={styles.ExplanationHeader}>
                    {Object.keys(codeSnippets).map((lang) => (
                        <div
                            className={`${styles.ExplanationHeaderitem} ${codeLang ===  lang ? styles.SelectedExplanation : ""}`}
                            onClick={()=>setCodeLang(lang as typeof codeLang)}
                        >
                            <p>{lang.toUpperCase()}</p>
                        </div>
                        
                    ))}
                </div>


                <div className={styles.ExplanationContent}>
                    
                    <div className={styles.ExplanationItem}>
                        <div className={styles.ExplanationItemText}>
                            <button className={styles.CopyButton} onClick={handleCopy}>
                                <Copy/>
                            </button>
                            <SyntaxHighlighter language={codeLang === "js" ? "javascript" : codeLang} style={dracula}>
                                {codeSnippets[codeLang]}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    
                    
                </div>

            </div>

            <AnimatePresence initial={false}>
                {showAlert && (
                    <motion.div 
                    className={styles.alertFixed}
                    initial={{ right: 0, opacity: 0 }}
                    animate={{ right: showAlert ? "20px" : 0, opacity: showAlert ? 1 : 0 }}
                    exit={{ right: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                    >
                        <Alert type={isSuccess ? "success" : "error"} onDismiss={()=>setShowAlert(false)}/>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default SortCode