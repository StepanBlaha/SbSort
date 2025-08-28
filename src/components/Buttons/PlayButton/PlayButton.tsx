import styles from "./PlayButton.module.css"
import { Play } from "lucide-react"

interface PlayButtonProps{
    onClick: ()=>void
}


const PlayButton = ({onClick}: PlayButtonProps) => {
    
    return (
        <>
        <div className={styles.PlayButton} onClick={onClick}>
            <Play  fill="var(--background-color)"/>
            <p>Play</p>
        </div>
        </>
    )
}

export default PlayButton