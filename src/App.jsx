import React, { useState } from 'react'
import Quiz from './components/quiz'
import JsQuestions from './questions'

const App = () => {
  const [answers,setAnswers]=useState([]);
  const quiz = JsQuestions.questions;

  const addAnswer = (answer) => {
    setAnswers([...answers,answer]);
    
    let filtredAnswers;
    if(answers.some(ans=>ans.question===answer.question)){
      filtredAnswers=answers.filter(ans=>ans.question!==answer.question)
      if(filtredAnswers){ 
        setAnswers([...filtredAnswers,answer]);
      }
    }
    else{
      setAnswers([...answers,answer]);
    }
  }

  return (

    quiz.map(
      (question,index) => {
        return (
          <Quiz key={index} index={index} question={question} addAnswer={addAnswer}/>
        )
      }
    )
  )

}

export default App