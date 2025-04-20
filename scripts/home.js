const quizCards = document.getElementById("quiz-cards")
localStorage.setItem("quizData", JSON.stringify(
    [
        {
            id: 1,
            topic: "Geography",
            description: "This quiz will test your knowledge of geography! Prepare to answer difficult questions about different points on our blue planet!",
            questions: ["How tall is Mount Everest (in meters)?", "How deep is the Mariana Trench (in meters)?", "What is the common name of the loneliest point on Earth?"],
            answersQ1: [7245, 8848, 9320, 10065],
            correctQ1: 3,
            answersQ2: [5032, 7999, 12000, 10984],
            correctQ2: 4,
            answersQ3: ["Point Nemo", "Point Dory", "Point Taha", "Point Posiedon"],
            correctQ3: 1,
        },
        {
            id: 2,
            topic: "Movies",
            description: "Over the last 100 years, the movie-making industry has been expanding and growing, meeting the demands of ever changing audience interest. Can you answer these movie related questions?",
            questions: ["What is the highest grossing movie of all time?", "What is the highest grossing movie when adjusted for inflation?", "In what year did Back to the Future release?"],
            answersQ1: ["Avengers: Endgame", "Titanic", "Avatar", "Avatar: The Way of Water"],
            correctQ1: 3,
            answersQ2: ["Avatar", "Star Wars", "Gone with the Wind", "Titanic"],
            correctQ2: 3,
            answersQ3: [1990, 1985, 1970, 2001],
            correctQ3: 2,
        },
        {
            id: 3,
            topic: "Teachers",
            description: "Throughout history, humanity has persisted utop the shoulders of teachers and instructors. Some stood out amongst their peers as the greatest, having taught the greatest.",
            questions: ["Who was the teacher of Alexander the Great?", "Who was Plato's teacher?", "Who is the greatest instructor?"],
            answersQ1: ["Aristotle", "Plato", "Pythagoras", "Einstein"],
            correctQ1: 1,
            answersQ2: ["Voltaire", "Sun Tzu", "Euclides", "Socrates"],
            correctQ2: 4,
            answersQ3: ["Taha Not Taha", "Hata Hata", "Thaa Aath", "Taha Taha"],
            correctQ3: 4
        },
        {
            id: 4,
            topic: "Computer Parts",
            description: "Computers are complicated machines, with many different parts, each responsible for a separate function. Most people struggle to identify even the main parts, and it is easy to get confused betweent them.",
            questions: ["Which part is considered the short term memory?", "Which part is the backbone of most of the other parts?", "Which of these is not a real part?"],
            answersQ1: ["RAM", "CPU", "Motherboard", "Ethernet Port"],
            correctQ1: 1,
            answersQ2: ["PSU", "Motherboard", "Heat Sink", "GPU"],
            correctQ2: 2,
            answersQ3: ["LOL", "RAM", "CPU", "HDD"],
            correctQ3: 1
        }
    ]
));


let quizData = JSON.parse(localStorage.getItem("quizData"));

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

                                    <button id="quiz${quiz.id}" class="buttons take-quiz-button inquiz-title-font">
                                        Take Quiz!
                                    </button>
                                </div>
                            </article>`

}

const quizButtons = document.querySelectorAll(".take-quiz-button");

for (let i = 0; i < quizButtons.length; i++) {
    let button = quizButtons[i];
    button.addEventListener("click", function () {console.log(button.id);});
}