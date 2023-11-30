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

  setCorrectAnswers: React.Dispatch<React.SetStateAction<Question[]>>;
}
const End: React.FC<End> = ({
  score,
  maximumPoints,

  correctAnswers,
  setGame,
  setScore,
  setIndex,
  setOptionChoosen,
  setCorrectAnswers,
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

  const handleEnd = () => {
    setGame("start");
    setScore(0);
    setIndex(0);
    setOptionChoosen(null);
    setCorrectAnswers([]);
  };
 
  return (
    <>
      <div className="end">
        <p className="result">
          <span>{emoji}</span> You scored <strong>{score}</strong> out of{" "}
          {maximumPoints} ({Math.ceil(percentage)}%)
        </p>
      </div>
      <div className="endpage">
        <table>
          <thead>
            <tr>
              <th colSpan={2}>Questions</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {correctAnswers.map((correct) => {
              return (
                <tr key={correct.question}>
                  <td colSpan={2}>{correct.question}</td>
                
                
                  <td>{correct.points}</td>
                 
                </tr>
              );
            })}
             
            <p style={{marginTop: "2rem"}}>Total questions: <strong>{correctAnswers.length}</strong></p>
          </tbody>
        </table>
        <button className="btn btn-ui" onClick={handleEnd} style={{marginTop: "6rem"}}>
          Restart quiz
        </button>
      </div>
    </>
  );
};

export default End;
