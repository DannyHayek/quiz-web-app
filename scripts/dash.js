const logoutButton = document.getElementById("logout-button");
const userTable = document.getElementById("user-table");
const users = JSON.parse(localStorage.getItem("users"));

logoutButton.addEventListener("click", logout);

function logout() {
    window.location.href = "../index.html";
}

console.log(users);


for (let i = 0; i < users.length; i++) {
    let trID = "table-row" + i;
    console.log(users);
    userTable.innerHTML += `<tr id="${trID}" class = "table-row">
                                <td class = "inquiz-text-font table-data">${users[i].username}</td>
                                <td class = "inquiz-text-font table-data">${users[i].password}</td>
                            </tr>`

    let curRow = document.getElementById(trID);
    for (let j = 0; j < users[i].scores.length; j++) {
        curRow.innerHTML += `<td class = "inquiz-text-font table-data">${users[i].scores[j]}/3</td>`
    }                            
}