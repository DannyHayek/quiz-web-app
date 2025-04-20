let quizData = JSON.parse(localStorage.getItem("quizData"));
let curQuiz = quizData[0];

document.getElementById("quiz-name").innerHTML += `${curQuiz.topic}`;

