const questionNumber = document.querySelector(".question-number");
const questionImg = document.querySelector(".question-img");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];

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
        let image = document.createElement("img");
        image.className = "question-Img";
        image.src = currentQuestion.image;
        questionImg.appendChild(image);

    //set question text
    questionText.innerHTML = currentQuestion.question;
    //get position of questionIndex from availableQuestions array
    const index1 = availableQuestions.indexOf(questionIndex);
    //remove questionIndex from availablEqUESTIONS ARRAY so the question does not repeat
    availableQuestions.splice(index1,1);
    //console.log(questionIndex);
    //console.log(availableQuestions);
    // set options
    // get the length of options
    const optionLen = currentQuestion.options.length
    //push options into availableOptions array
    for(let i = 0; i < optionLen; i++){
        availableOptions.push(i);
    }
    //Create options in html
    for(let i = 0; i < optionLen; i++) {
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[i];
        option.id = i;
        option.className = "option";
        console.log(option.className);
        optionContainer.appendChild(option)
    }

    questionCounter ++
}

function next() {
    if (questionCounter === quiz.length) {
        console.log("Quiz over");
    } else {
        getNewQuestion();
    }
}

window.onload = function() {
    //set all questions in availableQuestions array
    setAvailableQuestion();
    //get a new question from the availableQuestions array
    this.getNewQuestion();
}
