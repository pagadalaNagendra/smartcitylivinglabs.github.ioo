
document.body.addEventListener('onload', focus());
document.addEventListener('keydown', detectSpaceKey);

function detectSpaceKey(event) {
    if (event.key === ' ') {
        showTime();
        initConfetti(); // Add confetti when Enter key is pressed
    }
}

function showTime() {
    var curtain = document.getElementById("curtain");
    curtain.className = "open";

    setTimeout(function () {
        window.location.href = "welcome.html";
    }, 2000);
}

