import React from "react"
import classes from './ActiveQuiz.css'
import AnswersList from './AnswersList/AnswersList'

function ActiveQuiz (props) {
  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.Question}>
        <span>
          <strong>{props.answerNumber}&nbsp;</strong>
          {props.question}
        </span>
        <small>{props.answerNumber} из {props.quizLength}</small>
      </p>
      <AnswersList
      state={props.state}
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
      />
    </div>
  )
}

export default ActiveQuiz
