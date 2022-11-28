import { useState } from "react"
import QuestionBox from "./containers/QuestionBox"
import Timer from "./containers/Timer"

function Quiz({ questions }) {
  const [selected,setSelected]=useState([])
  const [index, setIndex] = useState(0)
  return (
    <div className="Quiz container">
      <Timer timeAmount={5} onFinish={() => { console.log("time was finished") }} />
      <QuestionBox {...questions[index]}/>
      <button className="submit-btn" onClick={() => { setIndex(index + 1) }}> next </button>
    </div>
  )
}

export default Quiz