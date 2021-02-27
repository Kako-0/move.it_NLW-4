import { createContext, ReactNode, useState } from "react";

interface ChallengeContextData {
    level: number;
    currenceXP: number; 
    challengeCompleted: number; 
    levelUp: () => void;
    startNewChallenge: () => void;
}
interface ChallengerProviderProps {
    children : ReactNode;
}

export const ChallengesContext = createContext({} as ChallengeContextData);

export function ChallengesProvider({ children }: ChallengerProviderProps) {
    const [level, setLevel] = useState(1);
    const [currenceXP, setCurrenceXP] = useState(0);
    const [challengeCompleted, setChallengeCompleted] = useState(0);
    
    function levelUp() {
        setLevel(level + 1);
    }
    
    function startNewChallenge() {
        console.log('New challenge')    
    }

    return(
        <ChallengesContext.Provider 
            value={{ 
                level, 
                currenceXP, 
                challengeCompleted, 
                levelUp,
                startNewChallenge
            }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}