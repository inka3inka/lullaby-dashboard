import {getContrastYIQ} from "./clock";

const clock = document.querySelector('.clock');
const container = document.querySelector('.container');
const list = document.querySelector('.list');
const listElements = document.querySelector('.list-elements');
const video = document.querySelector('.video');
const listName = document.querySelector('.list-name');
const selectList = document.querySelector('.select-list');
const newTodos = document.querySelector('.new-list__todos');
const listInputName = document.querySelector('.list-input__name');
const listInputColor = document.querySelector('.list-input__color');
const addTaskButton = document.querySelector('.button__add-task');
const activeListName = document.querySelector('.active-list__label');
const activeListEditInputName = document.querySelector('.active-list__name');
const activeListEditInputColor = document.querySelector('.active-list__background-color');



//Load youtube video
export function loadVideo(data) {
  video.setAttribute("src", data.embeddedYoutubeVideo)
}


//Load lists' options

export function select(data) {
  selectList.innerHTML = "";
  data.map((list,idx) => {
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

  /*Edited list*/
  activeListName.innerText = data.savedLists[listIndex].label;
  activeListEditInputName.value = data.savedLists[listIndex].label;
  activeListEditInputColor.value = data.savedLists[listIndex].backgroundListColor;



}

//List handler

export function addListElement() {
  const newElement = document.createElement("li");
  newTodos.appendChild(newElement);
  newElement.classList.add("list-element");
  newElement.innerHTML = `<div 
                            style="color:${listInputColor.value}" 
                            name="${listInputName.value}"
                            color="${listInputColor.value}"
                            >
                            ${listInputName.value}
                          </div>
                          <div class="list-element__edit">
                            <i class="far fa-edit"></i>
                            <i class="far fa-trash-alt"></i>
                          </div>
`;
  listInputName.value = "";
  listInputColor.value = "";
  addTaskButton.setAttribute("disabled", "true");

  //Trash
  const remover = document.querySelectorAll('.fa-trash-alt');
  // console.log([...remover]);
  [...remover].map(element => element.addEventListener("click", function(event){newTodos.removeChild(this.parentElement.parentElement)}))

  //Edit
  const editor = document.querySelectorAll('.fa-edit');
  [...editor].map(element => element.addEventListener("click", function(event){
    listInputName.value = this.parentElement.parentElement.firstChild.getAttribute('name');
    listInputColor.value = this.parentElement.parentElement.firstChild.getAttribute('color');
    newTodos.removeChild(this.parentElement.parentElement);
    addTaskButton.removeAttribute("disabled")
  }))
}



//Change visibility

export function changeVisibility(element) {
    element.classList.toggle("hidden");

}

//New list object

function List(label, listId, backgroundListColor, toDos) {
  this.label = label;
  this.listId = listId;
  this.backgroundListColor = backgroundListColor;
  this.toDos = toDos
}

export function saveList(label, listId, backgroundListColor, toDos) {
  return new List(label, listId, backgroundListColor, toDos);

}
