const login = document.getElementById("login");
const register = document.getElementById("register");

register.addEventListener("click", storeUser);
login.addEventListener("click", loginUser);

function storeUser() {
    loginReadyOff();
    infoMissingOff();
    errorPassOff();
    NAUserOff();

    const user = document.getElementById("username");
    const pass = document.getElementById("password");

    if (user.value == "" || pass.value == "") {
        console.log("You have missing data!");
        infoMissingOn();
    } else {
        localStorage.setItem("username" , user.value);
        localStorage.setItem("password" , pass.value);
        loginReadyOn();
    }

    user.value = "";
    pass.value = "";

    console.log(localStorage);
}

function loginUser() {
    loginReadyOff();
    infoMissingOff();
    errorPassOff();
    NAUserOff();


    const user = document.getElementById("username");
    const pass = document.getElementById("password");

    if (user.value == "" || pass.value == "") {
        console.log("You have missing data!");
        infoMissingOn();
    } else {
        if (user.value == localStorage.getItem("username") && pass.value == localStorage.getItem("password")) {
            console.log("LOGGED IN!")
            
        } else if (user.value == localStorage.getItem("username") && pass.value != localStorage.getItem("password")){
            console.log("Incorrect password!")
            errorPassOn();
        } else {
            console.log("USER DOES NOT EXIST! PLEASE REGISTER FIRST!")
            NAUserOn();
        }
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