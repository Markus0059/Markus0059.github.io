// import createCard from "./script";


// -------- Skills JS ---------------

const skills = document.querySelector(".carousel");
const skills2 = document.querySelector(".photo");

const pageWidth = document.documentElement.scrollWidth;
const mySkills = [
  "images/front.png",
  "images/Bootstrap.png",
  "images/sql.jpg",
  "images/Ruby.png",
  "images/Rails.png",
  "images/Php.png",
  "images/Symfony.png",
]




function suppElement(element) {
  element.remove();
}

function addElement() {
  mySkills.forEach((element) => {

    const img = document.createElement("img");
    img.src = element;
    skills2.appendChild(img);
  }
  )
}


if (skills2.offsetWidth < 600) {
  suppElement(skills);
  addElement();
}

// -----------WebSites JS ---------------

const mySites = [
  "images/amazones/lesamazones-accueil.png",
  "images/menuiserie.jpeg",
  "images/road2wheels.jpeg",
]

const buttonInAct = document.querySelectorAll('.btn-inact');
const buttonAct = document.querySelector(".btn-act");
const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
const button = document.querySelectorAll('button');
const imgSite = document.getElementById("image-site");



button1.addEventListener('click', changeClass);
button2.addEventListener('click', changeClass);
button3.addEventListener('click', changeClass);

button1.site = mySites[0];
button2.site = mySites[1];
button3.site = mySites[2];

function changeClass(event) {
  console.log(event);
  button.forEach((element) => element.className = "btn-inact");
  event.target.className = "btn-act";
  imgSite.src = event.target.site;
}
