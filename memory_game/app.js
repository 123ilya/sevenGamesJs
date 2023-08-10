const cardArray = [
  {
    name: "fries",
    img: "./images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "./images/cheeseburger.png",
  },
  {
    name: "hot-dog",
    img: "./images/hot-dog.png",
  },
  {
    name: "ice-cream",
    img: "./images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "./images/milkshake.png",
  },
  {
    name: "pizza",
    img: "./images/pizza.png",
  },
  {
    name: "fries",
    img: "./images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "./images/cheeseburger.png",
  },
  {
    name: "hot-dog",
    img: "./images/hot-dog.png",
  },
  {
    name: "ice-cream",
    img: "./images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "./images/milkshake.png",
  },
  {
    name: "pizza",
    img: "./images/pizza.png",
  },
];
//Метод массива sort() сортирует элементы массива. Если аргумент не передан, то аргументы массива
//будут приобразованны в строки и отсортированны в лексикографическом порядке.
//Так же в качестве аргумента может быть передана функция. Функция возвращает -1, 0, 1. Взависимости от
// результата определяется порядок сортируемых элементов массива(сперва сравниваються 1 со 2м, затем 2 с 3 и тд).
//Метод изменяет сам массив!
//В конкретном случае функция возвращает случайное число, лежащее в диапазоне от 0,5 до -0,5.
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const cardsChosen = [];
const cardsChosenIds = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "./images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}
createBoard();
function checkMatch() {
  const cards = document.querySelectorAll("img");
  console.log(cards);
  console.log("check for match!");
  if (cardsChosen[0] === cardsChosen[1]) {
    alert("You found a match!");
  }
  cards[cardsChosenIds[0].setAttribute("src", "./images/white.png")];
}

function flipCard() {
  console.log(cardArray);
  //Получаем значение атрибута "data-id" и записываем его в переменную cardId
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  console.log(cardsChosen);
  console.log(cardsChosenIds);
  // console.log("Clicked!", cardId);
  // console.log(cardsChosen);
  this.setAttribute("src", cardArray[cardId]["img"]);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
