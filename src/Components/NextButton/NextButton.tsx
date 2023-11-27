import React from 'react'
interface btn {
    handleNext: React.MouseEventHandler;
    hasAnswered: boolean;
    numberOfQuestions: number;
    index: number;
    setGame: (game : string) => void;
}
const NextButton:React.FC<btn> = ({handleNext,hasAnswered,numberOfQuestions,index,setGame}) => {
 if(index < numberOfQuestions-1) {
    return (
        
            hasAnswered && <button className="btn btn-ui" onClick={handleNext}>Next</button>
          
      )
 } 
 if(index === numberOfQuestions-1) {
   return (
    hasAnswered && <button className='btn btn-ui' onClick={() => setGame("end")}>Finish</button>
   )
 }
}

export default NextButton
