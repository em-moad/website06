
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// YES button takes you to another page
yesBtn.addEventListener("click", function () {
    window.location.href = "yes.html";
});

// Make NO run across the entire screen
function moveNoButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

// Detect when the mouse touches NO
noBtn.addEventListener("mouseenter", moveNoButton);
