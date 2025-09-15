/*

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
        {width > 900 ? (
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




*/





/*
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
import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';
import darklogo from "../../assets/logos/SBSORT-dark.png"
// use your own icon import if react-icons is not available
import { GoArrowUpRight } from 'react-icons/go';
import './CardNav.css';


import { useWindowSize } from "../../hooks/useWindowSize"
import { useNavigate } from "react-router-dom"
import { useTheme } from "../../context/ThemeContext"

type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

export interface CardNavProps {
  logo: string;
  logoAlt?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}

const Navbar: React.FC<CardNavProps> = ({
  logo,
  logoAlt = 'Logo',
  className = '',
  ease = 'power3.out',
  baseColor = '#fff',
  menuColor,
  buttonBgColor,
  buttonTextColor
}) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { theme } = useTheme()
    const width = useWindowSize();
    const items = React.useMemo<CardNavItem[]>(() => ([
        {
        label: t("navbar.sections.home"), 
        bgColor: "#170D27",
        textColor: "#fff",
        links: [
            { label: "Featured", ariaLabel: "Featured Projects", href: "/about" },
            { label: "Case Studies", ariaLabel: "Project Case Studies", href: "/about" }
        ]
        },
    {
        label: t("navbar.sections.about"),
        bgColor: "#0D0716",
        textColor: "#fff",
        links: [
            { label: "Company", ariaLabel: "About Company", href: "/about" },
            { label: "Careers", ariaLabel: "About Careers", href: "/about" }
        ]
        },
        {
        label: t("navbar.sections.list"), 
        bgColor: "#170D27",
        textColor: "#fff",
        links: [
            { label: "Featured", ariaLabel: "Featured Projects", href: "/about" },
            { label: "Case Studies", ariaLabel: "Project Case Studies", href: "/about" }
        ]
        },
        {
        label: "Contact",
        bgColor: "#271E37", 
        textColor: "#fff",
        links: [
            { label: "Email", ariaLabel: "Email us", href: "/about" },
            { label: "Twitter", ariaLabel: "Twitter", href: "/about" },
            { label: "LinkedIn", ariaLabel: "LinkedIn", href: "/about" }
        ]
        }
]), []);

    

    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const navRef = useRef<HTMLDivElement | null>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    const calculateHeight = () => {
        const navEl = navRef.current;
        if (!navEl) return 260;

        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        if (isMobile) {
        const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
        if (contentEl) {
            const wasVisible = contentEl.style.visibility;
            const wasPointerEvents = contentEl.style.pointerEvents;
            const wasPosition = contentEl.style.position;
            const wasHeight = contentEl.style.height;

            contentEl.style.visibility = 'visible';
            contentEl.style.pointerEvents = 'auto';
            contentEl.style.position = 'static';
            contentEl.style.height = 'auto';

            contentEl.offsetHeight;

            const topBar = 60;
            const padding = 16;
            const contentHeight = contentEl.scrollHeight;

            contentEl.style.visibility = wasVisible;
            contentEl.style.pointerEvents = wasPointerEvents;
            contentEl.style.position = wasPosition;
            contentEl.style.height = wasHeight;

            return topBar + contentHeight + padding;
        }
        }
        return 260;
    };

    const createTimeline = () => {
        const navEl = navRef.current;
        if (!navEl) return null;

        gsap.set(navEl, { height: 60, overflow: 'hidden' });
        gsap.set(cardsRef.current, { y: 50, opacity: 0 });

        const tl = gsap.timeline({ paused: true });

        tl.to(navEl, {
        height: calculateHeight,
        duration: 0.4,
        ease
        });

        tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');

        return tl;
    };

    useLayoutEffect(() => {
        const tl = createTimeline();
        tlRef.current = tl;

        return () => {
        tl?.kill();
        tlRef.current = null;
        };
    }, [ease, items]);

    useLayoutEffect(() => {
        const handleResize = () => {
        if (!tlRef.current) return;

        if (isExpanded) {
            const newHeight = calculateHeight();
            gsap.set(navRef.current, { height: newHeight });

            tlRef.current.kill();
            const newTl = createTimeline();
            if (newTl) {
            newTl.progress(1);
            tlRef.current = newTl;
            }
        } else {
            tlRef.current.kill();
            const newTl = createTimeline();
            if (newTl) {
            tlRef.current = newTl;
            }
        }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isExpanded]);

    const toggleMenu = () => {
        const tl = tlRef.current;
        if (!tl) return;
        if (!isExpanded) {
        setIsHamburgerOpen(true);
        setIsExpanded(true);
        tl.play(0);
        } else {
        setIsHamburgerOpen(false);
        tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
        tl.reverse();
        }
    };

    const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
        if (el) cardsRef.current[i] = el;
    };

    return (
        <div className={`card-nav-container ${className}`}>
        <nav ref={navRef} className={`card-nav ${isExpanded ? 'open' : ''}`} style={{ backgroundColor: baseColor }}>
            <div className="card-nav-top">
            <div
                className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                role="button"
                aria-label={isExpanded ? 'Close menu' : 'Open menu'}
                tabIndex={0}
                style={{ color: menuColor || '#000' }}
            >
                <div className="hamburger-line" />
                <div className="hamburger-line" />
            </div>

            <div className="logo-container">
                <img src={theme === "light" ? logo : darklogo} alt={logoAlt} className="logo" />
            </div>

            <button
                type="button"
                className="card-nav-cta-button"
                style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
            >
                Get Started
            </button>
            </div>

            <div className="card-nav-content" aria-hidden={!isExpanded}>
            {(items || []).slice(0, 3).map((item, idx) => (
                <div
                key={`${item.label}-${idx}`}
                className="nav-card"
                ref={setCardRef(idx)}
                style={{ backgroundColor: item.bgColor, color: item.textColor }}
                >
                <div className="nav-card-label">{item.label}</div>
                <div className="nav-card-links">
                    {item.links?.map((lnk, i) => (
                    <a key={`${lnk.label}-${i}`} className="nav-card-link" href={lnk.href} aria-label={lnk.ariaLabel}>
                        <GoArrowUpRight className="nav-card-link-icon" aria-hidden="true" />
                        {lnk.label}
                    </a>
                    ))}
                </div>
                </div>
            ))}
            </div>
        </nav>
        </div>
    );
};

export default Navbar;
