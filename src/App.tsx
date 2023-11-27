import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Mainn from "./Components/Main/Mainn";

import StartScreen from "./Components/StartScreen/StartScreen";
import QuizPlay from "./Components/QuizPlay/QuizPlay";
import End from "./Components/End/End";
interface Question {
  correctOption: number;
  options: string[];
  points: number;
  question: string;
  index: number;
}
function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [game, setGame] = useState("start");
  const [index, setIndex] = useState(0);
  const [optionChoosen, setOptionChoosen] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [nextQuestion, setNextQuestion] = useState(0);
  

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch(` http://localhost:3001/questions`);
        if (!res.ok)
          throw new Error("Something went wrong while fetching the data");

        const data = await res.json();
        setQuestions(data);
   
    
       
      } catch (error) {
        console.log(error);
      }
    }
    fetchQuestions();
  }, []);
  console.log(nextQuestion)
  function handleNext() {
    setNextQuestion((nextQuestion) => nextQuestion + 1);
    setIndex((index) => index + 1);
    setOptionChoosen(null);
  }
  const numberOfQuestions = questions.length;
  const maximumPoints = questions.reduce((acc, curr) => acc + curr.points, 0);
  
  
  return (
    <>
      <div className="app">
        <Header />
        <Mainn>

          {game === "start" && <StartScreen setGame={setGame} />}
          {game === "quiz" && (
            <QuizPlay
              questions={questions[index]}
              optionChoosen={optionChoosen}
              setOptionChoosen={setOptionChoosen}
              score={score}
              setScore={setScore}
              handleNext={handleNext}
              numberOfQuestions={numberOfQuestions}
              index={index}
              maximumPoints={maximumPoints}
              setGame={setGame}
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
            />
          )}
          <></>
       
          <div>
  
</div>
        </Mainn>
      </div>
    </>
  );
}

export default App;
