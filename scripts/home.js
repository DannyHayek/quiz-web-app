const curUser = localStorage.getItem("username");
const quizzes = [
    {
        id: 1,
        topic: "Mount Everest",
        description: "This quiz is about the tallest point on our planet! Not many people know the exact height of Mount Everest, but can you answer this question? When you are on the peak, you are almost at the edge of the atmosphere!",
        answers: [7245, 8848, 9320, 10065],
        correct: 2
    },
    {
        id: 2,
        topic: "Highest Grossing Movie",
        description: "Over the last 100 years, the movie-making industry has been expanding and growing, meeting the demands of ever changing audience interest, but during this time, several amazing movies released to great acclaim, earning large amounts of money, but the leaderboard of the highest grossing has constantly shifted, especially when inflation and reruns are taken into account.",
        answers: ["Avengers: Endgame", "Titanic", "Avatar", "Avatar: The Way of Water"],
        correct: 3
    },
    {
        id: 3,
        topic: "Greatest Instructor",
        description: "The technical field of computer science is vast and unprecendented. The advancements in this field have been rapid and continuous, and so for new students to enter the domain, great instructors must take it upon themselves to continue the flow of information. But of all the instructors, only one can truly be considered the greatest.",
        answers: ["Taha Not Taha", "Hata Hata", "Thaa Aath", "Taha Taha"],
        correct: 3
    }
]

document.getElementById("welcome-user").innerHTML = `Welcome ${curUser}`

