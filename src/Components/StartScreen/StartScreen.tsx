import React from 'react'
interface Quiz {
   
    setGame: (game : string) => void;
}
const StartScreen:React.FC<Quiz> = ({ setGame}) => {
  return (
    <div>
        <div className="start">
      <h2>Welcome to My own quiz</h2>
      <h3>lets see how much would you score😉</h3>
      <button
        className="btn btn-ui" onClick={() => setGame("quiz")} >
        Let's start
      </button>
    </div>
    </div>
  )
}

export default StartScreen
