// Set launch date 30 days from now
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 30);

function updateCountdown() {
    const now = new Date();
    const timeLeft = launchDate - now;

    if (timeLeft <= 0) {
        document.getElementById("countdown").innerText = "We are Live!";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((timeLeft / (1000 * 60)) % 60);
    const secs = Math.floor((timeLeft / 1000) % 60);

    document.getElementById("countdown").innerText =
        `Launching in ${days}d ${hours}h ${mins}m ${secs}s`;
}

// Update every second
setInterval(updateCountdown, 1000);
updateCountdown();
