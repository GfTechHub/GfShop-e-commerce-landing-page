document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
});


// Flash Sales Countdown Timer (3 hours from now)
function startFlashCountdown(durationHours) {
  let endTime = new Date().getTime() + durationHours * 60 * 60 * 1000;
  
  let countdownEl = document.getElementById("flashCountdown");
  
  setInterval(() => {
    let now = new Date().getTime();
    let distance = endTime - now;
    
    if (distance < 0) {
      countdownEl.innerHTML = "EXPIRED";
      return;
    }
    
    let hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((distance / (1000 * 60)) % 60);
    let seconds = Math.floor((distance / 1000) % 60);
    
    countdownEl.innerHTML =
      String(hours).padStart(2, "0") + ":" +
      String(minutes).padStart(2, "0") + ":" +
      String(seconds).padStart(2, "0");
  }, 1000);
}

// Start a 3-hour flash sale countdown
startFlashCountdown(3);