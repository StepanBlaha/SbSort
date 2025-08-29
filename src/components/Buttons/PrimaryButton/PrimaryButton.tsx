import styles from "./PrimaryButton.module.css"
import { Pause } from "lucide-react"
import type { LucideIcon } from "lucide-react"


interface PrimaryButtonProps{
    onClick: () => void,
    text?: string,
    Icon?: LucideIcon,
    fill?: boolean
}


const PrimaryButton = ({onClick, text, Icon, fill = false}: PrimaryButtonProps) => {
    
    return (
        <>
        <div className={styles.PrimaryButton} onClick={onClick}>
                {Icon && <Icon fill={fill === true ? "var(--contrast-secondary-color)" : ""} />}
                {text && <p>{text}</p>}
        </div>
        </>
    )
}

export default PrimaryButton