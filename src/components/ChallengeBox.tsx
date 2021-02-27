import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContexts";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
    const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

    return (
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? ( 
                <div className={styles.challengeBoxActive}>
                    <header>Ganhe {activeChallenge.amount} de xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="body"/>
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button type="button" className={styles.challengeFailedButton} onClick={resetChallenge}>
                            Falhei
                        </button>
                        <button type="button" className={styles.challengeSucceededButton}>
                            Completei
                        </button>
                    </footer>
                </div>
            ):(
                <div className={styles.challengeBoxNotActive}>
                    <strong>Finalize um ciclo para receber um novo desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="level up"/>
                        Avanve de level completando os desafios.
                    </p>
                </div>
            )}
        </div>
    )
}