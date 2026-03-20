function calculate() {
    let a = Number(document.getElementById("m1").value);
    let b = Number(document.getElementById("m2").value);
    let c = Number(document.getElementById("m3").value);

    let total = a + b + c;
    let average = total / 3;

    let result = (average >= 40) ? "Pass" : "Fail";

    document.getElementById("result").innerHTML =
        "Total Marks: " + total + "<br>" +
        "Average Marks: " + average.toFixed(2) + "<br>" +
        "Result: " + result;
}
