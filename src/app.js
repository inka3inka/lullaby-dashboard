import '../styles/main.scss';

window.addEventListener("DOMContentLoaded", () => {

//Elements
  const clock = document.querySelector('.clock');


  setInterval(() => {
    const data = new Date();
    clock.innerText = data.getHours() + ":" + data.getMinutes();
    console.log(data.getHours() + ":" + data.getMinutes())
  }, 1000)

})


