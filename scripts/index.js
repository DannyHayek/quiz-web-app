const login = document.getElementById("login");
const register = document.getElementById("register");

register.addEventListener("click", storeUser);

function storeUser() {
    const user = document.getElementById("username");
    const pass = document.getElementById("password");

    if (user.value == "" || pass.value == "") {
        console.log("You have missing data!");
        infoMissingOn();
    } else {
        localStorage.setItem("username" , user.value);
        localStorage.setItem("password" , pass.value);
        infoMissingOff();
    }

    user.value = "";
    pass.value = "";

    console.log(localStorage);
}

function infoMissingOn() {
    document.getElementById("missing-info").style.display = "block";
}

function infoMissingOff() {
    document.getElementById("missing-info").style.display = "none";
}