let quizData = JSON.parse(localStorage.getItem("quizData"));
let currentQuizID = parseInt(localStorage.getItem("currentQuiz").charAt(4));
console.log(currentQuizID);
let curQuiz = quizData[currentQuizID];
const questionsCards = document.getElementById("question-card");
const curUser = JSON.parse(localStorage.getItem("currentUser"));
const curQuizScore = "score" + (curQuiz.id + 1);

console.log(curQuizScore);

document.getElementById("quiz-name").innerHTML += `${curQuiz.topic}`;

for (let i = 0; i < curQuiz.questions.length; i++) {

    questionsCards.innerHTML += `<section id="${i}" class = "question-card flex flex-space-evenly">
                                    <div class = "flex column flex-space-evenly quiz-text">
                                        <img class="question-image" src="../assets/question-mark.svg" alt="question mark">

                                        <h2 id = "question-num" class="inquiz-title-font">QUESTION ${i + 1}</h2>

                                        <p id = "question-text" class="inquiz-text-font">
                                            ${curQuiz.questions[i]}
                                        </p>
                                    </div> 

                                    <div id = "buttons${i}" class="flex column flex-space-evenly">
                                    </div>
                                </section>`


    let curQues = `buttons${i}`;
    let buttonsDiv = document.getElementById(curQues);

    for (let j = 0; j < curQuiz.answers[i].length; j++) {
        buttonsDiv.innerHTML += `<div class="flex column flex-space-evenly">
            <button class="buttons take-quiz-button inquiz-title-font">
                ${curQuiz.answers[i][j]}
            </button>
        </div>`;
    }
}

const answerButtons = document.querySelectorAll(".buttons");

console.log(answerButtons);

for (let i = 0; i < answerButtons.length; i++) {
    let button = answerButtons[i];
    button.addEventListener("click", answerSelected);
}

function answerSelected(e) {
    const questionID = e.target.parentNode.parentNode.parentNode.id;

    console.log(curQuiz.correct[questionID], e.target.innerText);
    //console.log(curUser.scores);

    if (curQuiz.correct[questionID] == e.target.innerText) {
        console.log("CORRECT");
        curUser.scores[curQuiz.id]++;
        console.log(curUser.scores);
    } else {
        console.log("WRONG");
    }

    console.log(e.target.parentNode.parentNode);
    e.target.parentNode.parentNode.remove();
}
