let quizData = JSON.parse(localStorage.getItem("quizData"));
console.log(localStorage.getItem("currentQuiz"));
let currentQuizID = parseInt(localStorage.getItem("currentQuiz").charAt(4)) - 1;
console.log(currentQuizID);
let curQuiz = quizData[currentQuizID];

document.getElementById("quiz-name").innerHTML += `${curQuiz.topic}`;

