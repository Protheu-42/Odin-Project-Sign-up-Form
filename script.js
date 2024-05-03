const password = document.querySelector("#password");
const cPassword = document.querySelector("#cPassword");
const cPasswordSpan = document.querySelector("#cPasswordSpan");

// variables for regex comparison
const size = document.querySelector("#size");
const number = document.querySelector("#number");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const special = document.querySelector("#special")

cPassword.addEventListener("keyup", checkPassword);
cPassword.addEventListener("change", checkPassword);
password.addEventListener("keyup", regexCheck);
password.addEventListener("change", regexCheck);



function checkPassword() {
    if (password.value === cPassword.value && password.value != "") {
            console.log("congratulations")
            cPassword.classList.remove("invalid")
            cPasswordSpan.textContent = ""
    } else {
        cPassword.className = "invalid"
        cPasswordSpan.textContent = "Both passwords doesn't match"
    }
}

function regexCheck() {
    if (/[a-z]/.test(password.value)) {
        lowercase.className = "valid";
    }
    if (!/[a-z]/.test(password.value)) {
        lowercase.classList.remove("valid");
    }
    if (/[A-Z]/.test(password.value)) {
        uppercase.className = "valid";
    }
    if (!/[A-Z]/.test(password.value)) {
        uppercase.classList.remove("valid")
    }
    if (/[\!\@\#\$\%\&\*\-\=\/\?\:\;]/.test(password.value)) {
        special.className = "valid";
    }
    if (!/[\!\@\#\$\%\&\*\-\=\/\?\:\;]/.test(password.value)) {
        special.classList.remove("valid");
    }
    if (/.{6,12}/.test(password.value)) {
        size.className = "valid";
    }
    if (!/.{6,12}/.test(password.value)) {
        size.classList.remove("valid");
    }
    if (/.[0-9]/.test(password.value)) {
        number.className = "valid";
    }
    if (!/[0-9]/.test(password.value)) {
        number.classList.remove("valid");
    }
}
