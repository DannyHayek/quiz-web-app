const curUser = localStorage.getItem("username");

document.getElementById("welcome-user").innerHTML = `Welcome ${curUser}`

console.log(document.getElementById("welcome-user").value);

console.log(localStorage);
console.log(curUser);