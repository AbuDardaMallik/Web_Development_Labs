let flag = true;

function changeText() {
    let p = document.getElementById("para");

    if (flag) {
        p.innerText = "Welcome to JavaScript!";
        p.style.color = "red";
    } else {
        p.innerText = "Hello World";
        p.style.color = "blue";
    }

    flag = !flag;
}
