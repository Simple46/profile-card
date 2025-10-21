function showTime() {
  const now = new Date();
  const hour = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  // check for am/pm
  const ampm = hour >= 12 ? "PM" : "AM";
  const displayHour = (hour % 12 || 12).toString().padStart(2, "0");

  const timeString = `${displayHour}:${minutes}:${seconds} ${ampm}`;

  //update the time tag
  const timeTag = document.getElementById("currentTime");
  timeTag.textContent = timeString;
  timeTag.dateTime = now.toISOString();
}

// Initialize time immediately
showTime();

// Update time every second (optional - can be removed if static time is preferred)
setInterval(showTime, 1000);

// Ensure time is accurate on page load
window.addEventListener("DOMContentLoaded", updateTime);
