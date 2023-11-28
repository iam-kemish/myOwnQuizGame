import React,{useState} from 'react'
import './NextButton.css'
interface btn {
    handleNext: React.MouseEventHandler;
    hasAnswered: boolean;
    numberOfQuestions: number;
    index: number;
    setGame: (game : string) => void;
}
const NextButton:React.FC<btn> = ({handleNext,hasAnswered,numberOfQuestions,index,setGame}) => {
  const[btnD,setBtnD] = useState(false);

const handleEndBtn=()=>{
  setBtnD(true)
  setTimeout(() => {
    setGame("end")
  }, 1700);
}
 if(index < numberOfQuestions-1) {
    return (
        
            hasAnswered && <button className="btn btn-ui" onClick={handleNext}>Next</button>
          
      )
 } 
 if(index === numberOfQuestions-1) {
   return (
    hasAnswered && <button className={` ${btnD ? "btn1" : "btn btn-ui"}`} onClick={handleEndBtn}>{btnD? "Please hold...": "Finish"}</button>
   )
 }
}
// () => setGame("end")
export default NextButton
