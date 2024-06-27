(function() {

    const storyBtn = document.querySelector("#storybtn");
    const backBtn = document.querySelector(".backbtn");
    const page = document.querySelector("#page");
    const showStory = document.querySelector("#storyContent");
    const lessonBtn1 = document.querySelector('#btn1');
    const lessonBtn2 = document.querySelector('#btn2');

    storyBtn.addEventListener("click", () => {
        page.style.display = "none";
        showStory.style.display = "block";
    });
    backBtn.addEventListener("click", () => {
        page.style.display = "grid";
        showStory.style.display = "none";
    }); 
    lessonBtn1.addEventListener("click", () => {
        page.style.display = "grid";
        showStory.style.display = "none";

    })
    document.getElementById('btn1').addEventListener('click', function() {
        const buttons = document.querySelectorAll('.btn_learn .buttons');
        buttons.forEach(button => {
            button.classList.remove('green');
            button.classList.add('orange');
        });
    });
    //đổi màu nút ấn để sang phần 2
    document.getElementById('btn2').addEventListener('click', function() {
        const buttons = document.querySelectorAll('.btn_learn .buttons');
        buttons.forEach(button => {
            button.classList.remove('orange');
            button.classList.add('green');
        });
        
    const storytext = `
        <p>Minh, một người chơi có kinh nghiệm và đầy sáng tạo, quyết định thử thách bản thân trong một trận Đấu Trường Chân Lý vào <em>một buổi sáng</em>.</p>
        <p>Anh đã chọn <em>một cách thông minh</em> để kết hợp đội hình với bộ đôi Shadow, và cẩn thận <em>sắp xếp</em> các quân cờ và trang bị, <em>hướng tới</em> chiến thắng. Mỗi <em>quyết định</em>, từ vị trí của các quân cờ đến việc quản lý tài chính, đều được đưa ra <em>với sự chính xác tỉ mỉ</em> sau nhiều giờ nghiên cứu và thực hành.</p>
        <p>Dù gặp phải những đối thủ mạnh, Minh vẫn kiên trì và <em>nỗ lực</em> không ngừng. Mỗi vòng đấu, <em>cố gắng</em> của anh đã giúp anh vượt qua nhiều đối thủ, những người không thể <em>dự đoán</em> chiến thuật của anh.</p>
        <p>Cuối cùng, Minh đã đạt được <em>hạng nhất</em>. <em>Suy ngẫm</em> về trận đấu, anh thấy tự hào về những gì đã đạt được và biết rằng sự kiên trì và học hỏi từ những <em>sai lầm</em> chính là chìa khóa để đạt tới thành công.</p>
    `;
    });
    
    function changetoPart2() {
        document.querySelector(".storytext").innerHTML = storytext;
    }
    lessonBtn2.addEventListener("click", changetoPart2);
    const quizzes = [{
            quizName: "quiz1",
            title: "Quiz 1",
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
        },
        {
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
        },
        {
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
        }

    ];


    const quizContent = document.getElementById("quizContent");

    const quiz1Btn = document.getElementById("quiz1-btn");
    const quiz2Btn = document.getElementById("quiz2-btn");
    const quiz3Btn = document.getElementById("quiz3-btn");
    const quiz4Btn = document.getElementById("quiz4-btn");

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