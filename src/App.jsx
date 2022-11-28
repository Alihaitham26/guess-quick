import { useState } from 'react'
import './styles/App.scss'
import Quiz from './pages/Quiz/Quiz'
import Start from './pages/Start/Start'
import { useEffect } from 'react'

function App() {
  const [data,setData] = useState({})

  useEffect(()=>{
    fetch("./questions.json").then((res)=>res.json()).then((res)=>{setData(res)})
  },[])
  
  const [isPlaying,setIsPlaying]=useState(false)
  return (
    <div className="App" >
      {isPlaying && data !== {} 
        ? <Quiz questions={data} /> 
        : <Start onStart={()=>setIsPlaying(true)} />}
    </div>
  )
}

export default App
