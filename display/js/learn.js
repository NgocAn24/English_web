(function() {

    const storyBtn = document.querySelector("#storybtn");
    const storyBtn2 = document.querySelector("#storybtn2");
    const storyBtn3 = document.querySelector("#storybtn3");
    const backBtn = document.querySelector(".backbtn");
    const backBtn2 = document.querySelector(".backbtn2");
    const backBtn3 = document.querySelector(".backbtn3");
    const page = document.querySelector("#page");
    const showStory = document.querySelector("#storyContent");
    const showStory2 = document.querySelector("#storyContent2");
    const showStory3 = document.querySelector("#storyContent3");

    storyBtn.addEventListener("click", () => {
        page.style.display = "none";
        showStory.style.display = "block";
    });
    storyBtn2.addEventListener("click", () => {
        page.style.display = "none";
        showStory2.style.display = "block";
    });
    storyBtn3.addEventListener("click", () => {
        page.style.display = "none";
        showStory3.style.display = "block";
    });
    backBtn.addEventListener("click", () => {
        page.style.display = "grid";
        showStory.style.display = "none";
    });
    backBtn2.addEventListener("click", () => {
        page.style.display = "grid";
        showStory2.style.display = "none";
    });
    backBtn3.addEventListener("click", () => {
        page.style.display = "grid";
        showStory3.style.display = "none";
    });
    // 



    const quizzes = [{
            quizName: "quiz1",
            title: "Về tên của bạn",
            questions: [{
                question: "Chọn câu tiếng Việt đúng nghĩa với câu sau: Tôi là Tuấn Anh.",
                answers: [{
                    text: "I am Tuan Anh.",
                    correct: true
                }, {
                    text: "I are Tuan Anh.",
                    correct: false
                }, {
                    text: "Me am Tuan Anh.",
                    correct: false
                }, {
                    text: "I is Tuan Anh.",
                    correct: false
                }, ]
            }, {
                question: "Điền vào chỗ trống để tạo thành một câu chào hỏi: _____, I am Ngoc An!",
                answers: [{
                    text: "With",
                    correct: false
                }, {
                    text: "Milk",
                    correct: false
                }, {
                    text: "Tea",
                    correct: false
                }, {
                    text: "Hello",
                    correct: true
                }, ]
            }, {
                question: "Viết lại câu sau bằng Tiếng Việt: Hello, my name is Zen.",
                answers: [{
                    text: "Xin chào, Zen.",
                    correct: false
                }, {
                    text: "Xin chào, tên tôi là Zen.",
                    correct: true
                }, {
                    text: "Chào, tôi là Zen.",
                    correct: false
                }, {
                    text: "Xin chào.",
                    correct: false
                }, ]
            }, {
                question: "Điền vào chỗ trống để tạo thành một câu giới thiệu bản thân cơ bản: Hello, __ ____ __ Tuan Anh.",
                answers: [{
                    text: "my name is",
                    correct: true
                }, {
                    text: "I am",
                    correct: false
                }, {
                    text: "my name are",
                    correct: false
                }, {
                    text: "my name",
                    correct: false
                }, ]
            }]
        }, {
            quizName: "quiz2",
            title: "Từ vựng mới",
            questions: [{
                    question: "Từ nào là 'giáo viên'?",
                    answers: [
                        { text: "teacher", correct: true },
                        { text: "designer", correct: false },
                        { text: "manager", correct: false },
                        { text: "tester", correct: false }
                    ]
                },
                {
                    question: "Từ nào là 'học sinh'?",
                    answers: [
                        { text: "student", correct: true },
                        { text: "manager", correct: false },
                        { text: "player", correct: false },
                        { text: "teacher", correct: false }
                    ]
                },  
                {
                    question: "Từ nào là 'hiệu trưởng'?",
                    answers: [
                        { text: "student", correct: false },
                        { text: "principal", correct: true },
                        { text: "player", correct: false },
                        { text: "teacher", correct: false }
                    ]
                },  
                {
                    question: "Điền vào chỗ trống từ thích hợp: In 2010, Tuan Anh was 6 years old and come to school. At that moment, he was a ______",
                    answers: [
                        { text: "teacher", correct: false },
                        { text: "water", correct: false },
                        { text: "student", correct: true },
                        { text: "footballer", correct: false }
                    ]
                },
                {
                    question: "Viết lại từ sau bằng tiếng Việt: a teacher",
                    answers: [
                        { text: "một học sinh", correct: false },
                        { text: "một giáo viên", correct: true },
                        { text: "một giáo sư", correct: false },
                        { text: "một bạn", correct: false }
                    ]
                },
                {
                    question: "Viết lại câu sau bằng tiếng Việt: She is the President of our school.",
                    answers: [
                        { text: "Cô ấy là giáo viên của trường tôi.", correct: false },
                        { text: "Cô ấy là học sinh của trường tôi.", correct: false },
                        { text: "Cô ấy là hiệu trưởng của trường tôi.", correct: true },
                        { text: "Cô ấy là bảo vệ của trường tôi.", correct: false }
                    ]
                }
            ]

        }, {
            quizName: "quiz3",
            title: "Từ vựng mới - Phần 2",
            questions: [{
                    question: "Từ nào chỉ 'tôi'(chỉ bản thân mình là chủ ngữ)?",
                    answers: [
                        { text: "you", correct: false },
                        { text: "he", correct: false },
                        { text: "she", correct: false },
                        { text: "I", correct: true }
                    ]
                },
                {
                    question: "Từ nào chỉ 'họ' với cách gọi là chủ ngữ?",
                    answers: [
                        { text: "they", correct: true },
                        { text: "you", correct: false },
                        { text: "he", correct: false },
                        { text: "it", correct: false }
                    ]
                },  
                {
                    question: "Từ nào chỉ 'anh ấy/cô ấy' với cách gọi là chủ ngữ?",
                    answers: [
                        { text: "I", correct: false },
                        { text: "he/she", correct: true },
                        { text: "we/they", correct: false },
                        { text: "you", correct: false }
                    ]
                },  
                {
                    question: "Từ nào chỉ 'bạn' với cách gọi là chủ ngữ?",
                    answers: [
                        { text: "he/she", correct: false },
                        { text: "I", correct: false },
                        { text: "it", correct: false },
                        { text: "you", correct: true }
                    ]
                },
                {
                    question: "Viết lại câu sau bằng tiếng Việt: Excuse me, you are Ngoc An, right?",
                    answers: [
                        { text: "Bạn là Ngọc An?", correct: false },
                        { text: "Xin lỗi, bạn là Ngọc An, phải không?", correct: true },
                        { text: "Bạn là Ngọc An, phải không?", correct: false },
                        { text: "Ngọc An, phải không?", correct: false }
                    ]
                },
                {
                    question: "Viết lại câu sau bằng tiếng Anh: Xin chào, tôi là Tuấn Anh, một học sinh.",
                    answers: [
                        { text: "Hello, I am Tuan Anh, a student.", correct: true },
                        { text: "Hello, I am Tuan Anh, a teacher.", correct: false },
                        { text: "I am Tuan Anh, a student.", correct: false },
                        { text: "Me am Tuan Anh, a student.", correct: false }
                    ]
                }
            ]
        }, {
            quizName: "quiz4",
            title: "Các câu hỏi nhỏ tổng hợp",
            questions: [{
                    question: "Điền vào chỗ trống để hoàn thành câu: My close friend is Ngoc An. ___ and me are doing some work together.",
                    answers: [
                        { text: "you", correct: false },
                        { text: "it", correct: false },
                        { text: "they", correct: false },
                        { text: "he/she", correct: true }
                    ]
                },
                {
                    question: "Điền vào chỗ trống để hoàn thành câu: My close friend is Tuan Anh. When __ am doing our work, he is still sleeping.",
                    answers: [
                        { text: "I", correct: true },
                        { text: "you", correct: false },
                        { text: "he/she", correct: false },
                        { text: "it", correct: false }
                    ]
                },  
                {
                    question: "Viết lại câu sau bằng tiếng Việt: Hello, I __ Zenky. I __ a student.",
                    answers: [
                        { text: "I", correct: false },
                        { text: "am", correct: true },
                        { text: "is", correct: false },
                        { text: "are", correct: false }
                    ]
                },  
                {
                    question: "Viết lại câu sau bằng tiếng Việt: And my friend, Nara. He __ a student too.",
                    answers: [
                        { text: "he/she", correct: false },
                        { text: "are", correct: false },
                        { text: "am", correct: false },
                        { text: "is", correct: true }
                    ]
                },
                {
                    question: "Viết lại câu sau bằng tiếng Anh: Xin chào, tôi là Hanabi. Tôi là bạn gái(người yêu) của Zenky.",
                    answers: [
                        { text: "I am Hanabi. I am Zenky's girlfriend.", correct: false },
                        { text: "Hello, I am Hanabi, Zenky girlfriend.", correct: false },
                        { text: "Hello, I am Hanabi. I am Zenky's girlfriend.", correct: true },
                        { text: "Hello, I am Hanabi, I am Zenky's friend.", correct: false }
                    ]
                },
                {
                    question: "Viết lại câu sau bằng tiếng Anh: Xin chào, tôi là Nara. Hiện tại tôi vẫn đang độc thân.",
                    answers: [
                        { text: "Hello, I am Nara, a student.", correct: false },
                        { text: "Hello, I am Nara. Now I'm still single.", correct: true },
                        { text: "Hello, I am Nara. Now I'm married.", correct: false },
                        { text: "Hello, I am Nara and single.", correct: false }
                    ]
                }
            ]
        }, {
            quizName: "quiz5",
            title: "Về công việc của bạn",
            questions: [
        {
        question: "Điền vào chỗ trống để hoàn thành câu: I work as a ___.",
        answers: [
            { text: "water", correct: false },
            { text: "teacher", correct: true },
            { text: "car", correct: false },
            { text: "table", correct: false }
        ]
    },
    {
        question: "Điền vào chỗ trống để hoàn thành câu: My job starts at __ a.m in the morning.",
        answers: [
            { text: "7", correct: true },
            { text: "9", correct: false },
            { text: "12", correct: false },
            { text: "3", correct: false }
        ]
    },
    {
        question: "Viết lại câu sau bằng tiếng Việt: I work in an office.",
        answers: [
            { text: "Tôi làm việc ở một văn phòng.", correct: true },
            { text: "Tôi làm việc ở một nhà hàng.", correct: false },
            { text: "Tôi làm việc ở một bệnh viện.", correct: false },
            { text: "Tôi làm việc ở một trường học.", correct: false }
        ]
    },
    {
        question: "Điền vào chỗ trống để hoàn thành câu: I am a ___. I help customers with their questions.",
        answers: [
            { text: "chef", correct: false },
            { text: "customer service representative(CSR)", correct: true },
            { text: "driver", correct: false },
            { text: "engineer", correct: false }
        ]
    },
    {
        question: "Viết lại câu sau bằng tiếng Anh: Tôi có một cuộc họp vào lúc 10 giờ sáng.",
        answers: [
            { text: "I have a meeting at 10 AM.", correct: true },
            { text: "I have a meeting at 5 PM.", correct: false },
            { text: "I have a meeting at 8 AM.", correct: false },
            { text: "I have a meeting at 12 PM.", correct: false }
        ]
    },
    {
        question: "Viết lại câu sau bằng tiếng Anh: Sếp của tôi rất tử tế và hỗ trợ.",
        answers: [
            { text: "My boss is very kind and supportive.", correct: true },
            { text: "My boss is very strict.", correct: false },
            { text: "My boss is very lazy.", correct: false },
            { text: "My boss is very intelligent.", correct: false }
        ]
    }
]

        }, {
            quizName: "quiz6",
            title: "Từ vựng mới - Phần 3",
            questions: [
    {
        question: "Từ nào là 'sếp'?",
        answers: [
            { text: "boss", correct: true },
            { text: "employee", correct: false },
            { text: "customer", correct: false },
            { text: "colleague", correct: false }
        ]
    },
    {
        question: "Từ nào là 'cuộc họp'?",
        answers: [
            { text: "meeting", correct: true },
            { text: "break", correct: false },
            { text: "presentation", correct: false },
            { text: "discussion", correct: false }
        ]
    },
    {
        question: "Từ nào là 'văn phòng'?",
        answers: [
            { text: "office", correct: true },
            { text: "school", correct: false },
            { text: "hospital", correct: false },
            { text: "restaurant", correct: false }
        ]
    },
    {
        question: "Từ nào là 'đồng nghiệp'?",
        answers: [
            { text: "colleague", correct: true },
            { text: "boss", correct: false },
            { text: "client", correct: false },
            { text: "teacher", correct: false }
        ]
    },
    {
        question: "Từ nào là 'khách hàng'?",
        answers: [
            { text: "customer", correct: true },
            { text: "worker", correct: false },
            { text: "manager", correct: false },
            { text: "friend", correct: false }
        ]
    }
]
        }, {
            quizName: "quiz7",
title: "Từ vựng mới - Phần 4",
questions: [
    {
        question: "Từ nào là 'nhân viên'?",
        answers: [
            { text: "employee", correct: true },
            { text: "manager", correct: false },
            { text: "boss", correct: false },
            { text: "teacher", correct: false }
        ]
    },
    {
        question: "Từ nào là 'giám đốc'?",
        answers: [
            { text: "director", correct: true },
            { text: "employee", correct: false },
            { text: "customer", correct: false },
            { text: "friend", correct: false }
        ]
    },
    {
        question: "Viết lại câu sau bằng tiếng Anh: Tôi làm việc ở một bệnh viện.",
        answers: [
            { text: "I work in a hospital.", correct: true },
            { text: "I work in a school.", correct: false },
            { text: "I work in a restaurant.", correct: false },
            { text: "I work in an office.", correct: false }
        ]
    },
    {
        question: "Viết lại câu sau bằng tiếng Anh: Tôi là nhân viên của công ty này.",
        answers: [
            { text: "I am an employee of this company.", correct: true },
            { text: "I am the boss of this company.", correct: false },
            { text: "I am a customer of this company.", correct: false },
            { text: "I am a colleague of this company.", correct: false }
        ]
    },
    {
        question: "Viết lại câu sau bằng tiếng Việt: My colleague is very friendly.",
        answers: [
            { text: "Đồng nghiệp của tôi rất thân thiện.", correct: true },
            { text: "Sếp của tôi rất thân thiện.", correct: false },
            { text: "Khách hàng của tôi rất thân thiện.", correct: false },
            { text: "Bạn của tôi rất thân thiện.", correct: false }
        ]
    },
    {
        question: "Viết lại câu sau bằng tiếng Việt: I have a meeting with my boss.",
        answers: [
            { text: "Tôi có một cuộc họp với sếp của tôi.", correct: true },
            { text: "Tôi có một cuộc họp với đồng nghiệp của tôi.", correct: false },
            { text: "Tôi có một cuộc họp với khách hàng của tôi.", correct: false },
            { text: "Tôi có một cuộc họp với bạn của tôi.", correct: false }
        ]
    }
]

        }, {
            quizName: "quiz8",
title: "Các câu hỏi nhỏ tổng hợp",
questions: [
    {
        question: "Viết lại câu sau bằng tiếng Anh: Tôi làm việc ở một công ty lớn.",
        answers: [
            { text: "I work at a big company.", correct: true },
            { text: "I work at a small company.", correct: false },
            { text: "I work at a school.", correct: false },
            { text: "I work at a hospital.", correct: false }
        ]
    },
    {
        question: "Viết lại câu sau bằng tiếng Anh: Anh ấy là kỹ sư phần mềm.",
        answers: [
            { text: "He is a software engineer.", correct: true },
            { text: "He is a doctor.", correct: false },
            { text: "He is a teacher.", correct: false },
            { text: "He is a lawyer.", correct: false }
        ]
    },
    {
        question: "Viết lại câu sau bằng tiếng Việt: My job is very interesting.",
        answers: [
            { text: "Công việc của tôi rất thú vị.", correct: true },
            { text: "Công việc của tôi rất nhàm chán.", correct: false },
            { text: "Công việc của tôi rất khó.", correct: false },
            { text: "Công việc của tôi rất dễ.", correct: false }
        ]
    },
    {
        question: "Viết lại câu sau bằng tiếng Việt: She has a meeting with her manager.",
        answers: [
            { text: "Cô ấy có một cuộc họp với quản lý của cô ấy.", correct: true },
            { text: "Cô ấy có một cuộc họp với đồng nghiệp của cô ấy.", correct: false },
            { text: "Cô ấy có một cuộc họp với khách hàng của cô ấy.", correct: false },
            { text: "Cô ấy có một cuộc họp với bạn của cô ấy.", correct: false }
        ]
    },
    {
        question: "Điền từ còn thiếu vào chỗ trống: I ____ my work at 9 AM every day.",
        answers: [
            { text: "start", correct: true },
            { text: "starts", correct: false },
            { text: "starting", correct: false },
            { text: "started", correct: false }
        ]
    },
    {
        question: "Điền từ còn thiếu vào chỗ trống: She ____ emails to her clients every morning.",
        answers: [
            { text: "sends", correct: true },
            { text: "send", correct: false },
            { text: "sending", correct: false },
            { text: "sended", correct: false }
        ]
    }
]


        }, {
            quizName: "quiz9",
title: "Đặt câu hỏi",
questions: [
    {
        question: "Viết lại câu sau bằng tiếng Anh: Bạn có thích đọc sách không?",
        answers: [
            { text: "Do you like reading books?", correct: true },
            { text: "Do you like watching TV?", correct: false },
            { text: "Do you like playing games?", correct: false },
            { text: "Do you like cooking?", correct: false }
        ]
    },
    {
        question: "Viết lại câu sau bằng tiếng Anh: Hôm nay thời tiết như thế nào?",
        answers: [
            { text: "How is the weather today?", correct: true },
            { text: "What is your plan today?", correct: false },
            { text: "Where are you going today?", correct: false },
            { text: "Who are you meeting today?", correct: false }
        ]
    },
    {
        question: "Viết lại câu sau bằng tiếng Việt: What time do you wake up?",
        answers: [
            { text: "Bạn thức dậy lúc mấy giờ?", correct: true },
            { text: "Bạn đi ngủ lúc mấy giờ?", correct: false },
            { text: "Bạn ăn sáng lúc mấy giờ?", correct: false },
            { text: "Bạn đi làm lúc mấy giờ?", correct: false }
        ]
    },
    {
        question: "Viết lại câu sau bằng tiếng Việt: Where do you live?",
        answers: [
            { text: "Bạn sống ở đâu?", correct: true },
            { text: "Bạn làm việc ở đâu?", correct: false },
            { text: "Bạn học ở đâu?", correct: false },
            { text: "Bạn đến từ đâu?", correct: false }
        ]
    },
    {
        question: "Điền từ còn thiếu vào chỗ trống: She ____ to the gym every morning.",
        answers: [
            { text: "goes", correct: true },
            { text: "go", correct: false },
            { text: "going", correct: false },
            { text: "gone", correct: false }
        ]
    },
    {
        question: "Điền từ còn thiếu vào chỗ trống: They ____ dinner at 7 PM.",
        answers: [
            { text: "have", correct: true },
            { text: "has", correct: false },
            { text: "having", correct: false },
            { text: "had", correct: false }
        ]
    }
]

        }, {
            quizName: "quiz10",
title: "Đặt câu hỏi - (Độ khó trung bình)",
questions: [
    {
        question: "Viết lại câu sau bằng tiếng Anh: Bạn thường làm gì vào cuối tuần?",
        answers: [
            { text: "What do you usually do on weekends?", correct: true },
            { text: "What do you like to eat on weekends?", correct: false },
            { text: "Where do you go on weekends?", correct: false },
            { text: "Who do you meet on weekends?", correct: false }
        ]
    },
    {
        question: "Viết lại câu sau bằng tiếng Anh: Bạn có thể giúp tôi làm bài tập này không?",
        answers: [
            { text: "Can you help me with this homework?", correct: true },
            { text: "Can you do this homework for me?", correct: false },
            { text: "Do you like this homework?", correct: false },
            { text: "Do you have this homework?", correct: false }
        ]
    },
    {
        question: "Viết lại câu sau bằng tiếng Việt: How often do you exercise?",
        answers: [
            { text: "Bạn tập thể dục bao lâu một lần?", correct: true },
            { text: "Bạn tập thể dục lúc nào?", correct: false },
            { text: "Bạn tập thể dục ở đâu?", correct: false },
            { text: "Bạn thích tập thể dục không?", correct: false }
        ]
    },
    {
        question: "Viết lại câu sau bằng tiếng Việt: What is your favorite hobby?",
        answers: [
            { text: "Sở thích yêu thích của bạn là gì?", correct: true },
            { text: "Bạn thích làm gì?", correct: false },
            { text: "Bạn thích ăn gì?", correct: false },
            { text: "Bạn thích đi đâu?", correct: false }
        ]
    },
    {
        question: "Điền từ còn thiếu vào chỗ trống: They ____ to visit their grandparents every summer.",
        answers: [
            { text: "go", correct: true },
            { text: "goes", correct: false },
            { text: "going", correct: false },
            { text: "gone", correct: false }
        ]
    },
    {
        question: "Điền từ còn thiếu vào chỗ trống: He ____ breakfast before going to work.",
        answers: [
            { text: "eats", correct: true },
            { text: "eat", correct: false },
            { text: "eating", correct: false },
            { text: "eated", correct: false }
        ]
    }
]

        }, {
            quizName: "quiz11",
title: "Đặt câu hỏi - (Độ khó cao hơn; Cần có chút hiểu biết về ngữ pháp)",
questions: [
    {
        question: "Viết lại câu sau bằng tiếng Anh: Bạn đã bao giờ đi du lịch nước ngoài chưa?",
        answers: [
            { text: "Have you ever traveled abroad?", correct: true },
            { text: "Do you like traveling abroad?", correct: false },
            { text: "Where do you travel abroad?", correct: false },
            { text: "When did you travel abroad?", correct: false }
        ]
    },
    {
        question: "Viết lại câu sau bằng tiếng Anh: Bạn nghĩ gì về bộ phim mới này?",
        answers: [
            { text: "What do you think about this new movie?", correct: true },
            { text: "Do you like this new movie?", correct: false },
            { text: "When did you watch this new movie?", correct: false },
            { text: "Where did you see this new movie?", correct: false }
        ]
    },
    {
        question: "Viết lại câu sau bằng tiếng Việt: How do you usually get to work?",
        answers: [
            { text: "Bạn thường đi làm bằng phương tiện gì?", correct: true },
            { text: "Bạn đi làm lúc nào?", correct: false },
            { text: "Bạn làm việc ở đâu?", correct: false },
            { text: "Bạn làm gì?", correct: false }
        ]
    },
    {
        question: "Viết lại câu sau bằng tiếng Việt: What is your plan for the next year?",
        answers: [
            { text: "Kế hoạch của bạn cho năm tới là gì?", correct: true },
            { text: "Bạn sẽ làm gì vào năm tới?", correct: false },
            { text: "Năm tới bạn sẽ đi đâu?", correct: false },
            { text: "Bạn thích làm gì năm tới?", correct: false }
        ]
    },
    {
        question: "Điền từ còn thiếu vào chỗ trống: She ____ finished her project before the deadline.",
        answers: [
            { text: "had", correct: true },
            { text: "has", correct: false },
            { text: "have", correct: false },
            { text: "having", correct: false }
        ]
    },
    {
        question: "Điền từ còn thiếu vào chỗ trống: If I ____ more time, I would travel more.",
        answers: [
            { text: "had", correct: true },
            { text: "have", correct: false },
            { text: "has", correct: false },
            { text: "having", correct: false }
        ]
    }
]

        }, {
            quizName: "quiz12",
title: "Câu hỏi tổng hợp - Cần có chút hiểu biết về ngữ pháp",
questions: [
    {
        question: "Điền từ còn thiếu vào chỗ trống: I usually ____ coffee in the morning.",
        answers: [
            { text: "drink", correct: true },
            { text: "eat", correct: false },
            { text: "take", correct: false },
            { text: "make", correct: false }
        ]
    },
    {
        question: "Điền từ còn thiếu vào chỗ trống: She ____ to the gym three times a week.",
        answers: [
            { text: "goes", correct: true },
            { text: "go", correct: false },
            { text: "going", correct: false },
            { text: "gone", correct: false }
        ]
    },
    {
        question: "Điền từ còn thiếu vào chỗ trống: They always ____ their homework after school.",
        answers: [
            { text: "do", correct: true },
            { text: "does", correct: false },
            { text: "doing", correct: false },
            { text: "done", correct: false }
        ]
    },
    {
        question: "Điền từ còn thiếu vào chỗ trống: He ____ his dog every evening.",
        answers: [
            { text: "walks", correct: true },
            { text: "walk", correct: false },
            { text: "walking", correct: false },
            { text: "walked", correct: false }
        ]
    },
    {
        question: "Điền từ còn thiếu vào chỗ trống: We ____ dinner at 7 PM.",
        answers: [
            { text: "have", correct: true },
            { text: "has", correct: false },
            { text: "having", correct: false },
            { text: "had", correct: false }
        ]
    },
    {
        question: "Điền từ còn thiếu vào chỗ trống: She ____ to music while working.",
        answers: [
            { text: "listens", correct: true },
            { text: "listen", correct: false },
            { text: "listening", correct: false },
            { text: "listened", correct: false }
        ]
    },
    {
        question: "Điền từ còn thiếu vào chỗ trống: They ____ to the park every weekend.",
        answers: [
            { text: "go", correct: true },
            { text: "goes", correct: false },
            { text: "going", correct: false },
            { text: "gone", correct: false }
        ]
    },
    {
        question: "Điền từ còn thiếu vào chỗ trống: He ____ a new car last month.",
        answers: [
            { text: "bought", correct: true },
            { text: "buy", correct: false },
            { text: "buys", correct: false },
            { text: "buying", correct: false }
        ]
    },
    {
        question: "Điền từ còn thiếu vào chỗ trống: We ____ to the beach for our vacation.",
        answers: [
            { text: "went", correct: true },
            { text: "go", correct: false },
            { text: "going", correct: false },
            { text: "gone", correct: false }
        ]
    },
    {
        question: "Điền từ còn thiếu vào chỗ trống: She ____ a beautiful dress at the party.",
        answers: [
            { text: "wore", correct: true },
            { text: "wear", correct: false },
            { text: "wears", correct: false },
            { text: "wearing", correct: false }
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
    const quiz6Btn = document.getElementById("quiz6-btn");
    const quiz7Btn = document.getElementById("quiz7-btn");
    const quiz8Btn = document.getElementById("quiz8-btn");
    const quiz9Btn = document.getElementById("quiz9-btn");
    const quiz10Btn = document.getElementById("quiz10-btn");
    const quiz11Btn = document.getElementById("quiz11-btn");
    const quiz12Btn = document.getElementById("quiz12-btn");

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
    quiz6Btn.addEventListener("click", () => {
        displayQuiz("quiz6");
    });
    quiz7Btn.addEventListener("click", () => {
        displayQuiz("quiz7");
    });
    quiz8Btn.addEventListener("click", () => {
        displayQuiz("quiz8");
    });
    quiz9Btn.addEventListener("click", () => {
        displayQuiz("quiz9");
    });
    quiz10Btn.addEventListener("click", () => {
        displayQuiz("quiz10");
    });
    quiz11Btn.addEventListener("click", () => {
        displayQuiz("quiz11");
    });
    quiz12Btn.addEventListener("click", () => {
        displayQuiz("quiz12");
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
        setTimeout(() => {
            document.getElementById('quizContent').classList.add('active');
        }, 10);
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
            clearInterval(timerInterval);
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