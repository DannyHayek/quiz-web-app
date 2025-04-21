const logoutButton = document.getElementById("logout-button");

logoutButton.addEventListener("click", logout);

function logout() {
    window.location.href = "../index.html";
}