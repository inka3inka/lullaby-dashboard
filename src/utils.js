const clock = document.querySelector('.clock');
const listContainer = document.querySelector('.list');
const list = document.querySelector('.list-elements');
const video = document.querySelector('.video');
const listName = document.querySelector('.list-name');
const addTaskButton = document.querySelector('.button__add-task');
const listInput = document.querySelector('.list-input');

//Load youtube video
export function loadVideo(data) {
  video.setAttribute("src", data.embeddedYoutubeVideo)
}

// Load to do list
export function loadList(data) {

  //List background
  listContainer.style.backgroundColor = data.savedLists[0].backgroundListColor;

  //List label
  listName.innerText = data.savedLists[0].label;
  listName.style.color = data.savedLists[0].fontListColor;

  //List elements
  data.savedLists[0].toDos.map(element => {
    const newElement = document.createElement("li");
    list.appendChild(newElement);
    newElement.style.color = element.color;
    newElement.classList.add("list-element");
    newElement.innerHTML =
      `${element.name}
       <div class="list-element__edit">
         <input type="checkbox" class="checkbox">
       </div>`;
  })
}