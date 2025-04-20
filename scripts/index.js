const login = document.getElementById("login");
const register = document.getElementById("register");
//const users = [];
let curUser = {};
//localStorage.setItem("users", JSON.stringify(users));

register.addEventListener("click", storeUser);
login.addEventListener("click", loginUser);

let place = {
    username: "Danny",
    password: "123",
    score1: 0,
    score2: 0,
    score3: 0,
    score4: 0,
}

localStorage.setItem("currentUser", JSON.stringify(place));

let temp = JSON.parse(localStorage.getItem("currentUser"));

console.log(temp);

function storeUser() {
    loginReadyOff();
    infoMissingOff();
    errorPassOff();
    NAUserOff();
    alreadyUserOff();

    if (JSON.parse(localStorage.getItem("users")) == null) {
        localStorage.setItem("users", JSON.stringify([]));
    } else {

    const user = document.getElementById("username");
    const pass = document.getElementById("password");

    let userList = JSON.parse(localStorage.getItem("users"));

    console.log(userList);

    if (user.value == "" || pass.value == "") {
        console.log("You have missing data!");
        infoMissingOn();
    } else if (checkUsers(user.value)) {
        console.log("This user already exists!");
        alreadyUserOn();
    } else {
        userList.push({
            username: user.value,
            password: pass.value,
            score1: 0,
            score2: 0,
            score3: 0,
            score4: 0,
        })

        localStorage.setItem("users", JSON.stringify(userList));
        // localStorage.setItem("username" , user.value);
        // localStorage.setItem("password" , pass.value);
        // localStorage.setItem("score", 0)
        loginReadyOn();
    }

    user.value = "";
    pass.value = "";

    // console.log(localStorage);

    }
}

function loginUser() {
    loginReadyOff();
    infoMissingOff();
    errorPassOff();
    NAUserOff();
    alreadyUserOff();


    const user = document.getElementById("username");
    const pass = document.getElementById("password");

    // let userList = JSON.parse(localStorage.getItem("users"));

    if (user.value == "" || pass.value == "") {
        console.log("You have missing data!");
        infoMissingOn();
    } else if (checkUsers(user.value) && checkPassword(user.value, pass.value)){
        console.log("LOGGED IN!");
        window.location.href = "../pages/home.html";
    } else if (checkUsers(user.value) && !checkPassword(user.value, pass.value)) {
        console.log("Incorrect password!")
        errorPassOn();
    } else {
        console.log("USER DOES NOT EXIST! PLEASE REGISTER FIRST!")
        NAUserOn();
    }

    user.value = "";
    pass.value = "";

    // console.log(localStorage);
}

function checkUsers (username) {
    let userList = JSON.parse(localStorage.getItem("users"));

    console.log(userList);

    for (let i = 0; i < userList.length; i++) {
        if (userList[i].username == username) {
            console.log("User check true");

            return true;
        }
    }
    console.log("User check false");

    return false;
}

function checkPassword (username, password) {
    let userList = JSON.parse(localStorage.getItem("users"));

    console.log(userList);

    for (let i = 0; i < userList.length; i++) {
        console.log(userList[i].password);
        console.log(password);

        if (userList[i].username == username && userList[i].password == password) {
            console.log("Password check true");

            return true;
        }
    }
    console.log("Password check false");

    return false;
}

function infoMissingOn() {
    document.getElementById("missing-info").style.display = "block";
}

function infoMissingOff() {
    document.getElementById("missing-info").style.display = "none";
}

function loginReadyOn() {
    document.getElementById("ready-login").style.display = "block";
}

function loginReadyOff() {
    document.getElementById("ready-login").style.display = "none";
}

function errorPassOn() {
    document.getElementById("error-pass").style.display = "block";
}

function errorPassOff() {
    document.getElementById("error-pass").style.display = "none";
}

function NAUserOn() {
    document.getElementById("na-user").style.display = "block";
}

function NAUserOff() {
    document.getElementById("na-user").style.display = "none";
}

function alreadyUserOn() {
    document.getElementById("already-user").style.display = "block";
}

function alreadyUserOff() {
    document.getElementById("already-user").style.display = "none";
}