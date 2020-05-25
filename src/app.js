import '../styles/main.scss';

window.addEventListener("DOMContentLoaded", () => {

//Elements
  const clock = document.querySelector('.clock');
  const addTaskButton = document.querySelector('.button__add-task');
  const list = document.querySelector('.list-elements');
  const listInput = document.querySelector('.list-input');

//Set time
  setInterval(() => {
    const data = new Date();
    clock.innerText =
      (data.getHours() < 10 ? "0" + data.getHours() : data.getHours()) + ":" +
      (data.getMinutes() < 10 ? "0" + data.getMinutes() : data.getMinutes());
  }, 1000);

//List handler

  function addListElement() {
    const newElement = document.createElement("li");
    list.appendChild(newElement);
    newElement.classList.add("list-element");
    newElement.innerHTML = `${listInput.value}
                            <div class="list-element__edit">
                              <input type="checkbox" class="checkbox">
                              <i class="far fa-edit"></i>
                              <i class="far fa-trash-alt"></i>
                            </div>`;
    listInput.value = "";
    addTaskButton.setAttribute("disabled", "true")
  }

  //Add task by click button
  addTaskButton.addEventListener('click', addListElement);

  //Key press effects
  listInput.addEventListener('keyup', function(event) {
    //Add task by press Enter key
    if (event.keyCode === 13) {
      event.preventDefault();
      addTaskButton.click();
    }
    //Validate input value
    else if (listInput.value.trim() != "") {
      addTaskButton.removeAttribute("disabled")
    }
    else {
      addTaskButton.setAttribute("disabled", "true")
    }
  })



})


