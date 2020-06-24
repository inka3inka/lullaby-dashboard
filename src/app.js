import '../styles/main.scss';
import {loadList, loadVideo, select, chooseList, addListElement} from "./utils";
import {showTime} from "./clock";

const selectList = document.querySelector('.select-list');
const addTaskButton = document.querySelector('.button__add-task');
const listInput = document.querySelector('.list-input');



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
    select(configuration);

    //Load list
    selectList.addEventListener(
      'click',
      () => loadList(configuration, selectList.options[selectList.selectedIndex].value));
    });



  //Show clock time
  showTime();

  // //Add task by click button
  addTaskButton.addEventListener('click', addListElement);

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







  // fetch("https://cors-anywhere.herokuapp.com/https://github.com/autioch/github-fetch-test/blob/master/index.html#L16", {
  //   method: 'GET'
  // })
  //   .then(resp => console.log(resp))
  //   // .then(resp => console.log(resp));

  // console.log(configuration);




  // loadList()

//******* Milestone 3 ***************
//List handler

  // function addListElement() {
  //   const newElement = document.createElement("li");
  //   list.appendChild(newElement);
  //   newElement.classList.add("list-element");
  //   newElement.innerHTML = `${listInput.value}
  //                           <div class="list-element__edit">
  //                             <input type="checkbox" class="checkbox">
  //                             <i class="far fa-edit"></i>
  //                             <i class="far fa-trash-alt"></i>
  //                           </div>`;
  //   listInput.value = "";
  //   addTaskButton.setAttribute("disabled", "true")
  // }
  //

  //




})


