let history = [];

function calculate(operator) {

    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").textContent = "Enter valid numbers";
        return;
    }

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                document.getElementById("result").textContent = "Cannot divide by zero";
                return;
            }
            result = num1 / num2;
            break;
    }

    document.getElementById("result").textContent = "Result: " + result;

    // Save calculation in array
    const calculation = `${num1} ${operator} ${num2} = ${result}`;
    history.unshift(calculation);

    // Keep only last 5
    if (history.length > 5) {
        history.pop();
    }

    updateHistory();
}

function updateHistory() {
    const historyList = document.getElementById("historyList");
    historyList.innerHTML = "";

    history.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        historyList.appendChild(li);
    });
}
