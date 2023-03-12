import React from "react"
import Answer from "./Answer"
import {nanoid} from "nanoid"

export default function Question(props){

    const [correctAnswer, setCorrectAnswer] = React.useState(props.rightAns)
    const [incorrectAnswer, setIncorrectAnswer] = React.useState(props.wrongAns)
    const [allAnswers, setAllAnswer] = React.useState([])
    
    React.useState(() => {
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
        setAllAnswer(shuffle(answerArray))
        console.log("initialize answers was called")
    },[allAnswers])

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
    
    const answerButtons = allAnswers.map(ans => 
        <Answer
            text = {ans.text}
            isChosen = {ans.isChosen}
            isCorrect = {ans.isCorrect}
            selectAnswer = {() => selectAnswer(ans.text)}
        />
    )
    
    //update answer array whenever an answer is selected
    function selectAnswer(ansText){
        console.log(ansText)
        setAllAnswer(prevAnswer => prevAnswer.map(ans => 
            //console.log(ans.text)
            // {if(ansText === ans.text){
            //     ans.isChosen = true
            // }else{
            //     return
            // }}
            ans.text === ansText ? {...ans, isChosen: true} : {...ans, isChosen: false}   
        ))
        //countCorrect()
        console.log("select answer was called")
        console.log(allAnswers)
    }

    //update correctlyanswered if selected answer was correct
    function countCorrect(){
        allAnswers.map(ans => {
            if(ans.isChosen === ans.isCorrect){
                console.log("chosen is correct")
                props.verdict()
            }else{
                return
            }
        }
        )
      }

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