let quizData = JSON.parse(localStorage.getItem("quizData"));
let curQuiz = quizData[localStorage.getItem("currentQuiz")];

document.getElementById("quiz-name").innerHTML += `${curQuiz.topic}`;



