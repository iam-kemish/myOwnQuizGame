import React from 'react'
interface Quiz {
    game: string;
    setGame: (game : string) => void;
}
const StartScreen:React.FC<Quiz> = ({game, setGame}) => {
  return (
    <div>
        <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3> questions to test your React mastery</h3>
      <button
        className="btn btn-ui" onClick={() => setGame("quiz")} >
        Let's start
      </button>
    </div>
    </div>
  )
}

export default StartScreen
