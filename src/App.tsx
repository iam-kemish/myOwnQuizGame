
import { useEffect,useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Mainn from './Components/Main/Mainn';
import Loader from './Components/Loader/Loader';
import Errorr from './Components/Error/Errorr';
import StartScreen from './Components/StartScreen/StartScreen';
import QuizPlay from './Components/QuizPlay/QuizPlay';
function App() {
  const [isLoad, setisLoad] = useState(false);
  const[questions,setQuestions] = useState([])
  const[game,setGame] = useState("start")
  const[index, setIndex] = useState(0)
  
  useEffect(() => {
    async function fetchQuestions() {
      try {
        setisLoad(true);
        const res = await fetch(
          `http://localhost:3500/questions`
        );
        if (!res.ok)
          throw new Error("Something went wrong while fetching the data");

        const data = await res.json();
        setQuestions(data)
      //  console.log(data)
        setisLoad(false);
      } catch (error) {
        console.log(error);
      }
   
    }
    fetchQuestions();
  }, []);
  // console.log(questions,"qnnnn")
  return (
    <>
   <div className="app">
   <Header/>
  <Mainn>

  {game === "Loading" && <Loader/>}
  {game === "err" && <Errorr/>}
  {game === "start" && <StartScreen  game={game} setGame={setGame}/> }
  {game === "quiz" && <QuizPlay questions={questions[index]} /> }
  </Mainn>
   </div>
    </>
  )
}

export default App
