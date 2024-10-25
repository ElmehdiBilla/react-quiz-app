const JsQuestions = {
    questions: [
        {
            question: "What does `NaN` stand for in JavaScript?",
            options: ["Not a Number", "Not a Null", "Not an Object", "Not a Name"],
            answer: "Not a Number"
        },
        {
            question: "Which of the following is a way to create a new object in JavaScript?",
            options: ["let obj = {}", "let obj = new Object()", "let obj = Object.create(null)", "All of the above"],
            answer: "All of the above"
        },
        {
            question: "What will be the output of `typeof null`?",
            options: ["'object'", "'null'", "'undefined'", "'boolean'"],
            answer: "'object'"
        },
        {
            question: "Which keyword is used to declare a constant in JavaScript?",
            options: ["var", "const", "let", "define"],
            answer: "const"
        },
        {
            question: "What will the following code log to the console? `console.log(1 + '1');`",
            options: ["2", "11", "'2'", "'11'"],
            answer: "'11'"
        },
        {
            question: "What does the `===` operator do in JavaScript?",
            options: ["Compares values only", "Compares values and types", "Assigns values", "Checks for object equality"],
            answer: "Compares values and types"
        },
        {
            question: "Which of the following functions can be used to parse a string into an integer?",
            options: ["parseInt()", "Number()", "parseFloat()", "eval()"],
            answer: "parseInt()"
        },
        {
            question: "What will be the output of the following code? `console.log(0.1 + 0.2 === 0.3);`",
            options: ["true", "false", "NaN", "undefined"],
            answer: "false"
        },
        {
            question: "Which of the following is a valid way to define a function in JavaScript?",
            options: ["function myFunction() {}", "let myFunction = function() {}", "const myFunction = () => {}", "All of the above"],
            answer: "All of the above"
        },
        {
            question: "What is the output of the following code? `console.log(2 + 3 + '4');`",
            options: ["'9'", "'54'", "9", "'7'"],
            answer: "'54'"
        },
        {
            question: "How do you create an array in JavaScript?",
            options: ["let arr = []", "let arr = new Array()", "let arr = Array.of()", "All of the above"],
            answer: "All of the above"
        },
        {
            question: "Which method is used to remove the last element from an array?",
            options: ["pop()", "delete()", "shift()", "slice()"],
            answer: "pop()"
        },
        {
            question: "What will be the output of the following code? `let a = [1, 2, 3]; let b = a; b[0] = 0; console.log(a);`",
            options: ["[1, 2, 3]", "[0, 2, 3]", "[0, 1, 2]", "[1, 2, 0]"],
            answer: "[0, 2, 3]"
        },
        {
            question: "Which of the following methods can be used to convert a string into an array?",
            options: ["split()", "slice()", "join()", "concat()"],
            answer: "split()"
        },
        {
            question: "What does the `map()` function do?",
            options: ["Filters elements from an array", "Transforms each element in an array", "Finds a specific element in an array", "Reduces an array to a single value"],
            answer: "Transforms each element in an array"
        },
        {
            question: "Which of the following is a JavaScript framework?",
            options: ["Django", "Laravel", "React", "Ruby on Rails"],
            answer: "React"
        },
        {
            question: "What will be the output of the following code? `console.log(typeof (5 + '5'));`",
            options: ["'number'", "'string'", "'undefined'", "'NaN'"],
            answer: "'string'"
        },
        {
            question: "What does `JSON.stringify()` do?",
            options: ["Converts a JSON string to a JavaScript object", "Converts a JavaScript object to a JSON string", "Converts a JavaScript string to a JSON object", "None of the above"],
            answer: "Converts a JavaScript object to a JSON string"
        }
    ]
};

export default JsQuestions