function calculate() {
    let n = document.getElementById("num").value;

    let square = n * n;
    let cube = n * n * n;

    document.getElementById("result").innerHTML =
        "Square: " + square + "<br>Cube: " + cube;
}
