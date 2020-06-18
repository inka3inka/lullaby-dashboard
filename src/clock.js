const clock = document.querySelector('.clock');

//Set time
export function showTime(){
  setInterval(() => {
    const data = new Date();
    clock.innerText =
      (data.getHours() < 10 ? "0" + data.getHours() : data.getHours()) + ":" +
      (data.getMinutes() < 10 ? "0" + data.getMinutes() : data.getMinutes());
  }, 1000);
}

//Contrast clock's color

export function getContrastYIQ(hexcolor) {

  let r = parseInt(hexcolor.substr(1,2),16);
  let g = parseInt(hexcolor.substr(3,2),16);
  let b = parseInt(hexcolor.substr(5,2),16);
  let yiq = ((r*299)+(g*587)+(b*114))/1000;

  return (yiq >= 128) ? clock.style.color = '#0F0E0E' : clock.style.color = '#EBEAEA';   }