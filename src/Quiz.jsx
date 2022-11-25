import QuestionBox from "./containers/QuestionBox"
import Timer from "./containers/Timer"

function SubmitBtn(){
  return <button className="submit-btn">next</button>
}

function Quiz() {
  return (
    <div className="Quiz container">
      <Timer timeAmount={5} onFinish={() => { console.log("time was finished") }} />
      <QuestionBox answers={["3", "5", "6", "10"]} question={"right traingle(ABC), right in A, AB= 3cm, AC= 4cm, AB= ..cm"} />
      <SubmitBtn/>
    </div>
  )
}

export default Quiz