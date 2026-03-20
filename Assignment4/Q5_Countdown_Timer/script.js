let interval;

function startTimer() {

    let seconds = parseInt(document.getElementById("secondsInput").value);
    const display = document.getElementById("timerDisplay");

    if (isNaN(seconds) || seconds <= 0) {
        display.textContent = "Enter valid seconds";
        return;
    }

    clearInterval(interval); // Stop previous timer if any

    display.textContent = seconds;

    interval = setInterval(function () {

        seconds--;
        display.textContent = seconds;

        if (seconds <= 0) {
            clearInterval(interval);
            display.textContent = "Time Over";
        }

    }, 1000);
}
