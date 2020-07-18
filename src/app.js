const questionNumber = document.querySelector(".question-number");
const questionImg = document.querySelector(".question-img");
const questionText = document.querySelector(".question-text");
const optionsContainer = document.querySelector(".option-container");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultsBox = document.querySelector(".results-box");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const correctAnswers = document.querySelector(".correctAnswers");
const totalQuestions = document.querySelector(".total-question");
const totalQuestionEnd = document.querySelector(".total-question-end");
let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let rightAnswers = 0;


function fillMaxQuestions() {
    totalQuestions.innerHTML = quiz.length;
}
fillMaxQuestions();


function startQuiz() {
    homeBox.style.display = "none";
    quizBox.style.display = "block";
    resultsBox.style.display = "none";
}

function restartQuiz() {
    homeBox.style.display = "block";
    quizBox.style.display = "none";
    resultsBox.style.display = "none";
    questionCounter = 0;
    rightAnswers = 0;
    setAvailableQuestion()
    getNewQuestion();
}

//push questions into availableQuestions array
function setAvailableQuestion() {
    const totalQuestions = quiz.length; 
    for(     i = 0; i < totalQuestions; i++) {
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
             image = document.createElement("img");
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
    for(     i = 0; i < optionLen; i++){
        availableOptions.push(i);
    }
    //Create options in html
    for(     i = 0; i < optionLen; i++) {
    //random options
        const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)]
    //get position of optionIndex from availableOptions
        const index2 = availableOptions.indexOf(optionIndex);
        const optionContainer = document.createElement("div");
    //remove optionIndex from availablEqUESTIONS ARRAY so the option does not repeat
        availableOptions.splice(index2, 1);
        console.log(optionIndex);
        const option = document.createElement("input");
        const optionLabel = document.createElement("label");
        optionLabel.setAttribute('for', optionIndex);
        optionLabel.innerHTML = currentQuestion.options[optionIndex];
        option.id = optionIndex;
        option.setAttribute('name', 'questionAnswers');
        option.setAttribute('type', 'radio');
        option.className = "optionRadio";
        optionContainer.className = "option";
        console.log(option.className);
        optionContainer.appendChild(option);
        optionContainer.appendChild(optionLabel);
        optionsContainer.appendChild(optionContainer);
        option.setAttribute("onclick", "getResult(this)")
    }

    questionCounter ++
}



// Get result of current question
//Build a function that gets a result when clicking an option
function getResult(element) {
    const id = parseInt(element.id);
    console.log(element.id);
    //console.log(currentQuestion.answer);
    if (id  === currentQuestion.answer) {
        console.log("Correct!");
        element.parentElement.style.backgroundColor = "green";
        rightAnswers += 1;
        console.log("correct:" + rightAnswers);
    } else {
        console.log("Wrong!");
        element.parentElement.style.backgroundColor = "red";
        const correctAnswerforQuestion = document.getElementById(currentQuestion.answer);
        correctAnswerforQuestion.parentElement.style.backgroundColor = "green";
        console.log(correctAnswerforQuestion);
        }
        
    cantClick();
}

function cantClick() {
    const unclick = optionsContainer.children.length;
    for (    i = 0; i < unclick; i++){
        optionsContainer.children[i].classList.add('cantclick');
    }
}


function next() {
    questionImg.innerHTML = "";
    questionText.innerHTML = "";
    optionsContainer.innerHTML = "";

    if (questionCounter === quiz.length) {
        console.log("Quiz over");
        quizOver();
    } else {
        getNewQuestion();
    }
}

function quizOver() {
    //hide quiz
    quizBox.style.display = "";
    resultsBox.style.display = "block";
    correctAnswers.innerHTML = rightAnswers;
    totalQuestionEnd.innerHTML = quiz.length;
    //show results
    
}

window.onload = function() {
    //set all questions in availableQuestions array
    setAvailableQuestion();
    //get a new question from the availableQuestions array
    this.getNewQuestion();
    //create an indicator for each answer

}
