//* Snake Game Starts Here
const canvas = document.querySelector("#canvas");
const canvasSize = 600;
const snakeSize = 20;
let vX = snakeSize;
let vY = 0;
let score = 0;
let apple = {
  x: 160,
  y: 160,
};
let snake = [
  {
    x: 40,
    y: 20,
  },
  {
    x: 20,
    y: 20,
  },
  {
    x: 0,
    y: 20,
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
drawApple = () => {
  ctx.fillStyle = "#d63031";
  ctx.fillRect(apple.x, apple.y, snakeSize, snakeSize);
};
drawScore = () => {
  ctx.fillStyle = "#fff";
  ctx.font = "30px Arial";
  ctx.fillText(`Score: ${score}`, 460, 50);
};
generateApple = () => {
  let rX = Math.round((Math.random() * (canvasSize - 20)) / 20) * 20;
  let rY = Math.round((Math.random() * (canvasSize - 20)) / 20) * 20;
  while (snake.find((a) => a.x === rX && a.y === rY)) {
    rX = Math.round((Math.random() * (canvasSize - 20)) / 20) * 20;
    rY = Math.round((Math.random() * (canvasSize - 20)) / 20) * 20;
  }
  apple.x = rX;
  apple.y = rY;
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
  if (head.x === apple.x && head.y === apple.y) {
    snake.push(apple);
    score++;
    generateApple();
  }
  snake.pop();
  snake.unshift(head);
  //   console.log(snake);
};

setInterval(() => {
  drawBoard();
  moveSnake();
  drawSnake();
  drawApple();
  drawScore();
}, 100);
window.addEventListener("keydown", (e) => {
  switch (e.keyCode) {
    case 87:
      if (vY > 0) {
        break;
      }
      vX = 0;
      vY = -snakeSize;
      break;
    case 68:
      if (vX < 0) {
        break;
      }
      vX = snakeSize;
      vY = 0;
      break;
    case 83:
      if (vY < 0) {
        break;
      }
      vX = 0;
      vY = snakeSize;
      break;
    case 65:
      if (vX > 0) {
        break;
      }
      vX = -snakeSize;
      vY = 0;
      break;
  }
});

//* Snake Game Ends Here
