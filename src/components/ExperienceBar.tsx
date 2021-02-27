import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContexts";
import styles from "../styles/components/ExperienceBar.module.css";

export function ExperienceBar() {
    const { currenceXP, xpToNextLevel } = useContext(ChallengesContext);
    
    const percentToNextLevel = Math.round(currenceXP * 100) / xpToNextLevel
    
    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />
                <span className={styles.currentXp} style={{ left:`${percentToNextLevel}%` }}> {currenceXP} xp</span>
            </div>
            <span>{xpToNextLevel} xp</span>
        </header>
    );
}