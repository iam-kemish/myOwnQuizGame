import React,{useEffect,useState} from 'react'
import './Timer.css'
interface timerr {
    setGame: (game: string) => void;
}
const Timer:React.FC<timerr> = ({setGame}) => {
 const[tick,setTick] = useState(300);
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
     {tick} seconds left.
    </div>
   </>
  )
}

export default Timer
