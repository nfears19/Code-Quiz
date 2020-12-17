// Creating the variables and getting them by id
var startButton = document.getElementById("start") // Select the start button
var questionElements = document.getElementById("questions") // Select the questions div
var questionTitle = document.getElementById("question-title") // Select question title heading
var endScreen = document.getElementById("end-screen") // Select the end-screen div
var choiceElements = document.getElementById("choices") // Select the choices div

const answerButtonsElement = document.getElementById("answer-buttons")

startButton.addEventListener("click", startQuiz) // Adding an event for the start button

function startQuiz() {
    console.log("started")
    startButton.classList.add("hide") // Hides Start button 
    printQuestion() // Calling the function to show questions
    printAnswers() //Calling the function to show answers
} 

var questionElements = document.getElementById("questions"); // Grabbing a reference to the HTML element for showing a specific question
var questions = [
    {
        question: "What color is the sky?",
        answers: {
            1: "pink",
            2: "orange",
            3: "green",
            4: "blue"
        },
        correctAnswer: "4"
    },
    {
        question: ""
    }
];

var counter = 0 // Keeping track of which question the user is on

function printQuestion () { // Populating the quiz questions
    console.log("test")
    var newParagraph = document.createElement("p");
    questionElements.style.display = "block";
    document.getElementById("question-title").textContent = "questions[counter].question";
    newParagraph.appendChild(questionElements);
}

function printAnswers () {
    console.log("chocies-test")
    var paragraph = document.createElement("p");
    choiceElements.style.display = "block";
    document.getElementById("choices").textContent = "choices.answers";
    paragraph.appendChild(choiceElements);
}
// Start Timer for the quiz


