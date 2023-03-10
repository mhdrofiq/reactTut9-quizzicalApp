import React from "react"

export default function Answer(props){
    const styles = {
        backgroundColor: props.isChosen ? "#D6DBF5" : "transparent",
        border: props.isChosen ? "none" : "",
    }

    return(
        <button 
            className="answer-btn" 
            style={styles}
        >
            {props.text}
        </button>
    )
}