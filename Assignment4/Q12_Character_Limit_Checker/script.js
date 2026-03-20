function checkLimit() {

    const textArea = document.getElementById("textArea");
    const remaining = document.getElementById("remaining");

    const maxLength = 200;
    const currentLength = textArea.value.length;

    const charactersLeft = maxLength - currentLength;

    remaining.textContent = charactersLeft;

    // Extra safety (prevents typing beyond limit)
    if (currentLength >= maxLength) {
        textArea.value = textArea.value.substring(0, maxLength);
    }
}
