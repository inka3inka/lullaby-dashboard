const clock = document.querySelector('.clock');
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

  //List label
  listName.innerText = data.savedLists[0].label;

  //List elements
  data.savedLists[0].toDos.map(element => {
    const newElement = document.createElement("li");
    list.appendChild(newElement);
    newElement.classList.add("list-element");
    newElement.innerHTML =
      `${element.name}
       <div class="list-element__edit">
         <input type="checkbox" class="checkbox">
       </div>`;
  })
}