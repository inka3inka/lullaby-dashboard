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

//   /*List of lists */
//   listOfLists.innerHtml = data.savedLists.map(element => {
//       const newElement = document.createElement("li");
//       listOfLists.appendChild(newElement);
//       newElement.innerHTML = `<li>${element.label}</li><button class="edit-list__button btn">Edit</button>`
//
//     }
//
//
//   );
//   const openEditListButton = document.querySelectorAll('.edit-list__button');
//   console.log(openEditListButton);
//
//   [...openEditListButton].map(element => {
//     element.addEventListener("click", () => {
//       changeVisibility(optionsButtons);
//       changeVisibility(editListManager);
//     });
//   })
//
//   /*Edited list*/
//   activeListEditTodos.innerText = "";
//   activeListName.innerText = data.savedLists[listIndex].label;
//   activeListEditInputName.value = data.savedLists[listIndex].label;
//   activeListEditInputColor.value = data.savedLists[listIndex].backgroundListColor;
//
//   data.savedLists[listIndex].toDos.map(element => {
//     const newElement = document.createElement("li");
//     activeListEditTodos.appendChild(newElement);
//     // newElement.style.color = element.color;
//     // newElement.classList.add("list-element");
//
//     newElement.classList.add("list-element");
//     newElement.innerHTML = `<div>
//                             <input type="text" class="list-input list-input__name" value=${element.name}>
//                             <input type="text" class="list-input list-input__color" value=${element.color}>
//                           </div>
//                           <div class="list-element__edit">
//                             <i class="far fa-trash-alt"></i>
//                           </div>
// `;
//
//     // newElement.innerHTML = `<div>Name: <input type="text" value=${element.name}></div><div>Color: <input type="text" value=${element.color}></div><div class="list-element__edit">
//     //                         <i class="far fa-trash-alt"></i>
//     //                       </div>`;
//   //Trash
//       const remover = document.querySelectorAll('.changed-list__todos .fa-trash-alt');
//       // console.log([...remover]);
//       [...remover].map(element => element.addEventListener("click", function(event){activeListEditTodos.removeChild(this.parentElement.parentElement)}))
//
//   })



}


/*List of lists */
export function editWindow(data) {

  listOfLists.innerHtml = data.savedLists.map(element => {
      const newElement = document.createElement("li");
      listOfLists.appendChild(newElement);
      newElement.innerHTML = `<li>${element.label}</li><button class="edit-list__button btn">Edit</button>`

    }


  );
}

// const openEditListButton = document.querySelectorAll('.edit-list__button');
// console.log(openEditListButton);
//
// [...openEditListButton].map(element => {
//   element.addEventListener("click", () => {
//     changeVisibility(optionsButtons);
//     changeVisibility(editListManager);
//   });
// })
//
// /*Edited list*/
// activeListEditTodos.innerText = "";
// activeListName.innerText = data.savedLists[listIndex].label;
// activeListEditInputName.value = data.savedLists[listIndex].label;
// activeListEditInputColor.value = data.savedLists[listIndex].backgroundListColor;
//
// data.savedLists[listIndex].toDos.map(element => {
//   const newElement = document.createElement("li");
//   activeListEditTodos.appendChild(newElement);
//   // newElement.style.color = element.color;
//   // newElement.classList.add("list-element");
//
//   newElement.classList.add("list-element");
//   newElement.innerHTML = `<div>
//                             <input type="text" class="list-input list-input__name" value=${element.name}>
//                             <input type="text" class="list-input list-input__color" value=${element.color}>
//                           </div>
//                           <div class="list-element__edit">
//                             <i class="far fa-trash-alt"></i>
//                           </div>
// `;
//
//   // newElement.innerHTML = `<div>Name: <input type="text" value=${element.name}></div><div>Color: <input type="text" value=${element.color}></div><div class="list-element__edit">
//   //                         <i class="far fa-trash-alt"></i>
//   //                       </div>`;
//   //Trash
//   const remover = document.querySelectorAll('.changed-list__todos .fa-trash-alt');
//   // console.log([...remover]);
//   [...remover].map(element => element.addEventListener("click", function(event){activeListEditTodos.removeChild(this.parentElement.parentElement)}))
//
// })

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
  // console.log([...remover]);
  [...remover].map(element => element.addEventListener("click", function(event){todosList.removeChild(this.parentElement.parentElement)}))

  //Edit
  // const editor = document.querySelectorAll('.fa-edit');
  // [...editor].map(element => element.addEventListener("click", function(event){
  //   listInputName.value = this.parentElement.parentElement.firstChild.getAttribute('name');
  //   listInputColor.value = this.parentElement.parentElement.firstChild.getAttribute('color');
  //   newTodos.removeChild(this.parentElement.parentElement);
  //   addTaskButton.removeAttribute("disabled")
  // }))
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
