import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Mainn from "./Components/Main/Mainn";
import qstns from "./Components/questionDatas";
import StartScreen from "./Components/StartScreen/StartScreen";
import QuizPlay from "./Components/QuizPlay/QuizPlay";
import End from "./Components/End/End";
import EndTable from "./Components/EndTable/EndTable";
interface Question {
  correctOption: number;
  options: string[];
  points: number;
  question: string;
 
}
// console.log(qstns,"qq")
function App() {
  const [game, setGame] = useState("start");
  const [index, setIndex] = useState(0);
  const [optionChoosen, setOptionChoosen] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [nextQuestion, setNextQuestion] = useState(0);
  const[correctAnswers,setCorrectAnswers] = useState<Question[]>([])
  const [show, setShow] = useState(false);

  console.log(nextQuestion);
  function handleNext() {
    setNextQuestion((nextQuestion) => nextQuestion + 1);
    setIndex((index) => index + 1);
    setOptionChoosen(null);
  }
  const numberOfQuestions = qstns.length;
  const maximumPoints = qstns.reduce((acc, curr) => acc + curr.points, 0);
 
  function handleShow() {
    setShow(true)
    setGame("endpage")
  }
  return (
    <>
      <div className="app">
        <Header />
        <Mainn>
          {game === "start" && <StartScreen setGame={setGame} />}
          {game === "quiz" && (
            <QuizPlay
              questions={qstns[index]}
              optionChoosen={optionChoosen}
              setOptionChoosen={setOptionChoosen}
              score={score}
              setScore={setScore}
              handleNext={handleNext}
              numberOfQuestions={numberOfQuestions}
              index={index}
              maximumPoints={maximumPoints}
              setGame={setGame}
              correctAnswers={correctAnswers}
              setCorrectAnswers={setCorrectAnswers}
            />
          )}
          {game === "end" && (
            <End
              score={score}
              maximumPoints={maximumPoints}
              setGame={setGame}
              setOptionChoosen={setOptionChoosen}
              setScore={setScore}
              setIndex={setIndex}
              correctAnswers={correctAnswers}
              show={show}
              setShow ={setShow}
              handleShow={ handleShow}
              
            />
          )}
          {
            game === "endpage" && <EndTable  correctAnswers={correctAnswers} setGame={setGame} setScore={setScore} setIndex={setIndex} setOptionChoosen={setOptionChoosen} show={show} setCorrectAnswers={setCorrectAnswers}/>
          }
          <></>

          <div></div>
        </Mainn>
      </div>
    </>
  );
}

export default App;
