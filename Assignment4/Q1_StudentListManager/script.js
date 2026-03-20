const studentList = document.getElementById("studentList");
const totalCount = document.getElementById("totalCount");

function addStudent() {

    const nameInput = document.getElementById("studentName");
    const name = nameInput.value.trim();

    if (name === "") {
        alert("Please enter student name");
        return;
    }

    // Create li element dynamically
    const li = document.createElement("li");
    li.textContent = name;

    // Create remove button dynamically
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "removeBtn";

    // Remove functionality
    removeBtn.onclick = function () {
        studentList.removeChild(li);
        updateCount();
    };

    // Append button to li
    li.appendChild(removeBtn);

    // Append li to ul
    studentList.appendChild(li);

    nameInput.value = "";
    updateCount();
}

// Update total student count
function updateCount() {
    totalCount.textContent = studentList.children.length;
}
