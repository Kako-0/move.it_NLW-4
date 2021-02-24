import styles from "../styles/components/ExperienceBar.module.css";

export function ExperienceBar() {
    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: '10%' }} />
                <span className={styles.currentXp} style={{ left:'10%' }}> 60 xp</span>
            </div>
            <span>600 xp</span>
        </header>
    );
}