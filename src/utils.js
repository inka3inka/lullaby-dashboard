const clock = document.querySelector('.clock');
const listContainer = document.querySelector('.list');
const list = document.querySelector('.list-elements');
const video = document.querySelector('.video');
const listName = document.querySelector('.list-name');
const addTaskButton = document.querySelector('.button__add-task');
const listInput = document.querySelector('.list-input');
const selectList = document.querySelector('.select-list')

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
  console.log(data.listIndex);

  //List background
  listContainer.style.backgroundColor = data.savedLists[listIndex].backgroundListColor;

  //List label
  listName.innerText = data.savedLists[listIndex].label;
  listName.style.color = data.savedLists[listIndex].fontListColor;

  //List elements
  data.savedLists[listIndex].toDos.map(element => {
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