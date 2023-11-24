import React from "react";
import './QuizPlay.css'
interface question {
  correctOption: number;
  options: string[];
  points: number;
  question: string;
}
interface qns {
  questions: question
}
const QuizPlay: React.FC<qns> = ({ questions }) => {
 
  return (
    <div>
      <h4>{questions.question}</h4>
      <div className="options">
        {
          questions.options.map((option) =>{
            return(
              <button className="btn btn-option" key={option}>{option}</button>
            )
          })
        }
      </div>
    </div>
  );
};

export default QuizPlay;
