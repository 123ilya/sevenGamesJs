//Создаём массив, элементами которого являються объекты. В свою очередь объект состоит из двух свойств -
// name - название карточки, img - путь к изображению.
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
//Сортируем массив случайным образом.
cardArray.sort(() => 0.5 - Math.random());
//Получаем html элемент с  id = 'grid' и записываем его в переменную gridDisplay
const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
//Создаём массив, в который записываем названия выбранных карточек (значение свойства name )
let cardsChosen = [];
//Создаём массив и записываем в него id, сформированные для карточек
let cardsChosenIds = [];
let cardsWon = [];
//-------------------------------------------------------------------------------------------------------------------
//Функция создаёт группу html элементов <img> с соответствующими атрибутами
function createBoard() {
  //Количество итераций соответствует длинне массива cardArray
  for (let i = 0; i < cardArray.length; i++) {
    //Создаем html элемент <img>
    const card = document.createElement("img");
    //Добавляем к созданному элементу атрибут src, а в качестве значения этого атребута указываем  путь на
    //изображение обратной( с узором) стороны карточки
    card.setAttribute("src", "./images/blank.png");
    //Так же добавляем атрибут data-id, а в качестве значения атрибута указываем индекс итерации
    card.setAttribute("data-id", i);
    //Дабавляем обработчик событий на наш элемент (созданный на данной конкретной итерации цикла). Обработчик устанавливаем
    //на событие "click". И при каждом клике по элементу срабатывает функция flipCard.
    card.addEventListener("click", flipCard);
    //Присобачиваем полученный элемент, со всеми добавленными к нему атрибутами, в наш html элемент с  id = 'grid'
    gridDisplay.appendChild(card);
  }
}
//--------------------------------------------------------------------------------------------------------------------
createBoard();
//-----------------------------------------------------------------------------------------------------------------------
//Функция
function checkMatch() {
  //Выбираем все элементы с тегом  <img> и записываем в переменную cards
  const cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
  console.log(cards);
  console.log("check for match!");
  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute("src", "./images/blank.png");
    cards[optionTwoId].setAttribute("src", "./images/blank.png");
    alert("You have clicked the same image!");
  }
  //Если первый и второй элементы в массиве cardsChosen  равны, то
  if (cardsChosen[0] == cardsChosen[1]) {
    alert("You found a match!");
    cards[optionOneId].setAttribute("src", "./images/white.png");
    cards[optionTwoId].setAttribute("src", "./images/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "./images/blank.png");
    cards[optionTwoId].setAttribute("src", "./images/blank.png");
    alert("Sorry! Try again!");
  }
  resultDisplay.textContent = cardsWon.length;
  cardsChosen = [];
  cardsChosenIds = [];
  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.innerHTML = "Congratulations! You found them all!";
  }
}
//----------------------------------------------------------------------------------------------------------------------
function flipCard() {
  console.log(cardArray);
  //Получаем значение атрибута "data-id" и записываем его в переменную cardId (data-id не что иное, как индекс элемента массива cardArray)
  const cardId = this.getAttribute("data-id");
  //В массив cardsChosen запихиваем значение соответствующего свойства name элемента массива cardArray
  cardsChosen.push(cardArray[cardId].name);
  //В массив cardsChosenIds запихиваем значение cardId
  cardsChosenIds.push(cardId);
  console.log(cardsChosen);
  console.log(cardsChosenIds);
  // console.log("Clicked!", cardId);
  // console.log(cardsChosen);img
  //Элементу, на котором произошел клик устанавливаем значение атрибута src. Значение храниться в массиве cardArray
  //в элементе с соответствующим индексом в свойстве img
  this.setAttribute("src", cardArray[cardId]["img"]);
  if (cardsChosen.length == 2) {
    setTimeout(checkMatch, 500);
  }
}
