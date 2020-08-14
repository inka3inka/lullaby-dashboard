import 'whatwg-fetch';
import '../styles/main.scss';
import {
  loadList,
  loadVideo,
  select,
  addListElement,
  changeVisibility,
  saveList, editWindow, download,
} from "./utils";
import {showTime} from "./clock";
import Pickr from '@simonwep/pickr';
import '@simonwep/pickr/dist/themes/classic.min.css';

const selectList = document.querySelector('.select-list');
const addTaskButtonNewList = document.querySelector('.new-list__container .button__add-task');
const addTaskButtonEditedList = document.querySelector('.edit-list__container .button__add-task');
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
const editListManager = document.querySelector('.edit-list__container');
const saveChangesButton = document.querySelector('.button__save-changes');
const activeListEditInputName = document.querySelector('.active-list__name');
const activeListEditInputColor = document.querySelector('.active-list__background-color');
const activeListEditTodos = document.querySelector('.changed-list__todos');
const activeListId = document.querySelector('.active-list__id');
const newTodos = document.querySelector('.new-list__todos');
const listOfLists = document.querySelector('.list-of-lists');
const exportFile = document.querySelector('.export__button');
const list = document.querySelector('.list');
// const pickr = document.querySelector('.pickr');


window.addEventListener("DOMContentLoaded", () => {

//Fetch json

  // let myRequest = new Request('../configuration.json');
  let myRequest = 'https://raw.githubusercontent.com/inka3inka/lullaby-dashboard/master/configuration.json';

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
        'change',
        () => loadList(configuration, selectList.options[selectList.selectedIndex].value));

      //Show lists' options
      optionsButton.addEventListener("click", () => {
        changeVisibility(optionsContainer);
        changeVisibility(list);
        editWindow(configuration);
      });

      //Close list's options
      close.addEventListener("click", () => {

        /*Repeated*/
        changeVisibility(optionsContainer);
        if (list.classList.contains("hidden")) {changeVisibility(list)};
        if (!newListManager.classList.contains("hidden")) {changeVisibility(newListManager)};
        if (!editListManager.classList.contains("hidden")) {changeVisibility(editListManager)};
        if (optionsButtons.classList.contains("hidden")) {changeVisibility(optionsButtons)};
        listName.value = "";
        backgroundListColor.value = "";
        newListElements.innerHTML = "";
        listOfLists.innerHTML = "";
      });

      //Open add new list container
      openNewListManagerButton.addEventListener("click", () => {
        changeVisibility(optionsButtons);
        changeVisibility(newListManager);

      });

      //Add task by click button
      addTaskButtonNewList.addEventListener('click', () => addListElement(newTodos));
      addTaskButtonEditedList.addEventListener('click', () => addListElement(activeListEditTodos))


      //Save edited current list's elements

      saveChangesButton.addEventListener("click", () => {

        function ToDos(name, color) {
          this.name = name;
          this.color = color
        }

        const listId = activeListId.value;
        const array = Array.from(activeListEditTodos.children);
        const toDos = array.map(element => new ToDos(element.firstChild.children[0].value, element.firstChild.children[1].value));
        const changedList = saveList(activeListEditInputName.value, listId, activeListEditInputColor.value, toDos);
        delete configuration.savedLists[listId-1];
        configuration.savedLists[listId-1] = changedList;
        select(configuration.savedLists);

        /*Repeated*/
        changeVisibility(optionsContainer);
        if (list.classList.contains("hidden")) {changeVisibility(list)};
        if (!newListManager.classList.contains("hidden")) {changeVisibility(newListManager)};
        if (!editListManager.classList.contains("hidden")) {changeVisibility(editListManager)};
        if (optionsButtons.classList.contains("hidden")) {changeVisibility(optionsButtons)};
        listName.value = "";
        backgroundListColor.value = "";
        newListElements.innerHTML = "";
        listOfLists.innerHTML = "";
      })


      //Key press effects
      saveListButton.addEventListener('keyup', function(event) {
        //Add task by press Enter key
        if (event.keyCode === 13) {
          event.preventDefault();
          addTaskButtonNewList.click();
        }
        //Validate input value
        else if (saveListButton.value.trim() != "") {
          addTaskButtonNewList.removeAttribute("disabled")
        }
        else {
          addTaskButtonNewList.setAttribute("disabled", "true")
        }
      })

      saveListButton.addEventListener("click", () => {
          function ToDos(name, color) {
            this.name = name;
            this.color = color
          }

          const listId = configuration.savedLists.length + 1;
          const array = Array.from(newListElements.children);
          const newList = saveList(listName.value, listId, backgroundListColor.value, array.map(element => new ToDos(element.firstChild.children[0].value, element.firstChild.children[1].value))
          )
          configuration.savedLists.push(newList);

          select(configuration.savedLists)

        /*Repeated*/
        changeVisibility(optionsContainer);
        if (list.classList.contains("hidden")) {changeVisibility(list)};
        if (!newListManager.classList.contains("hidden")) {changeVisibility(newListManager)};
        if (!editListManager.classList.contains("hidden")) {changeVisibility(editListManager)};
        if (optionsButtons.classList.contains("hidden")) {changeVisibility(optionsButtons)};
        listName.value = "";
        backgroundListColor.value = "";
        newListElements.innerHTML = "";
        listOfLists.innerHTML = "";
        }
      )

      exportFile.addEventListener('click', () => {
        const exported = JSON.stringify(configuration);
        download(exported, 'json.txt', 'text/plain');
      })

    });


  //Show clock time
  showTime();



  const pickers = document.querySelector('.color-pickers');
  const btn = document.querySelector('.picker__button');


  btn.addEventListener('click', () => {
    const newElement = document.createElement('div');
    pickers.appendChild(newElement);

    const pickr = new Pickr({
      el: newElement,
      default: '#42445A',
      theme: 'classic',
      lockOpacity: true,

      swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
      ],

      components: {
        preview: true,
        opacity: true,
        hue: true,

        interaction: {
          hex: true,
          rgba: true,
          hsva: true,
          input: true,
          clear: true,
          save: true
        }
      }
    });
  });



})



