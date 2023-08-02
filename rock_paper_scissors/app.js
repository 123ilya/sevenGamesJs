//Получаем html элементы по id
const computerChoiceDislplay = document.getElementById("computer-choice");
const userChoiceDislplay = document.getElementById("user-choice");
const resultDislplay = document.getElementById("result");
//Получаем массив всех элементов <button>
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;
//Перебераем массив с элементами, и на каждый элемент навешиваем слушатель событий, настроеный на клик.
//В случае клика по элементу срабатывает анонимная функция, которая возвращает id элемента, на котором
//произошел клик. Этот id присваивается переменной userChoice и посредством метода .innerHTML
//добавляется как содержимое html элемента с  id="user-choice".
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDislplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
    console.log(userChoice);
    console.log (computerChoice);
    console.log (result);
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "scissorsd";
  }
  if (randomNumber === 3) {
    computerChoice = "paper";
  }

  computerChoiceDislplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "its a draw!";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "You win!";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "You lost!";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "You win!";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "You lost!";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "You lost!";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "You win!";
  }
  resultDislplay.innerHTML = result;
}
