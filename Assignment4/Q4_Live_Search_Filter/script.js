function filterItems() {

    const input = document.getElementById("searchInput").value.toLowerCase();
    const items = document.querySelectorAll("#itemList li");

    const itemArray = Array.from(items);

    itemArray.filter(item => {
        if (item.textContent.toLowerCase().includes(input)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
