import { useRef, useState } from "react";

function Quiz (props) {
    // const optionRef=useRef(null);

    const question=props.question
    const questionAnswer=question.answer
    const questionIndex=props.index
    const [selectedOption,setSelectedOption]=useState(null)

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

    )
}

export default Quiz