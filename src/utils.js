import {getContrastYIQ} from "./clock";

const container = document.querySelector('.container');
const listElementsDone = document.querySelector('.list-elements-done');
const listElementsUndone = document.querySelector('.list-elements-undone');
const video = document.querySelector('.video');
const selectList = document.querySelector('.select-list');
const activeListName = document.querySelector('.active-list__label');
const activeListId = document.querySelector('.active-list__id');
const activeListEditInputName = document.querySelector('.active-list__name');
const activeListEditInputColor = document.querySelector('.active-list__background-color');
const activeListEditTodos = document.querySelector('.changed-list__todos');
const listOfLists = document.querySelector('.list-of-lists');
const optionsButtons = document.querySelector('.buttons__container');
const editListManager = document.querySelector('.edit-list__container');



//Load youtube video
export function loadVideo(data) {
  video.setAttribute("src", data.embeddedYoutubeVideo)
}


//Load lists' options - to check list to load

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
  listElementsDone.innerText = "";

  //List background
  container.style.backgroundColor = data.savedLists[listIndex].backgroundListColor;

  //Clock color
  getContrastYIQ(data.savedLists[listIndex].backgroundListColor);

  //List elements

    data.savedLists[listIndex].toDos.map(element => {
    const newElement = document.createElement("li");
    listElementsDone.appendChild(newElement);
    newElement.style.color = element.color;
    newElement.classList.add("list-element");
    newElement.innerHTML = element.name;
    newElement.addEventListener("click", (event) => {
      event.target.classList.toggle("checked");
      selection();
    });
    return newElement
  })

}

function selection() {
  const tasks = [...listElementsDone.children, ...listElementsUndone.children];
  const undone = tasks.filter(element => !element.classList.contains("checked"));
  const done = tasks.filter(element => element.classList.contains("checked"));

  done.forEach(element => listElementsDone.appendChild(element));
  undone.forEach(element => listElementsUndone.appendChild(element));

  localStorage.setItem("done", done);
  localStorage.setItem("undone", undone);

  console.log(localStorage);
}


/*List of lists */
export function editWindow(data) {
  listOfLists.innerHtml = data.savedLists.map(element => {
      const newElement = document.createElement("li");
      listOfLists.appendChild(newElement);
      newElement.innerHTML = `<li>${element.label}</li><button class="edit-list__button btn">Edit</button>`;
    }
  );

  const openEditListButton = document.querySelectorAll('.edit-list__button');
  [...openEditListButton].map((element, index) => {
    element.addEventListener("click", () => {
      changeVisibility(optionsButtons);
      changeVisibility(editListManager);

      /*Edited list*/
      activeListEditTodos.innerText = "";
      activeListName.innerText = data.savedLists[index].label;
      activeListId.value = data.savedLists[index].listId;
      activeListId.innerText = data.savedLists[index].listId;
      activeListEditInputName.value = data.savedLists[index].label;
      activeListEditInputColor.value = data.savedLists[index].backgroundListColor;

      data.savedLists[index].toDos.map(element => {
        const newElement = document.createElement("li");
        activeListEditTodos.appendChild(newElement);

        newElement.classList.add("list-element");
        newElement.innerHTML = `<div>
                                  <input type="text" class="list-input list-input__name" value="${element.name}">
                                  <input type="text" class="list-input list-input__color" value=${element.color}>
                                </div>
                                <div class="list-element__edit">
                                  <i class="far fa-trash-alt"></i>
                                </div>
      `;

        //Trash
        const remover = document.querySelectorAll('.changed-list__todos .fa-trash-alt');
        [...remover].map(element => {
          element.addEventListener("click", function (event) {
            activeListEditTodos.removeChild(this.parentElement.parentElement)
          })
        })
      });
    })
  })
}


//List handler

export function addListElement(todosList) {
  const newElement = document.createElement("li");
  todosList.appendChild(newElement);
  newElement.classList.add("list-element");
  newElement.innerHTML = `<div>
                            <input type="text" class="list-input list-input__name" placeholder="Add new task">
                            <input type="text" class="list-input list-input__color" placeholder="Add task's color">
                          </div>
                          <div class="list-element__edit">
                            <i class="far fa-trash-alt"></i>
                          </div>
`;
  // addTaskButton.setAttribute("disabled", "true");

  //Trash
  const remover = document.querySelectorAll('.fa-trash-alt');
  [...remover].map(element => element.addEventListener("click", function(event){todosList.removeChild(this.parentElement.parentElement)}))
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

export function download(content, fileName, contentType) {
  var a = document.createElement("a");
  var file = new Blob([content], {type: contentType});
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

