const password = document.querySelector("#password")
const cPassword = document.querySelector("#cPassword")
const cPasswordSpan = document.querySelector("#cPasswordSpan") 

// cPassword.addEventListener("keyup", () =>{
//     if (password.value === cPassword.value) {
//         console.log("congratulations")
//     }
//     console.log(cPassword.value, password.value);
// })

cPassword.addEventListener("keyup", checkPassword);
cPassword.addEventListener("change", checkPassword);


function checkPassword() {
    if (password.value === cPassword.value && password.value != "") {
            console.log("congratulations")
        }
    cPassword.className = "invalid"
    cPasswordSpan.textContent = "Both passwords doesn't match"

}
