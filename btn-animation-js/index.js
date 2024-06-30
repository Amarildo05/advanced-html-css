const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");

const button = document.getElementById("btn");
button.addEventListener("click", btn);

function btn() {
  console.log(box1, box2, box3);
  box1.className += " loading-1";
  box2.className += " loading-2";
  box3.className += " loading-3";
}