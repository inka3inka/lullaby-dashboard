const clock = document.querySelector('.clock');

function formatPart(num) {
  return num.toString().padStart(2, '0');
}

function updateTime() {
  const date = new Date();
  const hours = formatPart(date.getHours());
  const minutes = formatPart(date.getMinutes());
  
  clock.innerText = hours + ':' + minutes;
}

//Set time
export function showTime() {
  setInterval(updateTime, 1000);
}
