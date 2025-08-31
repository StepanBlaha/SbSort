import styles from "./PlayButton.module.css"
import { Play } from "lucide-react"
import { useTranslation } from "react-i18next"
interface PlayButtonProps{
    onClick: ()=>void
}


const PlayButton = ({onClick}: PlayButtonProps) => {
    const {t} = useTranslation();
    return (
        <>
        <div className={styles.PlayButton} onClick={onClick}>
            <Play  fill="var(--background-color)"/>
            <p>{t("buttons.play")}</p>
        </div>
        </>
    )
}

export default PlayButton