// Check if user already logged in (after refresh)
window.onload = function () {

    const storedUser = localStorage.getItem("username");

    if (storedUser) {
        showWelcome(storedUser);
    }
};

function login() {

    const username = document.getElementById("username").value.trim();

    if (username === "") {
        alert("Enter username");
        return;
    }

    // Save username in localStorage
    localStorage.setItem("username", username);

    showWelcome(username);
}

function showWelcome(name) {

    document.getElementById("loginSection").style.display = "none";
    document.getElementById("welcomeSection").style.display = "block";

    document.getElementById("welcomeMessage").textContent =
        "Welcome back, " + name + "!";
}

function logout() {

    // Remove from localStorage
    localStorage.removeItem("username");

    document.getElementById("loginSection").style.display = "block";
    document.getElementById("welcomeSection").style.display = "none";
}
