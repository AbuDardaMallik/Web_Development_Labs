function validateForm() {

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let address = document.getElementById("address").value;

    let namePattern = /^[A-Za-z]{6,}$/;
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let mobilePattern = /^[0-9]{10}$/;

    if (!namePattern.test(fname)) {
        alert("First Name must contain only alphabets and minimum 6 characters");
        return false;
    }

    if (lname === "") {
        alert("Last Name cannot be empty");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be minimum 6 characters");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Invalid Email ID");
        return false;
    }

    if (!mobilePattern.test(mobile)) {
        alert("Mobile number must contain exactly 10 digits");
        return false;
    }

    if (address === "") {
        alert("Address cannot be empty");
        return false;
    }

    alert("Registration Successful!");
    return true;
}
