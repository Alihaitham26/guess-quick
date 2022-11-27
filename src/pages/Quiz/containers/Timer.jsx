import { useEffect, useRef, useState } from "react"

function Timer({timeAmount,onFinish}) {
  const [time,setTime]=useState(timeAmount)
  const intervalId=useRef(null)
  useEffect(()=>{
    intervalId.current = setInterval(()=>{ setTime(t => t-1 ) },1000)
  },[])
  useEffect(()=>{
    if(time <= 0){
      clearInterval(intervalId.current)
      onFinish()
    }
  },[time])

  return (
    <div className="Timer">
      {time}
    </div>
  )
}

export default Timer