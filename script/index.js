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

const myLiens = [
  "https://github.com/DonGrosseto/LES_AMAZONES",
  "https://github.com/markus0059/menuiserie",
  "https://github.com/Koddak/road2wheels",
]

const texts = [
  "Projet réalisé au Wagon de Lille . Application mobile destinée essentiellement aux femmes afin que celles-ci puisse"
  + " voyager ensemble en toute sécurité",
  "Project personnel pour une entreprise de menuiserie familiale. Possibilité à l'administrateur d'ajouter des réalisations de chantier en attribuant une catégorie." +
  " Par la suite, le client pourra ajouter un commentaire sur une réalisation",
  " Project réalisé au Wagon de Lille . Application de location de motos entre particulier avec possibilité de localisation. API google map utilisée.",
]

const technos = [
  "- Ruby / Rails / Bootstrap / JS",
  "- Ruby / Rails / JS",
  "- Ruby / Rails / Bootstrap / JS",
]

const buttonInAct = document.querySelectorAll('.btn-inact');
const buttonAct = document.querySelector(".btn-act");
const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
const button = document.querySelectorAll('.but');
const imgSite = document.getElementById("image-site");
const lienSite = document.getElementById("btn-details");
const textSite = document.getElementById("text-site");
const technoSite = document.getElementById("text-techno");



button1.addEventListener('click', changeClass);
button2.addEventListener('click', changeClass);
button3.addEventListener('click', changeClass);

button1.site = mySites[0];
button2.site = mySites[1];
button3.site = mySites[2];

button1.lien = myLiens[0];
button2.lien = myLiens[1];
button3.lien = myLiens[2];

button1.text = texts[0];
button2.text = texts[1];
button3.text = texts[2];

button1.techno = technos[0];
button2.techno = technos[1];
button3.techno = technos[2];



function changeClass(event) {
  console.log(event);
  button.forEach((element) => element.className = "btn-inact");
  event.target.className = "btn-act";
  imgSite.src = event.target.site;
  lienSite.href = event.target.lien;
  textSite.textContent = event.target.text;
  technoSite.textContent = event.target.techno;
}
