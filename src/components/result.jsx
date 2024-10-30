import React, { useState } from 'react'

function Result(props) {
    
    const [seeAnswers,setSeeAnswers]=useState(false);
    const result=props.result;
    const quiz=result.quiz;
    const answers=result.answers;
    let score=0;

    answers.forEach(ans => {
        if(ans.answer===quiz[ans.question].answer){
            score+=1;
        }
    });

    const getAnswers = () =>{
        setSeeAnswers(true);
    }
    const resetQuiz =()=>{
        props.resetQuiz()
    }
    return (
        <div className='result-container'>
            {
                seeAnswers?
                    <div>
                        <button onClick={resetQuiz} className='btn btn-primary'>Play Again</button>
                        {
                            answers.map(ans=>{
                                return (
                                    <div className='question'>
                                        <div><h4>Question : {quiz[ans.question].question}</h4></div>
                                        <div className='answer'>Answer : {quiz[ans.question].answer}</div>
                                        <div className={`${quiz[ans.question].answer===ans.answer?'correct':'incorrect'}`}>Your answer : {ans.answer}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                :
                    <>
                        <h2 className='title'>You've completed the quiz!</h2>
                        <p className='description'>Here's how you did:</p>
                        <div className='progress-circle'>
                            <p>Score:</p>
                            <span>{Math.round((score*100)/quiz.length)}%</span>
                        </div>
                        <div className='result-btns'>
                            <button onClick={resetQuiz} className='btn btn-primary'>Play Again</button>
                            <button onClick={getAnswers} className='btn btn-secondary'>all answers</button>
                        </div>
                    </>
            }
        </div>
    )
}

export default Result