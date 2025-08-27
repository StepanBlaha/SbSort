import styles from './Alert.module.css';
import { useTranslation } from 'react-i18next';
interface AlertProps {
    type?: "success"|"error",
    onDismiss: ()=>void
}

const Alert= ({type="success", onDismiss}: AlertProps) => {
    const {t} = useTranslation();
    return (
        <>
        {type === "success" ? (
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.leftSection}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.iconSuccess} viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className={styles.textSection}>
                            <span className={styles.title}>{t("alert.success.title")}</span>
                            <p className={styles.message}>{t("alert.success.text")}.</p>
                        </div>
                    </div>
                    <button className={styles.closeButton} onClick={onDismiss}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.iconClose} viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        ): (
            <div className={styles.errorContainer}>
                <div className={styles.errorContent}>
                    <div className={styles.errorLeft}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.errorIcon} viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className={styles.errorTextBlock}>
                            <span className={styles.errorTitle}>{t("alert.error.title")}</span>
                            <p className={styles.errorMessage}>{t("alert.error.text")}</p>
                        </div>
                    </div>
                    <button className={styles.errorCloseButton} onClick={onDismiss}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.errorCloseIcon} viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        )}
        </>
        
    );
};

export default Alert;
