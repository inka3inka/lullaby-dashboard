import '../styles/main.scss';

window.addEventListener("DOMContentLoaded", () => {

//Elements
  const clock = document.querySelector('.clock');
  const addTaskButton = document.querySelector('.button__add-task');
  const list = document.querySelector('.list-elements');
  const listInput = document.querySelector('.list-input');


  setInterval(() => {
    const data = new Date();
    clock.innerText =
      (data.getHours() < 10 ? "0" + data.getHours() : data.getHours()) + ":" +
      (data.getMinutes() < 10 ? "0" + data.getMinutes() : data.getMinutes());
  }, 1000);

  function addListElement() {
    const newElement = document.createElement("li");
    list.appendChild(newElement);
    newElement.classList.add("list-element");
    newElement.innerHTML = `${listInput.value}<input type="checkbox" class="checkbox">`;
    // listInput.value = ""
  }

  addTaskButton.addEventListener('click', addListElement)






})


