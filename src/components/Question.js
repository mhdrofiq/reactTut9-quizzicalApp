import React from "react"
import Answer from "./Answer"

export default function Question(props){

    const [correctAnswer, setCorrectAnswer] = React.useState(props.rightAns)
    const [incorrectAnswer, setIncorrectAnswer] = React.useState(props.wrongAns)
    const [allAnswers, setAllAnswer] = React.useState(initializeAnswers())

    function initializeAnswers(){
        const answerArray = []
        //push incorrect answers to all answers
        for(let i=0; i<3; i++){
            answerArray.push(
                {
                    text: incorrectAnswer[i],
                    isChosen: false,
                    isCorrect: false
                }
            )
        }
        //push correct answer to all answers
        answerArray.push(
            {
                text: correctAnswer,
                isChosen: false,
                isCorrect: true
            }
        )
        //shuffle all answers
        return shuffle(answerArray)
    }

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    //todo: make handle click function
        //takes id from answer component
        //set the answer isChosen to true
        //re render answers

    const answerButtons = allAnswers.map(ans => 
        <Answer
            text = {ans.text}
            isChosen = {ans.isChosen}
            isCorrect = {ans.isCorrect}
            //todo: send id of answer
        />
    )

    //console.log(incorrectAnswer)
    //console.log(correctAnswer)
    //console.log(allAnswer)

    return(
        <div className="question-container">
            <h4 className="question-text">
                {props.questionText}
            </h4>
            <div className="answer-container">
                {answerButtons}
            </div>
            <hr/>
        </div>
    )
}