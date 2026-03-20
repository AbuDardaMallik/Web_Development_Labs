function check() {
    let n = document.getElementById("num").value;
    let res = (n % 2 === 0) ? "Even" : "Odd";
    document.getElementById("result").innerText = "Number is " + res;
  }
  