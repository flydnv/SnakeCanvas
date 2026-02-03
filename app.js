const canvas = document.querySelector("#canvas");
const canvasSize = 600;
const snakeSize = 30;
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
  ctx.fillRect(0, 0, snakeSize, snakeSize);
};
drawBoard();
drawSnake();
