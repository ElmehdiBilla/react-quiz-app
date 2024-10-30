import React , {useState} from "react";

function Quiz (props) {

    const question=props.question
    const questionAnswer=question.answer
    const questionIndex=props.index
    const [selectedOption,setSelectedOption]=useState(null)
    const progress=props.progress+'%'

    const selectAnswer = (index) =>{
        setSelectedOption(index)
        const answer={
            question:questionIndex,
            answer:question.options[index],
            correct:question.options[index]===questionAnswer,
        }
        props.addAnswer(answer)
    }

    return (

        <div className="quiz-container">
            <div className='progress-container'><div className='progress' style={{width:progress}}></div></div>
            <div className="question-number">Question: {`${questionIndex+1}/${props.quizLength}`}</div>
            <div className="quiz-card">
                <h3>{question.question}</h3>
                <ul>
                    {
                        question.options.map((option,index) => {
                            return (
                                <li onClick={()=>selectAnswer(index)} className={`option ${selectedOption===index?"selected-option":""}`} key={index}>{option}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="btn-container">
                <button onClick={props.getNextQuestion} className={`btn btn-primary ${selectedOption === null ?'hidden':''}`}>{props.buttonText}</button>
            </div>
        </div>

    )
}

export default Quiz