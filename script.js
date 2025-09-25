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





function toggleSearch() {
  let overlay = document.getElementById("searchOverlay");
  overlay.style.height = overlay.style.height === "100%" ? "0%" : "100%";
}






// Search overlay open
document.getElementById("searchBtn").addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("searchOverlay").style.display = "block";
});

// Search overlay close (inside overlay must have id="closeSearch")
document.getElementById("closeSearch").addEventListener("click", function() {
  document.getElementById("searchOverlay").style.display = "none";
});




// Search overlay open
document.getElementById("searchBtn").addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("searchOverlay").style.display = "block";
});

// Search overlay close (inside overlay must have id="closeSearch")
document.getElementById("closeSearch").addEventListener("click", function() {
  document.getElementById("searchOverlay").style.display = "none";
});



// Auto-slide every  1seconds
const flashSale = document.querySelector('#flashSaleCarousel');
const carousel = new bootstrap.Carousel(flashSale, {
  interval: 500, // 2.5s per item
  ride: 'carousel'
});