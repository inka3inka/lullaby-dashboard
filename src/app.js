import '../styles/main.scss';

window.addEventListener("DOMContentLoaded", () => {

//Elements
  const clock = document.querySelector('.clock');
  const addTaskButton = document.querySelector('.button__add-task');
  const list = document.querySelector('.list-elements');


  setInterval(() => {
    const data = new Date();
    clock.innerText = data.getHours() + ":" + data.getMinutes();
    console.log(data.getHours() + ":" + data.getMinutes())
  }, 1000);

  function addListElement() {
    const newElement = document.createElement("li");
    list.appendChild(newElement).innerText = "Hello!";
  }

  addTaskButton.addEventListener('click', addListElement)






})


