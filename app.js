//* Snake Game Starts Here
const canvas = document.querySelector("#canvas");
const canvasSize = 600;
const snakeSize = 20;
let vX = snakeSize;
let vY = 0;
let snake = [
  {
    x: 30,
    y: 10,
  },
  {
    x: 20,
    y: 10,
  },
  {
    x: 10,
    y: 10,
  },
];
canvas.width = canvasSize;
canvas.height = canvasSize;
let ctx = canvas.getContext("2d");
drawBoard = () => {
  ctx.fillStyle = "#2c3e50";
  ctx.fillRect(0, 0, canvasSize, canvasSize);
};
drawSnake = () => {
  ctx.fillStyle = "#686de0";
  snake.forEach((block) => {
    ctx.fillRect(block.x, block.y, snakeSize, snakeSize);
  });
};
moveSnake = () => {
  const head = { x: snake[0].x + vX, y: snake[0].y + vY };
  if (head.x > canvasSize) {
    head.x = 0;
  }
  if (head.x < 0) {
    head.x = canvasSize;
  }
  if (head.y > canvasSize) {
    head.y = 0;
  }
  if (head.y < 0) {
    head.y = canvasSize;
  }
  snake.pop();
  snake.unshift(head);
//   console.log(snake);
};

// setInterval(() => {
//   drawBoard();
//   moveSnake();
//   drawSnake();
// }, 1000);

//* Snake Game Ends Here
