import React, {useState} from "react"
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz"
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz"
import classes from './Quiz.css'

function Quiz () {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [answerState, setAnswerState] = useState(null)
  const [isFinished, setIsFinished] = useState(false)
  const [results, setResults] = useState({})
  const [quiz, setQuiz] = useState([
    {
      question: 'Lorem ipsum dolor sit amet consectetur adipisicing.?',
      rigthAnswerId: 3,
      id: 1,
      answers: [
        {text: 'Lorem ipsum dolor sit amet. 1', id: 1},
        {text: 'Lorem ipsum dolor sit amet. 2', id: 2},
        {text: 'Lorem ipsum dolor sit amet. 3', id: 3},
        {text: 'Lorem ipsum dolor sit amet. 4', id: 4}
        
      ]
    },
    {
      question: 'Lorem ipsum?',
      rigthAnswerId: 2,
      id: 2,
      answers: [
        {text: '1703', id: 1},
        {text: '1435', id: 2},
        {text: '1705', id: 3},
        {text: '1668', id: 4}
        
      ]
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur adipisicing.?',
      rigthAnswerId: 3,
      id: 3,
      answers: [
        {text: 'Lorem ipsum dolor sit amet. 1', id: 1},
        {text: 'Lorem ipsum dolor sit amet. 2', id: 2},
        {text: 'Lorem ipsum dolor sit amet. 3', id: 3},
        {text: 'Lorem ipsum dolor sit amet. 4', id: 4}
        
      ]
    },
    {
      question: 'Lorem ipsum?',
      rigthAnswerId: 2,
      id: 4,
      answers: [
        {text: '1703', id: 1},
        {text: '1435', id: 2},
        {text: '1705', id: 3},
        {text: '1668', id: 4}
        
      ]
    }
  ])

  const onAnswerClickHandler = (answerId) => {
    if (answerState) {
      const key = Object.keys(answerState)[0]
      if (answerState[key] === 'success') {
        return
      }
    }
    const question = quiz[activeQuestion]
    const result  = results
    if (question.rigthAnswerId === answerId) {
      if (!results[question.id]){
        setResults( prev => (
          {...prev, [question.id]:'success'}
        ))
      }

      setAnswerState({[answerId]:'success'})

      const timeout = window.setTimeout(() => {
        if(isQuizFinished()) {
          setIsFinished(true)
        }else {
          setActiveQuestion((prev) => prev + 1)
          setAnswerState(null)
        }
        window.clearTimeout(timeout)
      }, 1000)
    
    }

    else {
      setResults( prev => (
        {...prev, [question.id]:'error'}
      ))
      setAnswerState({[answerId]: 'error'})
    }

  }

  function isQuizFinished() {
    return activeQuestion + 1 === quiz.length
  }

  const retryHandler = () => {
    setActiveQuestion(0)
    setAnswerState(null)
    setIsFinished(false)
    setResults({})
  }

  return (
    <div className={classes.Quiz}>
      
      <div className={classes.QuizWrapper}>
      <h1>Ответьте на все вопросы</h1>

      {
        isFinished ? 
        <FinishedQuiz
          results={results}
          quiz = {quiz}
          onRetry={retryHandler}
        /> :
        <ActiveQuiz
        answers={quiz[activeQuestion].answers}
        question={quiz[activeQuestion].question}
        onAnswerClick={onAnswerClickHandler}
        quizLength={quiz.length}
        answerNumber={activeQuestion + 1}
        state={answerState}
      /> 
      }
      
      </div>
    </div>
  )
}

export default Quiz