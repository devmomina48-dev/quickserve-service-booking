// ===============================
// QUICKSERVE AUTH JS
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // LOGIN FORM
    // ===============================

    const loginForm = document.querySelector("#loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const email = document.querySelector("#email").value.trim();
            const password = document.querySelector("#password").value.trim();

            // Validation
            if (email === "" || password === "") {
                alert("Please fill in all fields.");
                return;
            }

            if (!email.includes("@")) {
                alert("Please enter a valid email address.");
                return;
            }

            if (password.length < 6) {
                alert("Password must be at least 6 characters.");
                return;
            }

            // Temporary login
            alert("Login successful!");

            // Home page
            window.location.href = "index.html";
        });
    }


    // ===============================
    // SIGN UP FORM
    // ===============================

    const signupForm = document.querySelector("signupForm");

    if (signupForm) {

        signupForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const password = document.querySelector("#password").value.trim();
            const confirmPassword =
                document.querySelector("#confirm-password").value.trim();


            // Validation
            if (
                name === "" ||
                email === "" ||
                password === "" ||
                confirmPassword === ""
            ) {
                alert("Please fill in all fields.");
                return;
            }


            if (!email.includes("@")) {
                alert("Please enter a valid email address.");
                return;
            }


            if (password.length < 6) {
                alert("Password must be at least 6 characters.");
                return;
            }


            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }


            // Temporary signup
            alert("Account created successfully!");

            // Login page
            window.location.href = "login.html";
        });
    }

});