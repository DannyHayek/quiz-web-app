const quizCards = document.getElementById("quiz-cards");
const users = JSON.parse(localStorage.getItem("users"));


localStorage.setItem("quizData", JSON.stringify(
    [
        {
            id: 0,
            topic: "Geography",
            description: "This quiz will test your knowledge of geography! Prepare to answer difficult questions about different points on our blue planet!",
            questions: ["How tall is Mount Everest (in meters)?", "How deep is the Mariana Trench (in meters)?", "What is the common name of the loneliest point on Earth?"],
            answers: [[7245, 8848, 9320, 10065], [5032, 7999, 12000, 10984], ["Point Nemo", "Point Dory", "Point Taha", "Point Posiedon"]],
            correct: [9320, 10984, "Point Nemo"],
        },
        {
            id: 1,
            topic: "Movies",
            description: "Over the last 100 years, the movie-making industry has been expanding and growing, meeting the demands of ever changing audience interest. Can you answer these movie related questions?",
            questions: ["What is the highest grossing movie of all time?", "What is the highest grossing movie when adjusted for inflation?", "In what year did Back to the Future release?"],
            answers: [["Avengers: Endgame", "Titanic", "Avatar", "Avatar: The Way of Water"], ["Avatar", "Star Wars", "Gone with the Wind", "Titanic"], [1990, 1985, 1970, 2001]],
            correct: ["Avatar", "Gone with the Wind", 1985],
        },
        {
            id: 2,
            topic: "Teachers",
            description: "Throughout history, humanity has persisted utop the shoulders of teachers and instructors. Some stood out amongst their peers as the greatest, having taught the greatest.",
            questions: ["Who was the teacher of Alexander the Great?", "Who was Plato's teacher?", "Who is the greatest instructor?"],
            answers: [["Aristotle", "Plato", "Pythagoras", "Einstein"], ["Voltaire", "Sun Tzu", "Euclides", "Socrates"], ["Taha Not Taha", "Hata Hata", "Thaa Aath", "Taha Taha"]],
            correct: ["Aristotle", "Socrates", "Taha Taha"],
        },
        {
            id: 3,
            topic: "Computer Parts",
            description: "Computers are complicated machines, with many different parts, each responsible for a separate function. Most people struggle to identify even the main parts, and it is easy to get confused betweent them.",
            questions: ["Which part is considered the short term memory?", "Which part is the backbone of most of the other parts?", "Which of these is not a real part?"],
            answers: [["RAM", "CPU", "Motherboard", "Ethernet Port"], ["PSU", "Motherboard", "Heat Sink", "GPU"], ["LOL", "RAM", "CPU", "HDD"]],
            correct: ["RAM", "Motherboard", "LOL"],
        }
    ]
));


let quizData = JSON.parse(localStorage.getItem("quizData"));
let userScores = [0, 0, 0, 0];

for (let i = 0; i < users.length; i++) {
    if (users[i].username == JSON.parse(localStorage.getItem("currentUser")).username) {
        userScores = users[i].scores;
        console.log(userScores);
        break;
    }
}


document.getElementById("welcome-user").innerHTML = `Welcome ${JSON.parse(localStorage.getItem("currentUser")).username}`

for (let i = 0; i < quizData.length; i++) {
    const quiz = quizData[i];
  
    quizCards.innerHTML += `<article class="flex column flex-space-evenly">
                                <img class="image-above-card" src="../assets/question-mark.svg" alt="question marks">
                                <div class="homepage-quiz-card flex column flex-space-evenly">
                                    <h1 class="inquiz-title-font quiz-card-titles">${quiz.topic}</h1>

                                    <p class="inquiz-text-font quiz-card-description">
                                        ${quiz.description}
                                    </p>

                                    <div id = "btn-score">
                                        <button id="quiz${quiz.id}" class="buttons take-quiz-button inquiz-title-font">
                                            Take Quiz!
                                        </button>
                                    </div>
                                    
                                </div>
                            </article>`

    let btnScoreDiv = document.getElementById("btn-score");

    console.log(userScores[i]);

    if (userScores[i] != 0) {
        btnScoreDiv.innerHTML =`<h2 id = "question-num" class="inquiz-title-font">YOUR SCORE ON THIS QUIZ</h2>

                                <p id = "question-num" class="inquiz-text-font flex flex-center">
                                    ${userScores[i]}/3
                                </p>`
    } 
}

const quizButtons = document.querySelectorAll(".take-quiz-button");

for (let i = 0; i < quizButtons.length; i++) {
    let button = quizButtons[i];
    button.addEventListener("click", function () {
        console.log(button.id);
        localStorage.setItem("currentQuiz", button.id)
        window.location.href = "../pages/quiz.html";
    });

    console.log(localStorage.getItem("currentQuiz"));
}

console.log(localStorage.getItem("currentQuiz"));

