import styles from "./Menu.module.css"
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronDown } from 'lucide-react';
import LanguageSwitch from "../../LanguageSwitch/LanguageSwitch";
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
/**
* Props for the Menu component.
*/ 
interface MenuProps{
    display?:boolean, // Whether to display menu
    handleDisplay: (val: boolean) => void, // Display change event handler
    version?: "onboarding" | "default" | "settings" // Version of the menu layout
}
/**
* A menu component with customizable display and layout versions.
* Contains various links, language and currency swittch and a logout option
*
* @param props Menu props
* @param {boolean} props.display - Whether to display menu
* @param {(val: boolean) => void} props.handleDisplay - Display change event handler
* @param {"onboarding" | "default" | "settings"} props.version - Version of the menu layout
* @returns TSX.Element
*/
const Menu = ({display = false, handleDisplay, version = "default"} : MenuProps) => {
    const { t } = useTranslation(); // Translation

    const navigate = useNavigate(); // Navigate
    // Flags for opening and closing the modals
    const [langOpen, setLangOpen] = useState<boolean>(false);
    const [currOpen, setCurrOpen] = useState<boolean>(false);
    const [userOpen, setUserOpen] = useState<boolean>(false);
    const [logoutOpen, setLogoutOpen] = useState<boolean>(false)


    return(
        <>

        <AnimatePresence>
            {display === true && (
            <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className={styles.MenuMask}>
            <div className={styles.Menu} >
                <div className={styles.Wrapper}>
                    <div className={styles.TitlePart}>
                        <p>SBSORT</p>
                        <X onClick={()=>handleDisplay(false)}/>
                    </div>
                    <div className={styles.ContentPart}>
                        <>
                            <div className={styles.LinkGroup}>
                                <div className={styles.MenuItem}>
                                    <button className={styles.MenuItemHeader} onClick={()=>navigate("/home")}>
                                        <ChevronLeft/>
                                        <p>{t("navbar.sections.home")}</p>
                                    </button>
                                </div>
                                <div className={styles.MenuItem}>
                                    <button className={styles.MenuItemHeader} onClick={()=>navigate("/list")}>
                                        <ChevronLeft/>
                                        <p>{t("navbar.sections.list")}</p>
                                    </button>
                                </div>
                                <div className={styles.MenuItem}>
                                    <button className={styles.MenuItemHeader} onClick={()=>navigate("/about")}>
                                        <ChevronLeft/>
                                        <p>{t("navbar.sections.about")}</p>
                                    </button>
                                </div>
                            </div>
                            <div className={styles.LinkGroup}>
                                <div className={styles.MenuItem}>
                                    <button className={styles.MenuItemHeader} onClick={()=>setLangOpen(!langOpen)}>
                                        {langOpen === true ? <ChevronDown/> : <ChevronLeft/>}
                                        <p>{t("navbar.language")}</p>
                                    </button>
                                    {langOpen === true && (
                                        <LanguageSwitch type="mobile"/>
                                    )}
                                </div>
                            </div>
                        </>
                    </div>
                </div>
               
                </div>
            </motion.div>
            )}
            </AnimatePresence>
        </>
    )
};
export default Menu;