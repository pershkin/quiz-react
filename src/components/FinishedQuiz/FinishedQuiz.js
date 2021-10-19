import React from 'react'
import classes from './FinishedQuiz.css'

function FinishedQuiz(props) {
  const rightAnswers = Object.values(props.results).filter(res => res !== 'error').length
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {props.quiz.map((quizItem, index) => {
          const cls = [
            'fa',
            props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
            classes[props.results[quizItem.id]]
          ]

          return (
            <li key={index}>
              <strong>{index + 1}&nbsp;</strong>
              {quizItem.question}
              <i className={cls.join(' ')}/>
            </li>
          )
        })}

      </ul>
      <p>Правильно {rightAnswers} из {props.quiz.length}</p>

      <div>
        <button onClick={props.onRetry}>Ответить еще раз</button>
      </div>
    </div>
  )
}

export default FinishedQuiz