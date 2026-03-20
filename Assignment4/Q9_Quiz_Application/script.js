// Questions stored in array of objects
const quizData = [
    {
        question: "Which language runs in the browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Model", "Digital Output Mode", "Desktop Oriented Mode"],
        answer: "Document Object Model"
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "IBM"],
        answer: "Netscape"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {

    const questionData = quizData[currentQuestionIndex];

    document.getElementById("question").textContent = questionData.question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    questionData.options.forEach(option => {

        const button = document.createElement("button");
        button.textContent = option;
        button.className = "optionBtn";

        button.onclick = function () {
            checkAnswer(option);
        };

        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selectedOption) {

    if (selectedOption === quizData[currentQuestionIndex].answer) {
        score++;
    }
}

function nextQuestion() {

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        document.getElementById("quizBox").style.display = "none";
        document.getElementById("result").textContent =
            "Quiz Finished! Your Score: " + score + "/" + quizData.length;
    }
}

// Load first question on page load
loadQuestion();
