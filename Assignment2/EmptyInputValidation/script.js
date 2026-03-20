function validate() {
    let input = document.getElementById("textInput").value;
    let message = document.getElementById("message");

    if (input.trim() === "") {
        message.innerText = "⚠ Warning: Field cannot be empty!";
        message.style.color = "red";
    } else {
        message.innerText = "Input submitted successfully!";
        message.style.color = "green";
    }
}
