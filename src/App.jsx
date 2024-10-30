import React, { useState} from 'react'
import Quiz from './components/quiz'
import Result from './components/result'
import JsQuestions from './questions'

const App = () => {
  const quiz = JsQuestions.questions;
  const quizLength=quiz.length
  const [answers,setAnswers]=useState([]);
  const [question,setQuestion]=useState(quiz[0]);
  const [questionIndex,setQuestionIndex]=useState(0);
  const [ButtonText,setButtonText]=useState('Next');
  const [progress,setprogress]=useState(100/quizLength);
  const [isQuizComplete,setIsQuizComplete]=useState(false);
  const [result,setResult]=useState(null)

  const addAnswer = (answer) => {
    if(questionIndex >= quiz.length-1){
      setButtonText('Done')
    }
    setAnswers(prevAnswers=>{
      let filtredAnswers;
      if(prevAnswers.some(ans=>ans.question===answer.question)){
        filtredAnswers=prevAnswers.filter(ans=>ans.question!==answer.question)    
        return [...filtredAnswers,answer];
      }
      else{
        return [...prevAnswers,answer];
      }
    })
  }

  const endQuiz = () => {
    const result = {
      quiz:quiz,
      answers:answers,
    }
    setResult(result)
    setIsQuizComplete(true)
  }

  const getNextQuestion = () => {
    if(questionIndex >= quiz.length-1){
        endQuiz()
        return
    }
    setprogress(prevProgress => prevProgress + (100/quizLength))
    setQuestionIndex(prevIndex=>{
      const question=quiz[prevIndex+1];
      setQuestion(question)
        return prevIndex+1
    })
  }

  const resetQuiz = () => {
    setAnswers([]);
    setQuestion(quiz[0]);
    setQuestionIndex(0);
    setButtonText('Next')
    setprogress(100/quizLength)
    setIsQuizComplete(false)
    setResult(null)
  }

  return (
    <>
      {
        isQuizComplete?
        <Result result={result} resetQuiz={resetQuiz}/>:
        <Quiz quizLength={quizLength} progress={progress} index={questionIndex} question={question} addAnswer={addAnswer} getNextQuestion={getNextQuestion} buttonText={ButtonText}/>
      }
    </>
  )

}

export default App