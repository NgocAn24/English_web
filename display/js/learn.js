(function() {
    const shows = document.querySelectorAll('#boxshow');
    const hides = document.querySelectorAll('#boxhide');

    shows.forEach((show, index) => {
        show.addEventListener('click', function() {
            hides[index].classList.toggle('hide');
        });
    });
})();


const quizzes = {
    "quiz1": {
        "title": "Quiz 1: Daily Life",
        "questions": [{
            "text": "What is your name?",
            "answers": [{
                "text": "John",
                "correct": true
            }, {
                "text": "Mike",
                "correct": false
            }, {
                "text": "Lucy",
                "correct": false
            }]
        }, {
            "text": "How old are you?",
            "answers": [{
                "text": "20",
                "correct": false
            }, {
                "text": "25",
                "correct": true
            }, {
                "text": "30",
                "correct": false
            }]
        }]
    },
    "quiz2": {
        "title": "Quiz 2: Work & Study Life",
        "questions": [{
            "text": "Where do you work?",
            "answers": [{
                "text": "Office",
                "correct": false
            }, {
                "text": "School",
                "correct": true
            }, {
                "text": "Home",
                "correct": false
            }]
        }, {
            "text": "What do you study?",
            "answers": [{
                "text": "Math",
                "correct": false
            }, {
                "text": "English",
                "correct": true
            }, {
                "text": "Science",
                "correct": false
            }]
        }]
    }
};

function showLessonContent(quizId) {
    const quiz = quizzes[quizId];
    if (quiz) {
        // Hide container
        document.querySelector('.container_learn').style.display = 'none';
        // Show lesson-content
        displayQuiz(quiz);
        document.getElementById('lesson-content').style.display = 'block';
    }
}

function displayQuiz(quiz) {
    const quizContainer = document.getElementById('lesson-content');
    quizContainer.innerHTML = `
        <div class="quiz">
            <h2>${quiz.title}</h2>
            <form id="quiz-form">
                ${quiz.questions.map((question, index) => `
                    <div class="question">
                        <p>${index + 1}. ${question.text}</p>
                        ${question.answers.map(answer => `
                            <label>
                                <input type="radio" name="q${index}" value="${answer.text}" data-correct="${answer.correct}">
                                ${answer.text}
                            </label>
                        `).join('')}
                    </div>
                `).join('')}
                <button type="submit">Submit</button>
            </form>
        </div>
        <div class="back-btn">
            <button onclick="showContainer()">Quay lại</button>
        </div>
    `;
    initializeQuiz();
}

function showContainer() {
    document.querySelector('.container_learn').style.display = 'grid';
    document.getElementById('lesson-content').style.display = 'none';
}

function initializeQuiz() {
    const quizForm = document.getElementById('quiz-form');
    if (quizForm) {
        quizForm.addEventListener('submit', function(event) {
            event.preventDefault();
            let score = 0;
            const formData = new FormData(quizForm);
            formData.forEach((value, key) => {
                const correctAnswer = quizForm.querySelector(`input[name="${key}"][data-correct="true"]`);
                if (correctAnswer && correctAnswer.value === value) {
                    score++;
                }
            });
            alert(`Bạn đã trả lời đúng ${score} câu hỏi!`);
            showContainer(); // Quay lại container sau khi hoàn thành bài học
        });
    }
}