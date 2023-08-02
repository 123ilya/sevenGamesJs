//Получаем html элементы по id
const computerChoiceDislplay = document.getElementById("computer-choice");
const userChoiceDislplay = document.getElementById("user-choice");
const resultDislplay = document.getElementById("result");
//Получаем массив всех элементов <button>
const possibleChoices = document.querySelectorAll("button");
let userChoice;
//Перебераем массив с элементами, и на каждый элемент навешиваем слушатель событий, настроеный на клик.
//В случае клика по элементу срабатывает анонимная функция, которая возвращает id элемента, на котором
//произошел клик. Этот id присваивается переменной userChoice и посредством метода .innerHTML
//добавляется как содержимое html элемента с  id="user-choice".
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDislplay.innerHTML = userChoice;
  })
);
