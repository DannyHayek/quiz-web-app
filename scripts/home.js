const curUser = localStorage.getItem("username");
const quizCards = document.getElementById("quiz-cards")
localStorage.setItem("quizData", JSON.stringify(
    [
        {
            id: 1,
            topic: "Mount Everest",
            description: "This quiz is about the tallest point on our planet! Not many people know the exact height of Mount Everest, but can you answer this question?",
            answers: [7245, 8848, 9320, 10065],
            correct: 2
        },
        {
            id: 2,
            topic: "Highest Grossing Movie",
            description: "Over the last 100 years, the movie-making industry has been expanding and growing, meeting the demands of ever changing audience interest and the leaderboard of the highest grossing has constantly shifted, especially when inflation and reruns are taken into account.",
            answers: ["Avengers: Endgame", "Titanic", "Avatar", "Avatar: The Way of Water"],
            correct: 3
        },
        {
            id: 3,
            topic: "Greatest Instructor",
            description: "The technical field of computer science is vast and unprecendented. The advancements in this field have been rapid and continuous, and so for new students to enter the domain, great instructors must take it upon themselves to continue the flow of information. But of all the instructors, only one can truly be considered the greatest.",
            answers: ["Taha Not Taha", "Hata Hata", "Thaa Aath", "Taha Taha"],
            correct: 3
        },
        {
            id: 4,
            topic: "Computer Parts",
            description: "Computers are complicated machines, with many different parts, each responsible for a separate function. Most people struggle to identify even the main parts, and it is easy to get confused betweent them. Can you tell which part is not actually a computer part?",
            answers: ["LOL", "RAM", "CPU", "HDD"],
            correct: 1
        }
    ]
));



let quizData = JSON.parse(localStorage.getItem("quizData"));

document.getElementById("welcome-user").innerHTML = `Welcome ${curUser}`

for (let i = 0; i < quizData.length; i++) {
    const quiz = quizData[i];
  
    quizCards.innerHTML += `<article class="flex column flex-space-evenly">
                                <img class="image-above-card" src="../assets/question-mark.svg" alt="question marks">
                                <div class="homepage-quiz-card flex column flex-space-evenly">
                                    <h1 class="inquiz-title-font quiz-card-titles">${quiz.topic}</h1>

                                    <p class="inquiz-text-font quiz-card-description">
                                        ${quiz.description}
                                    </p>

                                    <button class="buttons take-quiz-button inquiz-title-font">
                                        Take Quiz!
                                    </button>
                                </div>
                            </article>`

}