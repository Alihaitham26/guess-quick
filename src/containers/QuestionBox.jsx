import { useState } from "react"

function QuestionBox({ question, answers }) {
  return (
    <div className="QuestionBox">
      <Question question={question} />
      <Answers answers={answers} />
    </div>
  )
}

function Question({ question }) {
  return (
    <div className="Question">
      <p>Q1: {question}</p>
    </div>
  )
}

function Answers({ answers }) {
  const [selected,setSelected]=useState("")
  return (
    <ul className="Answers">
      {answers.map(answer=><Answer onClick={answer=>setSelected(answer)} isSelected={selected===answer} answer={answer} key={answer}/>)}
    </ul>
  )
}

function Answer({ answer, onClick = () => { } ,isSelected}) {
  return (
    <li className={isSelected?"Answer selected":"Answer"} onClick={() => onClick(answer)}>
      {answer}
    </li>
  )
}


export default QuestionBox