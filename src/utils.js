const clock = document.querySelector('.clock');
const container = document.querySelector('.container');
const list = document.querySelector('.list');
const listElements = document.querySelector('.list-elements');
const video = document.querySelector('.video');
const listName = document.querySelector('.list-name');
const addTaskButton = document.querySelector('.button__add-task');
const listInput = document.querySelector('.list-input');
const selectList = document.querySelector('.select-list');

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

  //List elements
  data.savedLists[listIndex].toDos.map(element => {
    const newElement = document.createElement("li");
    listElements.appendChild(newElement);
    newElement.style.color = element.color;
    newElement.classList.add("list-element");
    newElement.innerHTML = element.name;
    newElement.addEventListener("click", (event) => event.target.classList.toggle("checked"))
  })

}

