const questions = [
    {
        question: "Nguyen Tuan Anh ___ a HEARTSTEEL player.",
        answers: [
            { text: "is", correct: true},
            { text: "are", correct: false},
            { text: "am", correct: false},
            { text: "be", correct: false},
        ]
    },
    {
        question: "Nguyen Tuan Anh usually got ___ place when he plays HEARTSTEEL",
        answers: [
            { text: "1st", correct: true},
            { text: "2nd", correct: false},
            { text: "4th", correct: false},
            { text: "8th", correct: false},
        ]
    },
    {
        question: "Nguyen Ngoc An is a ___ addict",
        answers: [
            { text: "HEARTSTEEL", correct: false},
            { text: "Fortune", correct: true},
            { text: "Heavenly", correct: false},
            { text: "Storyweaver", correct: false},
        ]
    },
    {
        question: "Nguyen Ngoc An usually got ___ place when he plays Fortune",
        answers: [
            { text: "1st", correct: false},
            { text: "2nd", correct: false},
            { text: "4th", correct: false},
            { text: "8th", correct: true},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const nextGameButton = document.getElementById("next-game-btn");
let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showTimer();
    nextButton.innerHTML = "Câu kế tiếp";
    showQuestion();
}
function resetState() {
    nextButton.style.display = "none";
    nextGameButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
  }
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore() {
    resetState();
    resetTimer();

    if (score === 0) {
        questionElement.innerHTML = `Bạn đã hoàn thành Quiz nhưng không đạt được điểm nào. Bạn cần phải chơi lại để tiếp tục sang Quiz kế tiếp.`;
        nextButton.innerHTML = "Chơi lại";
        nextButton.style.display = "block";
        nextGameButton.style.display = "none";
    } else {
        questionElement.innerHTML = `Bạn đã hoàn thành Quiz. Số điểm của bạn là ${score} trên ${questions.length}!`;
        nextButton.innerHTML = "Chơi lại";
        nextButton.style.display = "block";
        nextGameButton.style.display = "block";
    }

    timerElement.style.display = "none";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showTimer();
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

nextGameButton.addEventListener("click", () => {
    location.href = 'question4.html';
});
const timerElement = document.getElementById("timer");
let timerInterval;
let timeLeft = 10;
function showTimer() {
    timerElement.style.display = "block";
}

function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const formattedTime = `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    return formattedTime;
}
function updateTimer() {
    timeLeft--;

    if (timeLeft >= 0) {
        timerElement.textContent = `Thời gian còn lại: ${formatTime(timeLeft)}`;
    } else {
        clearInterval(timerInterval);
        handleNextButton();
    }
}
function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = 10;
    timerElement.textContent = `Thời gian còn lại: ${formatTime(timeLeft)}`;
}
function showQuestion(){
    resetState(); 
    resetTimer(); 
    
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    questionElement.innerHTML = "Question " + questionNum + ": " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

    startTimer();
}
function hideTimer() {
    timerElement.style.display = "none";
}

startQuiz();