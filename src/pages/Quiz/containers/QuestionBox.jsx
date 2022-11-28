import { useState } from "react"

function QuestionBox({ question, answers }) {
  return (
    <div className="QuestionBox">
      <p className="Question">Q1: {question}</p>
      <Answers answers={answers} />
    </div>
  )
}

function Answers({ answers }) {
  const [selected,setSelected]=useState("")

  return (
    <ul className="Answers">
      {answers.map(answer=>(
          <Answer 
            onClick={_=>setSelected(answer)} 
            className={selected===answer?"selected":""} 
            answer={answer} key={answer}
          />
        ))}
    </ul>
  )
}

function Answer({ answer, onClick,className}) {
  return (
    <li className={"Answer "+className} onClick={onClick}>
      {answer}
    </li>
  )
}


export default QuestionBox