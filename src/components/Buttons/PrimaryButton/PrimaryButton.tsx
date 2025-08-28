import styles from "./PrimaryButton.module.css"
import { Pause } from "lucide-react"

interface PrimaryButtonProps{
    onClick: ()=>void
}


const PrimaryButton = ({onClick}: PrimaryButtonProps) => {
    
    return (
        <>
        <div className={styles.PrimaryButton} onClick={onClick}>
            <Pause fill="var(--contrast-secondary-color)" />
        </div>
        </>
    )
}

export default PrimaryButton