// Получаем наш html элемент и записываем его в переменную grid
const grid = document.querySelector(".grid");
const ballDiametr = 20; //Диаметр мячиам
const boardWidth = 560; //Ширина поля
const boardHeight = 300; //Высота поля
const blockWidth = 100; //Ширина арканоида
const blockHeight = 20; //Высота арканоида
const userStart = [230, 10]; //Стартовая позиция арканоида
let currentPosition = userStart; //Текущая позиция арканоида.
//В начале игры равна стартовой позиции арканоида.
const ballStart = [230, 40]; //Стартовая позиция мячика
let ballCurrentPosition = ballStart; //Текущая позиция мячика.
//В начале игры равна стартовой позиции мячика.

let timerId;
let xDirrection = 2; //Направление движения мячика по оси х
let yDirrection = 2; //Направление движения мячика по оси у

//Создаём класс Block. Класс создает объекты, олицетворяющие собой блоки,
//разбиваемые арканоидом посредством мячика.
//В качестве аргумента указываются координаты левого нижнег угла блока
class Block {
  constructor(xAxis, yAxis) {
    //Формируем свойства, каждое из которых представляет собой массив с координатами
    //соответствующего угла блока.
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topLeft = [xAxis, yAxis + blockHeight];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
  }
}
// Формируем массив, из экземпляров класса Block.
//аргументы подбираем так, что бы блоки были расположены необходимым для нас образом
const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),
  new Block(10, 240),
  new Block(120, 240),
  new Block(230, 240),
  new Block(340, 240),
  new Block(450, 240),
  new Block(10, 210),
  new Block(120, 210),
  new Block(230, 210),
  new Block(340, 210),
  new Block(450, 210),
];

//Функция пробегает по массиву block и на основе его содержимого
//создает html элементы и прикрепляет их к документу
function addBlocks() {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = blocks[i].bottomLeft[1] + "px";
    grid.appendChild(block);
  }
}

addBlocks(); 

//Создаём арканоид
const user = document.createElement("div");//Создаём html элемент
user.classList.add("user"); //Добавляем элементу соответствующий класс
drowUser();//Перемещаем арканоид в соответствующую точку поля
grid.appendChild(user);

//Функция, помещающая арканоид в соответствующую точку поля
function drowUser() {
  user.style.left = currentPosition[0] + "px";
  user.style.bottom = currentPosition[1] + "px";
}

//Функция помещает мячик в соответствующую точку поля
function drawBall() {
  ball.style.left = ballCurrentPosition[0] + "px";
  ball.style.bottom = ballCurrentPosition[1] + "px";
}

//Функция отвечает за перемещение арканоида
function moveUser(e) {
  switch (e.key) {
    case "ArrowLeft":
      if (currentPosition[0] > 0) {
        currentPosition[0] -= 10;
        drowUser();
      }

      break;
    case "ArrowRight":
      if (currentPosition[0] < boardWidth - blockWidth) {
        currentPosition[0] += 10;
        drowUser();
      }

      break;
  }
}
document.addEventListener("keydown", moveUser);

//add ball
const ball = document.createElement("div");
ball.classList.add("ball");
drawBall();
grid.appendChild(ball);

function moveBall() {
  ballCurrentPosition[0] += xDirrection;
  ballCurrentPosition[1] += yDirrection;
  drawBall();
  checkForCollisions();
}

timerId = setInterval(moveBall, 30);

//check for collisions
function checkForCollisions() {
  //check for woll collisions
  if (
    ballCurrentPosition[0] >= boardWidth - ballDiametr ||
    ballCurrentPosition[1] >= boardHeight - ballDiametr
  ) {
    changeDirrection();
  }
}

function changeDirrection() {
  if (xDirrection === 2 && yDirrection === 2) {
    xDirrection = -2;
    return;
  }
  if (xDirrection === 2 && yDirrection === -2) {
    xDirrection = -2;
    return;
  }
  if (xDirrection === -2 && yDirrection === -2) {
    yDirrection = 2;
    return;
  }
  if (xDirrection === -2 && yDirrection === 2) {
    xDirrection = 2;
  }
}
