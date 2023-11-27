import React from 'react'
import './End.css'
interface End {
  score : number;
  maximumPoints : number;
  setGame: (game: string) => void;
  setOptionChoosen: (OptionChoosen:null) => void;
  setScore:(score:number)=>void;
  setIndex:(index:number)=>void;
}
const End:React.FC<End> = ({score, maximumPoints,setGame,setScore,setIndex,setOptionChoosen}) => {
  const percentage = (score / maximumPoints) * 100;
  const handleEnd =() =>{
    setGame("start")
    setScore(0)
    setIndex(0)
    setOptionChoosen(null)
  }
  let emoji;
 

  if (percentage === 100) emoji = "Simply You're the GOAT(Greatest of all time).😍🥰😍";
  if (percentage >= 90 && percentage < 100) emoji = "Outstanding!😍😍";
  if (percentage >= 80 && percentage < 90) emoji = "Amazzzing.😺😍";
  if (percentage >= 70 && percentage < 80) emoji = "Brilliant.😚";
  if (percentage >= 50 && percentage < 70) emoji = "That's much better..🥰";
  if (percentage >= 30 && percentage < 50) emoji = "Decent try!!🙃";
  if (percentage >= 0 && percentage < 30) emoji = "Kinda average!🤨";
  if (percentage === 0) emoji = "You are too embarrassing, I expected more🤦‍♂️";
  return (
    <div>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{score}</strong> out of{" "}
        {maximumPoints} ({Math.ceil(percentage)}%)
      </p>

      <button className='btn btn-ui' onClick={handleEnd}>Restart quiz</button>
    </div>
  )
}

export default End
