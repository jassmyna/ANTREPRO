document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
    const loginButton = document.getElementById("login");
    const registerButton = document.getElementById("register");

   // Switch to Login Form
   loginButton?.addEventListener("click", () => {
    container.classList.remove("active"); // Use "active" instead of "right-panel-active"
    });

    // Switch to Register Form
    registerButton?.addEventListener("click", () => {
        container.classList.add("active"); // Use "active" instead of "right-panel-active"
    });

    // Form Validation - Prevent Empty Fields
    const registerForm = document.querySelector(".sign-up form");
    const loginForm = document.querySelector(".sign-in form");

    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            const name = document.querySelector("input[name='name']").value.trim();
            const email = document.querySelector("input[name='email']").value.trim();
            const password = document.querySelector("input[name='password']").value.trim();

            if (name === "" || email === "" || password === "") {
                e.preventDefault();
                alert("Toate câmpurile trebuie completate!");
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            const email = document.querySelector(".sign-in input[name='email']").value.trim();
            const password = document.querySelector(".sign-in input[name='password']").value.trim();

            if (email === "" || password === "") {
                e.preventDefault();
                alert("Introdu email-ul și parola pentru a continua!");
            }
        });
    }
});