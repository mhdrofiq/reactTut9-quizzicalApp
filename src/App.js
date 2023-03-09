import React from "react"
import Question from "./components/Question"

export default function App(){

  const [startQuiz, setStartQuiz] = React.useState(false)

  function showQuiz(){
    setStartQuiz(true)
  }
  
  return(
    <main>
      {
        startQuiz 
        ?
        <div className="quiz-container">
          <Question/>
          <Question/>
          <Question/>
          <Question/>
          <Question/>
          <div className="check-answer-container">
            {/* <h4 className="result">
              You scored 3/5 correct answers
            </h4> */}
            <button className="submit-btn">
              Check answers
            </button>
          </div>
        </div>
        :
        <div className="welcome-container">
          <h1 className="title">Quizzical</h1>
          <p className="instructions">Answer some trivia questions!</p>
          <button className="btn-start" onClick={showQuiz}>Start Quiz</button>
        </div>
      }
    </main>
  )
}