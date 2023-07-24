const computerChoiceDisplay = document.getElementById("computer-choice"); //Получаем доступ к элементу с id "computer-choice"
const userChoiceDisplay = document.getElementById("user-choice"); //Получаем доступ к элементу с id "user-choice"
const resultDisplay = document.getElementById("result"); //Получаем доступ к элементу с id "result"

//Получаем массив содержащий все элементы <button> и записываем его в переменную possibleChoices
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
//Пробегаемся по массиву possibleChoices и для каждого элемента масива выполняем следующее:
possibleChoices.forEach((possibleChoice) =>
  //к каждому элементу массива(html элементу <button>) устанавливаем обработчик события. В данном случае обработчик
  //устанавливается на клик мыши по элементу ('click'). В случае, если данное событие произошло, то выполняется
  //стрелочная функция делающая следующее:
  //при помощи event свойства target получаем элемент на котором произошло событие.
  //а при помощи свойства id, получаем id этого элемента
  possibleChoice.addEventListener("click", (e) => {
    //и присваиваем его переменной userChoice
    userChoice = e.target.id;
    //Изменяем содержимое элемента, записаннног в переменную userChoiceDisplay на id элемента на котором произошло событие.
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
  })
);
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);
  if (randomNumber === 0) {
    computerChoice = "rock";
  }
  if (randomNumber === 1) {
    computerChoice = "scisors";
  }
  if (randomNumber === 2) {
    computerChoice = "paper";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}
