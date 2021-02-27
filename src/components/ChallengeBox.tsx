import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
    const hasActiveChallenge = true;

    return (
        <div className={styles.challengeBoxContainer}>
            {hasActiveChallenge ? ( 
                <div className={styles.challengeBoxActive}>
                    <header>Ganhe 400 de xp</header>
                    <main>
                        <img src="icons/body.svg" alt="body"/>
                        <strong>Novo Desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minutos.</p>
                    </main>
                    <footer>
                        <button type="button" className={styles.challengeFailedButton}>
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