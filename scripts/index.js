const login = document.getElementById("login");
const register = document.getElementById("register");

register.addEventListener("click", storeUser);

function storeUser() {
    const user = document.getElementById("username");
    const pass = document.getElementById("password");
    
    if (user.value == "" || pass.value == "") {
        console.log("You have missing data!");
    } else {
        localStorage.setItem("username" , user.value);
        localStorage.setItem("password" , pass.value);
    }

    user.value = "";
    pass.value = "";

    console.log(localStorage);
}