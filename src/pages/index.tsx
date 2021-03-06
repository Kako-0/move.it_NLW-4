import Head from "next/head";
import { ChallengeBox } from "../components/ChallengeBox";
import { CompletedChallenger } from "../components/CompleteChallenger";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={ styles.container}>      
      <Head>
        <title>Inicio | Move.it</title>
      </Head>
      <ExperienceBar /> 

      <section>
        <div>
          <Profile />
          <CompletedChallenger />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>  
  )
}
