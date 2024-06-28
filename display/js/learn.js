(function() {

    const storyBtn = document.querySelector("#storybtn");
    const backBtn = document.querySelector(".backbtn");
    const page = document.querySelector("#page");
    const showStory = document.querySelector("#storyContent");

    storyBtn.addEventListener("click", () => {
        page.style.display = "none";
        showStory.style.display = "block";
    });
    backBtn.addEventListener("click", () => {
        page.style.display = "grid";
        showStory.style.display = "none";
    });
    // 
    const p1Btn = document.querySelector("#p1");
    const p2Btn = document.querySelector("#p2");
    const m1Btn = document.querySelector("#muc1");
    const m2Btn = document.querySelector("#muc2");
    const char = document.querySelector("#char");
    const char2 = document.querySelector("#char2");
    m1Btn.addEventListener("click", () => {
        p2Btn.style.display = "none";
        p1Btn.style.display = "grid";
        char2.style.display = "none";
        char.style.display = "grid";
    });
    m2Btn.addEventListener("click", () => {
        p2Btn.style.display = "grid";
        p1Btn.style.display = "none";
        char2.style.display = "grid";
        char.style.display = "none";
    });

    const quizzes = [{
            quizName: "quiz1",
            title: "Bai 1",
            questions: [{
                question: "Nguyen Tuan Anh ___ a HEARTSTEEL player.",
                answers: [{
                    text: "is",
                    correct: true
                }, {
                    text: "are",
                    correct: false
                }, {
                    text: "am",
                    correct: false
                }, {
                    text: "be",
                    correct: false
                }, ]
            }, {
                question: "Nguyen Tuan Anh usually got ___ place when he plays HEARTSTEEL",
                answers: [{
                    text: "1st",
                    correct: false
                }, {
                    text: "2nd",
                    correct: false
                }, {
                    text: "4th",
                    correct: false
                }, {
                    text: "8th",
                    correct: true
                }, ]
            }, {
                question: "Nguyen Ngoc An is a ___ addict",
                answers: [{
                    text: "HEARTSTEEL",
                    correct: false
                }, {
                    text: "Fortune",
                    correct: true
                }, {
                    text: "Heavenly",
                    correct: false
                }, {
                    text: "Storyweaver",
                    correct: false
                }, ]
            }, {
                question: "Nguyen Ngoc An usually got ___ place when he plays Fortune",
                answers: [{
                    text: "1st",
                    correct: true
                }, {
                    text: "2nd",
                    correct: false
                }, {
                    text: "4th",
                    correct: false
                }, {
                    text: "8th",
                    correct: false
                }, ]
            }]
        }, {
            quizName: "quiz2",
            title: "Quiz 2",
            questions: [{
                    question: "Nguyen Tuan Anh works as a ___",
                    answers: [
                        { text: "developer", correct: true },
                        { text: "designer", correct: false },
                        { text: "manager", correct: false },
                        { text: "tester", correct: false }
                    ]
                },
                {
                    question: "Nguyen Tuan Anh's favorite language is ___",
                    answers: [
                        { text: "Python", correct: true },
                        { text: "JavaScript", correct: false },
                        { text: "Java", correct: false },
                        { text: "C++", correct: false }
                    ]
                },
                {
                    question: "Nguyen Tuan Anh enjoys ___ in his free time",
                    answers: [
                        { text: "reading", correct: true },
                        { text: "singing", correct: false },
                        { text: "dancing", correct: false },
                        { text: "teamfight tacics", correct: false }
                    ]
                }
            ]

        }, {
            quizName: "quiz3",
            title: "Quiz 3",
            questions: [{
                question: "Nguyen Sa Anh ___ a HEARTSTEEL player.",
                answers: [{
                    text: "is",
                    correct: true
                }, {
                    text: "are",
                    correct: false
                }, {
                    text: "am",
                    correct: false
                }, {
                    text: "be",
                    correct: false
                }]
            }, {
                question: "Nguyen Sa Anh usually got ___ place when he plays HEARTSTEEL",
                answers: [{
                    text: "1st",
                    correct: true
                }, {
                    text: "2nd",
                    correct: false
                }, {
                    text: "4th",
                    correct: false
                }, {
                    text: "8th",
                    correct: false
                }]
            }, {
                question: "Nguyen asc An is a ___ addict",
                answers: [{
                    text: "HEARTSTEEL",
                    correct: false
                }, {
                    text: "Fortune",
                    correct: true
                }, {
                    text: "Heavenly",
                    correct: false
                }, {
                    text: "Storyweaver",
                    correct: false
                }]
            }, {
                question: "Nguyen asc An usually got ___ place when he plays Fortune",
                answers: [{
                    text: "1st",
                    correct: false
                }, {
                    text: "2nd",
                    correct: false
                }, {
                    text: "4th",
                    correct: false
                }, {
                    text: "8th",
                    correct: true
                }]
            }]
        }, {
            quizName: "quiz4",
            title: "Quiz 4",
            questions: [{
                question: "Nguyen Sa Anh ___ a HEARTSTEEL player.",
                answers: [{
                    text: "is",
                    correct: true
                }, {
                    text: "are",
                    correct: false
                }, {
                    text: "am",
                    correct: false
                }, {
                    text: "be",
                    correct: false
                }]
            }, {
                question: "Nguyen Sa Anh usually got ___ place when he plays HEARTSTEEL",
                answers: [{
                    text: "1st",
                    correct: true
                }, {
                    text: "2nd",
                    correct: false
                }, {
                    text: "4th",
                    correct: false
                }, {
                    text: "8th",
                    correct: false
                }]
            }, {
                question: "Nguyen asc An is a ___ addict",
                answers: [{
                    text: "HEARTSTEEL",
                    correct: false
                }, {
                    text: "Fortune",
                    correct: true
                }, {
                    text: "Heavenly",
                    correct: false
                }, {
                    text: "Storyweaver",
                    correct: false
                }]
            }, {
                question: "Nguyen asc An usually got ___ place when he plays Fortune",
                answers: [{
                    text: "1st",
                    correct: false
                }, {
                    text: "2nd",
                    correct: false
                }, {
                    text: "4th",
                    correct: false
                }, {
                    text: "8th",
                    correct: true
                }]
            }]
        }, {
            quizName: "quiz5",
            title: "Quiz 5",
            questions: [{
                    question: "Nguyen Tuan Anh's hobby is ___",
                    answers: [
                        { text: "photography", correct: true },
                        { text: "gardening", correct: false },
                        { text: "cooking", correct: false },
                        { text: "fishing", correct: false }
                    ]
                },
                {
                    question: "Nguyen Tuan Anh likes to ___",
                    answers: [
                        { text: "travel", correct: true },
                        { text: "stay home", correct: false },
                        { text: "work out", correct: false },
                        { text: "shop", correct: false }
                    ]
                },
                {
                    question: "Nguyen Tuan Anh's favorite season is ___",
                    answers: [
                        { text: "summer", correct: true },
                        { text: "winter", correct: false },
                        { text: "spring", correct: false },
                        { text: "autumn", correct: false }
                    ]
                }
            ]
        }

    ];


    const quizContent = document.getElementById("quizContent");

    const quiz1Btn = document.getElementById("quiz1-btn");
    const quiz2Btn = document.getElementById("quiz2-btn");
    const quiz3Btn = document.getElementById("quiz3-btn");
    const quiz4Btn = document.getElementById("quiz4-btn");
    const quiz5Btn = document.getElementById("quiz5-btn");

    quiz1Btn.addEventListener("click", () => {
        displayQuiz("quiz1");
    });

    quiz2Btn.addEventListener("click", () => {
        displayQuiz("quiz2");
    });
    quiz3Btn.addEventListener("click", () => {
        displayQuiz("quiz3");
    });
    quiz4Btn.addEventListener("click", () => {
        displayQuiz("quiz4");
    });


    quiz5Btn.addEventListener("click", () => {
        displayQuiz("quiz5");
    });


    function displayQuiz(quizName) {
        const quiz = quizzes.find(quiz => quiz.quizName === quizName);
        if (!quiz) {
            console.error(`Quiz '${quizName}' not found.`);
            return;
        }
        const questions = quiz.questions;
        // Clear previous quiz content
        quizContent.innerHTML = "";
        document.querySelector('.page').style.display = 'none';
        document.getElementById('quizContent').style.display = 'block';
        // Show quiz content
        quizContent.innerHTML = `
        <div class="app">
            <h1>${quiz.title}</h1>
            <div class="quiz">
                <div class="title_quizz">
                    <h2 id="question">Câu hỏi</h2>
                    <div id="timer">Thời gian còn lại: <span id="seconds">00:30</span></div>
                </div>
                <div id="answer-buttons" class="btn-container">
                      <button class="btn">Đáp án 1</button>
                        <button class="btn">Đáp án 2</button>
                        <button class="btn">Đáp án 3</button>
                        <button class="btn">Đáp án 4</button></div>
                <div id="button-container">
                    <button id="next-btn">Tiếp tục</button>
                    <button id="back-btn" class="buttons">Quay lại</button>
                </div>
            </div>
        </div>
    `;
        // 


        // 
        const questionElement = document.getElementById("question");
        const answerButtons = document.getElementById("answer-buttons");
        const nextButton = document.getElementById("next-btn");
        const backButton = document.getElementById("back-btn");
        let currentQuestionIndex = 0;
        let score = 0;

        function startQuiz() {
            currentQuestionIndex = 0;
            score = 0;
            backButton.style.display = "none";
            showTimer();
            showQuestion();
        }

        function resetState() {
            nextButton.style.display = "none";
            backButton.style.display = "none";
            while (answerButtons.firstChild) {
                answerButtons.removeChild(answerButtons.firstChild);
            }
        }

        function selectAnswer(e) {
            const selectedBtn = e.target;
            const isCorrect = selectedBtn.dataset.correct === "true";
            if (isCorrect) {
                selectedBtn.classList.add("correct");
                score++;
            } else {
                selectedBtn.classList.add("incorrect");
            }
            Array.from(answerButtons.children).forEach(button => {
                if (button.dataset.correct === "true") {
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
                questionElement.textContent = `Bạn đã hoàn thành Quiz nhưng không đạt được điểm nào. Bạn cần phải chơi lại để tiếp tục sang Quiz kế tiếp.`;
                nextButton.textContent = "Chơi lại";
                nextButton.style.display = "block";
                backButton.style.display = "none";
            } else {
                questionElement.textContent = `Bạn đã hoàn thành Quiz. Số điểm của bạn là ${score} trên ${questions.length}!`;
                nextButton.textContent = "Chơi lại";
                nextButton.style.display = "block";
                backButton.style.display = "block";
            }

            timerElement.style.display = "none";
        }

        function handleNextButton() {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showTimer();
                showQuestion();
            } else {
                showScore();
            }
        }

        nextButton.addEventListener("click", () => {
            if (currentQuestionIndex < questions.length) {
                handleNextButton();
            } else {
                startQuiz();
            }
        });


        backButton.addEventListener("click", () => {
            document.querySelector('.page').style.display = 'grid';
            document.getElementById('quizContent').style.display = 'none';
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

        function showQuestion() {
            resetState();
            resetTimer();

            let currentQuestion = questions[currentQuestionIndex];
            let questionNum = currentQuestionIndex + 1;
            questionElement.innerHTML = "Question " + questionNum + ": " + currentQuestion.question;
            currentQuestion.answers.forEach(answer => {
                const button = document.createElement("button");
                button.textContent = answer.text;
                button.classList.add("btn");
                if (answer.correct) {
                    button.dataset.correct = true;
                }
                button.addEventListener("click", selectAnswer);
                answerButtons.appendChild(button); // Thêm button vào answerButtons
            });

            startTimer();
        }


        startQuiz();
    }
})();