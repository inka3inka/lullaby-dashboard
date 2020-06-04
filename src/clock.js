const clock = document.querySelector('.clock');

//Set time
export function showTime(){
  setInterval(() => {
    const data = new Date();
    clock.innerText =
      (data.getHours() < 10 ? "0" + data.getHours() : data.getHours()) + ":" +
      (data.getMinutes() < 10 ? "0" + data.getMinutes() : data.getMinutes());
  }, 1000);
}