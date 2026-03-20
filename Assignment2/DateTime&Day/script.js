function showDateTime() {
    let now = new Date();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let date = now.toLocaleDateString();
    let time = now.toLocaleTimeString();
    let day = days[now.getDay()];

    document.getElementById("output").innerHTML =
        "Date: " + date + "<br>" +
        "Time: " + time + "<br>" +
        "Day: " + day;
}
