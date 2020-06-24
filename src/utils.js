import {getContrastYIQ} from "./clock";

const clock = document.querySelector('.clock');
const container = document.querySelector('.container');
const list = document.querySelector('.list');
const listElements = document.querySelector('.list-elements');
const video = document.querySelector('.video');
const listName = document.querySelector('.list-name');
const selectList = document.querySelector('.select-list');
const newTodos = document.querySelector('.new-list__todos');
const listInput = document.querySelector('.list-input');
const addTaskButton = document.querySelector('.button__add-task');


//Load youtube video
export function loadVideo(data) {
  video.setAttribute("src", data.embeddedYoutubeVideo)
}


//Load lists' options

export function select(data) {
  data.savedLists.map((list,idx) => {
    const newElement = document.createElement("option");
    selectList.appendChild(newElement);
    newElement.setAttribute("value", idx);
    newElement.innerHTML = list.label;
  })

}


// Load to do list
export function loadList(data, listIndex) {
  listElements.innerText = "";

  //List background
  container.style.backgroundColor = data.savedLists[listIndex].backgroundListColor;

  //Clock color
  getContrastYIQ(data.savedLists[listIndex].backgroundListColor);

  //List elements
  // const array = [];
  // const addOrRemove = (arr, item) => arr.includes(item) ? arr.filter(i => i !== item) : [ ...arr, item ];
  data.savedLists[listIndex].toDos.map(element => {
    const newElement = document.createElement("li");
    listElements.appendChild(newElement);
    newElement.style.color = element.color;
    newElement.classList.add("list-element");
    newElement.innerHTML = element.name;
    newElement.addEventListener("click", (event) => {
      event.target.classList.toggle("checked");
      // array.push(event.target);

      // console.log(array);

    });
  })

}

//List handler

export function addListElement() {
  const newElement = document.createElement("li");
  newTodos.appendChild(newElement);
  newElement.classList.add("list-element");
  newElement.innerHTML = `${listInput.value}
                          <div class="list-element__edit">
                            <i class="far fa-edit"></i>
                            <i class="far fa-trash-alt"></i>
                          </div>
`;
  listInput.value = "";
  addTaskButton.setAttribute("disabled", "true")
}


//Change visibility

export function changeVisibility(element) {
    element.classList.toggle("hidden");

}
