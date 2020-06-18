const questionNumber = document.querySelector(".question-number");
const questionImg = document.querySelector(".question-img").src;
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];

//push questions into availableQuestions array
function setAvailableQuestion() {
    const totalQuestions = quiz.length; 
    for(let i = 0; i < totalQuestions; i++) {
        availableQuestions.push(quiz[i]);
    }
}

function getNewQuestion() {
    // set question number in the header
    questionNumber.innerHTML = questionCounter + 1 + " / " + quiz.length;
    //set and index to get a random question and keep track of which question came up
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    currentQuestion = questionIndex;
    //set question image
    //questionImg.innerHTML = currentQuestion.image;
    //set question text
    questionText.innerHTML = currentQuestion.question;

    //console.log(questionIndex);
}

window.onload = function() {
    //set all questions in availableQuestions array
    setAvailableQuestion();
    //get a new question from the availableQuestions array
    this.getNewQuestion();
}
