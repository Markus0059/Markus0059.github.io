const images = document.querySelector('.images');


const Myimages = [
  "images/amazones/lesamazones-accueil.png",
  "images/amazones/lesamazones-create.png",
  "images/amazones/lesamazones-all trajets.png",
  "images/amazones/lesamazones-trajet-info.png",
  "images/amazones/lesamazones-trajet.png",
  "images/amazones/lesamazones-chat.png",
  "images/amazones/lesamazones-dashboard.png",
  "images/amazones/lesamazones-dashboard2.png",
];

// function createCard() {
//   const amazonesImages = document.createElement('img');
//   amazonesImages.classList.add('img-site');
//   images.appendChild(amazonesImages);
// }


function createCard(imageUrl) {
  const card = document.createElement("div");
  card.classList.add("card");
  images.appendChild(card);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  card.appendChild(cardHeader);

  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `url(${imageUrl})`;
  cardImg.classList.add("card-img");
  cardHeader.appendChild(cardImg);
}

Myimages.forEach((element) => createCard(element));
