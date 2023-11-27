import React from 'react'
import './Progress.css'
 interface progres {
    index: number;
    numberOfQuestions: number;
    score: number;
    maximumPoints: number;
 }
const Progress:React.FC<progres> = ({numberOfQuestions, index, score,maximumPoints}) => {
  return (
    <div>
      <progress max={numberOfQuestions} value={index + Number(score !== null)} style={{width: "100%", marginBottom: "1rem"}} />
     <header className="progress">
      <p>
        Question <strong>{index + 1}</strong> / {numberOfQuestions}
      </p>


      <p>
        <strong>{score}</strong> / {maximumPoints}
      </p>
    </header>
    </div>
  )
}

export default Progress
