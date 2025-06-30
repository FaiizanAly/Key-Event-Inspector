const input = document.getElementById("keyInput");
const resultBox = document.getElementById("resultBox");

input.addEventListener("keydown", function (e) {
    resultBox.style.display = "block";

    document.getElementById("keyPressed").textContent = e.key;
    document.getElementById("keyCode").textContent = e.code;
    document.getElementById("keyKeyCode").textContent = e.keyCode;
    document.getElementById("asciiValue").textContent = e.key.length === 1 ? e.key.charCodeAt(0) : 'N/A';
    document.getElementById("charCode").textContent = e.charCode || 'N/A';
});
