import React from "react";
import "./End.css";


interface Question {
  correctOption: number;
  options: string[];
  points: number;
  question: string;
}
interface End {
  show: boolean;
  setShow: (show: boolean) => void;
  score: number;
  maximumPoints: number;
  setGame: (game: string) => void;
  setOptionChoosen: (OptionChoosen: null) => void;
  setScore: (score: number) => void;
  setIndex: (index: number) => void;
  correctAnswers: Question[];
  handleShow: React.MouseEventHandler;
}
const End: React.FC<End> = ({
  score,
  maximumPoints,
  handleShow
}) => {
  
  const percentage = (score / maximumPoints) * 100;
 


  let emoji;
  if (percentage === 100)
    emoji = "Simply You're the GOAT(Greatest of all time).😍🥰😍";
  if (percentage >= 90 && percentage < 100) emoji = "Outstanding!😍😍";
  if (percentage >= 80 && percentage < 90) emoji = "Amazzzing.😺😍";
  if (percentage >= 70 && percentage < 80) emoji = "Brilliant.😚";
  if (percentage >= 50 && percentage < 70) emoji = "That's much better..🥰";
  if (percentage >= 30 && percentage < 50) emoji = "Decent try!!🙃";
  if (percentage >= 0 && percentage < 30) emoji = "Kinda average!🤨";
  if (percentage === 0) emoji = "You are too embarrassing, I expected more🤦‍♂️";

  
  return (
  <>
    <div className="end">
      <p className="result">
        <span>{emoji}</span> You scored <strong>{score}</strong> out of{" "}
        {maximumPoints} ({Math.ceil(percentage)}%)
      </p>
      <button className="btn btn-ui" onClick={handleShow}>
        View Correctly answered questions.
      </button>
     
    </div>

  </>
    
  );
};

export default End;
