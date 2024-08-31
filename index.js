const clockContainer = document.querySelector(".clock-container");
const p = document.createElement("p");

setInterval(() => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hours = hours > 12 ? hours - 12 : hours;

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  const result = `${hours}:${minutes}:${seconds}`;

  p.textContent = result;

  clockContainer.appendChild(p);
}, 1000);
