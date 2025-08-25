import styles from "./SortCode.module.css"
import { useState, useEffect } from "react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';


import { C, Cplus, Csharp, Python, PHP, Js, Ts, Java } from "../../constants/sorts";

type SortNames = "quick" | "heap" | "merge" | "selection" | "insertion" | "bubble" | "counting";
type LangNames = "c++"| "php"| "c"| "java"| "js"| "ts"| "c#"| "python";


interface SortCodeProps {
    sort: SortNames
}

const SortCode = ({ sort }: SortCodeProps) => {
    


    const [ codeLang, setCodeLang ] = useState<LangNames>("c")

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



    return (
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
                        <SyntaxHighlighter language={codeLang === "js" ? "javascript" : codeLang} style={dracula}>
                        {codeSnippets[codeLang]}
                    </SyntaxHighlighter>
                    </div>
                </div>
                
                
            </div>

        </div>
    )
}

export default SortCode