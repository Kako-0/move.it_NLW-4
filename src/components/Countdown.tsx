import { useEffect, useState } from "react";
import styles from "../styles/components/Countdown.module.css";

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const [isActive, setIsActive] = useState(false);
    const [time, setTime] = useState(0.05 * 60);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setIsActive(true);
    }
    
    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(25*60);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000);
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
        }
    }, [isActive, time]);

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button disabled className={styles.buttonCountdown}>
                    Ciclo encerrado
                    <img src="icons/check_circle.svg" alt="check" style={{ marginLeft : "1rem" }}/>
                </button>
            ) : (
            <>
                {isActive ? (
                    <button type="button" className={`${styles.buttonCountdown} ${styles.buttonCountdownActive}`} onClick={resetCountdown}>
                        Abandonar Ciclo
                        <img src="icons/close.svg" alt="close" />
                    </button>
                ) : (
                    <button type="button" className={styles.buttonCountdown} onClick={startCountdown}>
                        Iniciar Ciclo
                    </button>
                )   }
            </>
            )}
            
            
        </div>
    );
}