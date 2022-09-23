// import createCard from "./script";

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
