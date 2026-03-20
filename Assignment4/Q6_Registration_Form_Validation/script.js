function validateForm() {

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Get error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmError = document.getElementById("confirmError");

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";

    let isValid = true;

    // Name validation
    if (name === "") {
        nameError.textContent = "Name cannot be empty";
        isValid = false;
    }

    // Email validation (Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        emailError.textContent = "Enter valid email address";
        isValid = false;
    }

    // Password validation (Uppercase + Number)
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/;

    if (!passwordRegex.test(password)) {
        passwordError.textContent =
            "Password must contain at least 1 uppercase letter and 1 number";
        isValid = false;
    }

    // Confirm password match
    if (password !== confirmPassword) {
        confirmError.textContent = "Passwords do not match";
        isValid = false;
    }

    return isValid;
}
