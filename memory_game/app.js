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

function createBoard() {
  for (let i = 0; i < 10; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "./images/blank.png");
    card.setAttribute("data-id", i);
    gridDisplay.appendChild(card);
  }
}
createBoard();
