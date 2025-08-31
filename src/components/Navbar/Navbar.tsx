import styles from "./Navbar.module.css"
import logo from "../../assets/logos/SBSORT-light.png"
import darklogo from "../../assets/logos/SBSORT-dark.png"
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch"
import { useState, useEffect, useRef } from "react"
import { useWindowSize } from "../../hooks/useWindowSize"
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"
import { useTheme } from "../../context/ThemeContext"
import { useTranslation } from "react-i18next"
import MenuBlock from "./Menu/Menu"
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch"

const Navbar = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { theme } = useTheme()
    const width = useWindowSize();


    const [ menuOpen, setMenuOpen] = useState<boolean>(() => {
        const open = sessionStorage.getItem("SBSortMenuOpen");
        return open ? JSON.parse(open) : false;
    });
    useEffect(() => {
        console.log("lll")
        sessionStorage.setItem("SBSortMenuOpen", JSON.stringify(menuOpen));
    }, [menuOpen]);

    useEffect(()=>{
        if(width > 600 && menuOpen === true){
            setMenuOpen(false)
        }
    }, [width])
    
    // Handle clickoff
    const ref = useRef<HTMLDivElement>(null); // Ref for the dropdown
    const buttonRef = useRef<HTMLDivElement>(null); // Ref for the dropdown button
    // Handle click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node) && buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    



    return (
        <>
            <MenuBlock display={menuOpen} handleDisplay={setMenuOpen} version="default"/>
        {width > 800 ? (
            <div className={styles.Header}>
                <div className={styles.Logo}
                onClick={()=>navigate("/home")}
                >
                    <img src={theme === "light" ? logo : darklogo} alt="SBSORT logo" />
                </div>
                <div className={styles.HeaderGroup}>

                    <div className={styles.Pages}>
                        <div className={styles.HeaderPage} onClick={()=>navigate("/home")}>
                            <a>{t("navbar.sections.home")}</a>
                        </div>
                        <div className={styles.HeaderPage} onClick={()=>navigate("/list")}>
                            <a>{t("navbar.sections.list")}</a>
                        </div>
                        <div className={styles.HeaderPage} onClick={()=>navigate("/about")}>
                            <a>{t("navbar.sections.about")}</a>
                        </div>
                    </div>
                    <LanguageSwitch type="pc"/>
                    <div className={styles.Theme}>
                        <ThemeSwitch/>
                    </div>
                </div>
            </div>
            ) : (
            <div className={styles.Header}>
                <div className={styles.Logo}
                onClick={()=>navigate("/home")}
                >
                    <img src={theme === "light" ? logo : darklogo} alt="SBSORT logo" />
                </div>
            <div className={styles.NavbarMobile} >
                <div className={styles.NavbarHeader} ref={buttonRef} >
                    <label className={`${styles.hamburger} ${menuOpen ? styles.inputChecked : ''}`}>
                        <input type="checkbox" checked={menuOpen} onChange={()=>setMenuOpen(!menuOpen)} />
                        <svg viewBox="0 0 32 32">
                            <path
                            className={`${styles.line} ${styles.lineTopBottom}`}
                            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                            />
                            <path className={styles.line} d="M7 16 27 16" />
                        </svg>
                    </label>
                </div>
                <ThemeSwitch/>
                
            </div>
        </div>
        )}
        </>
    )
}

export default Navbar;










/**
import styles from "./Navbar.module.css"
import logo from "../../assets/logos/SBSORT-light.png"
import darklogo from "../../assets/logos/SBSORT-dark.png"
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch"
import { useState, useEffect, useRef } from "react"
import { useWindowSize } from "../../hooks/useWindowSize"
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"
import { useTheme } from "../../context/ThemeContext"


const Navbar = () => {
    const navigate = useNavigate();
    const { theme } = useTheme()
    const width = useWindowSize();
    const [ menuOpen, setMenuOpen] = useState<boolean>(false)
    const [activeId, setActiveId] = useState<string>("home");

    useEffect(()=>{
        if(width > 600 && menuOpen === true){
            setMenuOpen(false)
        }
    }, [width])
    
    // Handle clickoff
    const ref = useRef<HTMLDivElement>(null); // Ref for the dropdown
    const buttonRef = useRef<HTMLDivElement>(null); // Ref for the dropdown button
    // Handle click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node) && buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    
    const sections = ["Home", "Sort Types", "About"]


    return (
        <>
        {width > 800 ? (
            <div className={styles.Header}>
                <div className={styles.Logo}
                >
                    <img src={theme === "light" ? logo : darklogo} alt="SBSORT logo" />
                </div>
                <div className={styles.HeaderGroup}>

                    <div className={styles.Pages}>
                        <div className={styles.HeaderPage} onClick={()=>navigate("/home")}>
                            <a>Home</a>
                        </div>
                        <div className={styles.HeaderPage} onClick={()=>navigate("/list")}>
                            <a>Sort Types</a>
                        </div>
                        <div className={styles.HeaderPage} onClick={()=>navigate("/about")}>
                            <a>About</a>
                        </div>
                    </div>
                    <div className={styles.Theme}>
                        <ThemeSwitch/>
                    </div>
                </div>
            </div>
            ) : (
            <div className={styles.Header}>
                <div className={styles.Logo}>
                    <img src={theme === "light" ? logo : darklogo} alt="SBSORT logo" />
                </div>
            <div className={styles.NavbarMobile} >
                <div className={styles.NavbarHeader} ref={buttonRef} >
                    <label className={`${styles.hamburger} ${menuOpen ? styles.inputChecked : ''}`}>
                        <input type="checkbox" checked={menuOpen} onChange={()=>setMenuOpen(!menuOpen)} />
                        <svg viewBox="0 0 32 32">
                            <path
                            className={`${styles.line} ${styles.lineTopBottom}`}
                            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                            />
                            <path className={styles.line} d="M7 16 27 16" />
                        </svg>
                    </label>

                            </div>
                            <ThemeSwitch/>
                <AnimatePresence initial={false}>
                {menuOpen && 
                    <motion.div
                    key="dropdown"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: menuOpen ? "fit-content" : 0, opacity: menuOpen ? 1 : 0 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                    className={styles.HeaderNavbarMobile}
                    ref={ref}
                    >
                        {sections.map((id, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ delay: index * 0.03 }}
                                key={id}
                                className={`${activeId === id ? styles.Active : ""} ${styles.HeaderPage}`}
                                onClick={() => {
                                setMenuOpen(false);
                                    setTimeout(() => {
                                        navigate(`/${id === "Sort Types" ? "list" : id}`)
                                    }, 50); 
                                }}
                            >
                                <p>{id}</p>
                        </motion.div>
                        ))}
                        
                    
                    </motion.div>
                }
                </AnimatePresence>
            </div>
            </div>
        )}
        </>
    )
}

export default Navbar;
 */