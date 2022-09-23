const cards = document.querySelector(".cards");


const images = [
  "images/amazones/lesamazones-accueil.png",
  "images/amazones/lesamazones-create.png",
  "images/amazones/lesamazones-all-trajets.png",
  "images/amazones/lesamazones-trajet-info.png",
  "images/amazones/lesamazones-trajet.png",
  "images/amazones/lesamazones-chat.png",
  "images/amazones/lesamazones-dashboard.png",
  "images/amazones/lesamazones-dashboard2.png",
];

function createCard(imageUrl) {
  const card = document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  card.appendChild(cardHeader);

  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `url(${imageUrl})`;
  cardImg.classList.add("card-img");
  cardHeader.appendChild(cardImg);
}

/* Step 4: Create a for loop, for each element of the array */

images.forEach((element) => createCard(element));
