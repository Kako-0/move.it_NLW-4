import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
    return (
        <div className={styles.challengeBoxContainer}>
            <div className={styles.challengeBoxNotActive}>
                <strong>Finalize um ciclo para receber um novo desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="level up"/>
                    Avanve de level completando os desafios.
                </p>
            </div>
        </div>
    )
}