// Creating the variables and getting them by id
var startButton = document.getElementById("start") // Select the start button
var questionElements = document.getElementById("questions") // Select the questions div
var questionTitle = document.getElementById("question-title") // Select question title heading
var endScreen = document.getElementById("end-screen") // Select the end-screen div
var choiceElements = document.getElementById("choices") // Select the choices div
let counterEl = document.querySelector("#time") // Timer element

var answerButtonsElement = document.getElementById("answer-buttons")

startButton.addEventListener("click", startQuiz) // Adding an event for the start button

function startQuiz() {
    console.log("started")
    startButton.classList.add("hide") // Hides Start button 
    printQuestion() // Calling the function to show questions
    printAnswers() // Calling the function to show answers
} 

var questions = [
    {
        question: "Commonly used data types do not include:",
        answers: {
            1: "strings",
            2: "booleans",
            3: "alerts",
            4: "numbers"
        },
        correctAnswer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within_.",
        answers: {
            1: "quotes",
            2: "curly brackets",
            3: "parentheses",
            4: "square brackets"
        },
        correctAnswer: "parentheses"
        
    },
    {
        question: "Arrays in JavaScript can be used to store_.",
        answers: {
            1: "numbers and strings",
            2: "other arrays",
            3: "booleans",
            4: "all of the above"
        },
        correctAnswer: "all of the above"
        
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: {
            1: "commas",
            2: "curly brackets",
            3: "quotes",
            4: "parentheses"
        },
        correctAnswer: "quotes"
        
    },
    {
        question: "A very useful tool used in development and debugging for printing content to the debugger is:",
        answers: {
            1: "JavaScript",
            2: "terminal/bash",
            3: "for loops",
            4: "console log"
        },
        correctAnswer: "console log"
    },
];

var counter = 0 // Keeping track of which question the user is on

function printQuestion () { // Populating the quiz questions
    console.log("test")
    var newParagraph = document.createElement("p");
    var pText = document.createTextNode("question")
    questionElements.style.display = "block";
    document.getElementById("question-title").textContent = questions[counter].question;
    newParagraph.appendChild(pText);
}

function printAnswers () { // Populate the quiz answers
    console.log("chocies-test")
    var newParagraph = document.createElement("p");
    var pText = document.createTextNode("answers");
    document.getElementById("choices.choices").textContent = questions.answers;
    newParagraph.appendChild(pText);
}

// Start Timer for the quiz
function setTime(){
    timeLeft = setInterval(function(){
        counterEl.textContent--;

        if (parseInt(counterEl.textContent) === 0){
            clearInterval(timeLeft)
            endQuiz()
        }
    }, 1000)
}
