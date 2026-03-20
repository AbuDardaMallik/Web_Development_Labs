let currentOTP = "";

function generateOTP() {

    // Generate 6-digit random OTP
    currentOTP = Math.floor(100000 + Math.random() * 900000);

    document.getElementById("generatedOtp").textContent =
        "Generated OTP: " + currentOTP;

    document.getElementById("result").textContent = "";
}

function verifyOTP() {

    const userInput = document.getElementById("userOtp").value;

    if (userInput == currentOTP) {
        document.getElementById("result").textContent = "Valid OTP";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").textContent = "Invalid OTP";
        document.getElementById("result").style.color = "red";
    }
}
