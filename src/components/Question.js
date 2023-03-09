import React from "react"

export default function Question(props){
    
    const styles = {
        backgroundColor: "#D6DBF5",
        border: "none"
    }

    return(
        <div className="question-container">
            <h4 className="question-text">
                {props.questionText}
            </h4>
            <div className="answer-container">
                <button className="answer-btn">Adios</button>
                <button className="answer-btn" style={styles}>Amigos</button>
                <button className="answer-btn">Something longer</button>
                <button className="answer-btn">Adios</button>
            </div>
            <hr/>
        </div>
    )
}