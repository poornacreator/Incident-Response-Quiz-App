const questions = [
    { question: "What is the first step in incident response?", answers: ["Identification", "Containment", "Eradication", "Recovery"], correct: 0 },
    { question: "Which of the following is an IT service desk ticket type?", answers: ["Change Request", "Incident Report", "Service Request", "All of the above"], correct: 3 },
    { question: "What does SLA stand for?", answers: ["Service Level Agreement", "System Log Analysis", "Security Lock Access", "Software License Activation"], correct: 0 },
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const scoreDisplay = document.getElementById("score");

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
    answerButtons.innerHTML = "";
    
    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.onclick = () => selectAnswer(index === question.correct);
        answerButtons.appendChild(button);
    });
}

function selectAnswer(isCorrect) {
    if (isCorrect) {
        score++;
    }
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        questionText.textContent = "Quiz Completed!";
        answerButtons.innerHTML = "";
        nextButton.style.display = "none";
        scoreDisplay.textContent = `Your Score: ${score} / ${questions.length}`;
    }
}

// Add personalized questions from users
function addCustomQuestion() {
    const userQuestion = document.getElementById("user-question").value;
    const userOption1 = document.getElementById("user-option1").value;
    const userOption2 = document.getElementById("user-option2").value;
    const userOption3 = document.getElementById("user-option3").value;
    const userOption4 = document.getElementById("user-option4").value;
    const correctAnswer = document.getElementById("correct-answer").value;

    if (userQuestion && userOption1 && userOption2 && userOption3 && userOption4) {
        questions.push({
            question: userQuestion,
            answers: [userOption1, userOption2, userOption3, userOption4],
            correct: parseInt(correctAnswer),
        });
    }

    alert("Your custom question has been added!");
}

nextButton.addEventListener("click", showQuestion);
startQuiz();