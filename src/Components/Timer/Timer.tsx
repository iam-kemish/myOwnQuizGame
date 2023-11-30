import React,{useEffect,useState} from 'react'
import './Timer.css'
interface timerr {
    setGame: (game: string) => void;
}
const Timer:React.FC<timerr> = ({setGame}) => {
 const[tick,setTick] = useState(380);

 const minutes = Math.floor(tick / 60);
 const seconds = tick % 60;
 useEffect(() =>{
 const id =  setInterval(() =>{
    if(tick > 0) {
        setTick(tick - 1)
       }else {
      setGame("end")
       }
  },1000)
  return () => clearInterval(id)
 })
  return (
   <>
    <div className='timer'>
     {minutes} : {seconds} minutes left.
    </div>
   </>
  )
}

export default Timer
