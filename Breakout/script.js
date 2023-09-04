// Получаем наш html элемент и записываем его в переменную grid
const grid = document.querySelector(".grid");
// Создаем html элемент и записываем его в переменную block
const block = document.createElement("div");
// Добавляем ранее создонному элементу соответствующий класс
block.classList.add("block");
block.style.left = "100px";
block.style.bottom = "50px";
//Прихуяриваем элемент block в элемент geid
grid.appendChild(block);
