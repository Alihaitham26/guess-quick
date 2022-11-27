import { useState } from 'react'
import './App.scss'
import Quiz from './Quiz'
import Start from './Start'

function App() {
  const [isPlaying,setIsPlaying]=useState(false)
  return (
    <div className="App" >
      {isPlaying? <Quiz /> : <Start onStart={()=>setIsPlaying(true)} />}
    </div>
  )
}

export default App
