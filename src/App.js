import React from "react"
import Question from "./components/Question"
import {nanoid} from "nanoid"

export default function App(){

  const [startQuiz, setStartQuiz] = React.useState(false)
  const [questions, setQuestions] = React.useState([])
  const [doneQuiz, setDoneQuiz] = React.useState(false)
  const [tally, setTally] = React.useState(0)

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then(res => res.json())
      .then(data => setQuestions(data.results))
  },[])

  console.log(questions)

  function showQuiz(){
    setStartQuiz(true)
  }

  const questionElements = questions.map(q => 
    <Question 
      key = {nanoid()}
      questionText = {q.question}
      wrongAns = {q.incorrect_answers}
      rightAns = {q.correct_answer}
    />
    
  )
  
  return(
    <main>
      {
        startQuiz 
        ?
        <div className="quiz-container">
          {questionElements}
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