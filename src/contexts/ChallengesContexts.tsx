import { createContext, ReactNode, useState } from "react";

import challenges from "../../challenges.json";

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}
interface ChallengeContextData {
    level: number;
    currenceXP: number; 
    challengeCompleted: number; 
    levelUp: () => void;
    startNewChallenge: () => void;
    activeChallenge: Challenge;
    resetChallenge: () => void;
    xpToNextLevel: number;
}
interface ChallengerProviderProps {
    children : ReactNode;
}

export const ChallengesContext = createContext({} as ChallengeContextData);

export function ChallengesProvider({ children }: ChallengerProviderProps) {
    const [level, setLevel] = useState(1);
    const [currenceXP, setCurrenceXP] = useState(0);
    const [challengeCompleted, setChallengeCompleted] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null);

    const xpToNextLevel = Math.pow((level + 1) *4 ,2)
    
    function levelUp() {
        setLevel(level + 1);
    }
    
    function startNewChallenge() {
        const randomChallengeindex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeindex];  

        setActiveChallenge(challenge);
    }

    function resetChallenge() {
        setActiveChallenge(null);
    }

    return(
        <ChallengesContext.Provider 
            value={{ 
                level, 
                currenceXP, 
                challengeCompleted, 
                levelUp,
                startNewChallenge,
                activeChallenge,
                resetChallenge,
                xpToNextLevel
            }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}