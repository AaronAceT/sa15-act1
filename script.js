const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris",
        feedback: "Correct! Paris is the capital of France."
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Saturn", "Mars"],
        answer: "Jupiter",
        feedback: "Correct! Jupiter is the largest planet."
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
        answer: "William Shakespeare",
        feedback: "Correct! 'Romeo and Juliet' was written by William Shakespeare."
    }
];

let currentQuestion = 0;
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("nextButton");
const feedbackElement = document.getElementById("feedback");

function showQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionElement.textContent = currentQuestionData.question;
    optionsElement.innerHTML = "";
    currentQuestionData.options.forEach(option => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(optionButton);
    });
}

function checkAnswer(selectedAnswer) {
    const currentQuestionData = questions[currentQuestion];
    if (selectedAnswer === currentQuestionData.answer) {
        feedbackElement.textContent = currentQuestionData.feedback;
    } else {
        feedbackElement.textContent = "Incorrect! Try again.";
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
        feedbackElement.textContent = "";
    } else {
        questionElement.textContent = "Quiz completed!";
        optionsElement.innerHTML = "";
        nextButton.style.display = "none";
        feedbackElement.textContent = "";
    }
}

nextButton.addEventListener("click", nextQuestion);

// Show the first question when the page loads
showQuestion();
