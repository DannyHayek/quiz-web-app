const logoutButton = document.getElementById("logout-button");
const userTable = document.getElementById("user-table");
const users = JSON.parse(localStorage.getItem("users"));

logoutButton.addEventListener("click", logout);

function logout() {
    window.location.href = "../index.html";
}

console.log(users);


for (let i = 0; i < users.length; i++) {
    console.log(users);
    userTable.innerHTML += `<tr id="table-row">
                                <td class = "inquiz-text-font table-row">${users[i].username}</td>
                                <td class = "inquiz-text-font table-row">${users[i].password}</td>
                                <td class = "inquiz-text-font table-row">${users[i].scores[0]}/3</td>
                                <td class = "inquiz-text-font table-row">${users[i].scores[1]}/3</td>
                                <td class = "inquiz-text-font table-row">${users[i].scores[2]}/3</td>
                                <td class = "inquiz-text-font table-row">${users[i].scores[3]}/3</td>
                            </tr>`

    // let curRow = document.getElementById("table-row");
    // for (let j = 0; j < users.scores.length; j++) {
    //     curRow.innerHTML += `<td class = "inquiz-text-font table-row">${users[j].password}</td>`
    // }

                                
}