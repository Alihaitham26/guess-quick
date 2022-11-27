import { useState } from 'react'
import './styles/App.scss'
import Quiz from './pages/Quiz/Quiz'
import Start from './pages/Start/Start'

function App() {
  const [isPlaying,setIsPlaying]=useState(false)
  return (
    <div className="App" >
      {isPlaying? <Quiz /> : <Start onStart={()=>setIsPlaying(true)} />}
    </div>
  )
}

export default App
