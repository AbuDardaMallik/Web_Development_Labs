function addNumbers() {
    var number1 = parseFloat(document.getElementById("num1").value);
    var number2 = parseFloat(document.getElementById("num2").value);

    var sum = number1 + number2;

    document.getElementById("result").innerHTML = 
    "Result: " + sum;
}
