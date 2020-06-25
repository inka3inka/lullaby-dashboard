import '../styles/main.scss';
import {
  loadList,
  loadVideo,
  select,
  addListElement,
  changeVisibility,
  saveList,
} from "./utils";
import {showTime} from "./clock";

const selectList = document.querySelector('.select-list');
const addTaskButton = document.querySelector('.button__add-task');
const listInput = document.querySelector('.list-input');
const optionsButton = document.querySelector('.options__button');
const optionsContainer = document.querySelector('.options__container');
const optionsButtons = document.querySelector('.buttons__container');
const close = document.querySelector('.fa-window-close');
const newListManager = document.querySelector('.new-list__container');
const openNewListManagerButton = document.querySelector('.add-new-list__button');
const saveListButton = document.querySelector('.button__save-list');
const listName = document.querySelector('.list-label');
const backgroundListColor = document.querySelector('.background-color');
const newListElements = document.querySelector('.new-list__todos');
const openEditListButton = document.querySelector('.edit-list__button');
const editListManager = document.querySelector('.edit-list__container');
const saveChangesButton = document.querySelector('.button__save-changes');
const activeListEditInputName = document.querySelector('.active-list__name');
const activeListEditInputColor = document.querySelector('.active-list__background-color');





window.addEventListener("DOMContentLoaded", () => {

//Fetch json

  let myRequest = new Request('../configuration.json');
  // let myRequest = 'https://raw.githubusercontent.com/inka3inka/lullaby-dashboard/master/configuration.json';

  fetch(myRequest)
    .then(resp => resp.json())
    .then((configuration) => {

  //Load configuration

    //Load youtube video
    loadVideo(configuration);

    //Load landing page list
    loadList(configuration, 0);

    //Load list options
    select(configuration.savedLists);

    //Load list
    selectList.addEventListener(
      'click',
      () => loadList(configuration, selectList.options[selectList.selectedIndex].value));

      //Show lists' options
      optionsButton.addEventListener("click", () => {
        changeVisibility(optionsContainer);

      });

      //Close list's options
      close.addEventListener("click", () => {
        changeVisibility(optionsContainer);
        if (!newListManager.classList.contains("hidden")) {changeVisibility(newListManager)};
        if (!editListManager.classList.contains("hidden")) {changeVisibility(editListManager)};
        if (optionsButtons.classList.contains("hidden")) {changeVisibility(optionsButtons)};
        listName.value = "";
        backgroundListColor.value = "";
        newListElements.innerHTML = "";
      });

      //Open add new list container
      openNewListManagerButton.addEventListener("click", () => {
        changeVisibility(optionsButtons);
        changeVisibility(newListManager);

      });

      //Add task by click button
      addTaskButton.addEventListener('click', addListElement);

      //Open add new list container
      openEditListButton.addEventListener("click", () => {
        changeVisibility(optionsButtons);
        changeVisibility(editListManager);

      });

      //Save edited current list's elements

      saveChangesButton.addEventListener("click", () => {
        console.log("Hello");
        const listId = selectList.options[selectList.selectedIndex].value;
        console.log(selectList.options[selectList.selectedIndex]);
        const toDos = configuration.savedLists[listId].toDos;
        console.log(toDos);
        const changedList = saveList(activeListEditInputName.value, listId, activeListEditInputColor.value, toDos);
        delete configuration.savedLists[listId];
        configuration.savedLists.push(changedList);
        select(configuration.savedLists)


      })


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

      saveListButton.addEventListener("click", () => {

        function ToDos(name, color) {
          this.name = name;
          this.color = color
        }

        const listId = configuration.savedLists.length + 1;
        const array = Array.from(newListElements.children);
        console.log(array.map(element => new ToDos(element.children[0].attributes.name.value, element.children[0].attributes.color.value)));
        const newList = saveList(listName.value, listId, backgroundListColor.value, array.map(element => new ToDos(element.children[0].attributes.name.value, element.children[0].attributes.color.value))

        )
        configuration.savedLists.push(newList);

        select(configuration.savedLists)

      }

      )



    });


  //Show clock time
  showTime();



})


