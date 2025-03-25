// set up canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random RGB color value

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  update() {
    if (this.x + this.size >= width) {
      this.velX = -Math.abs(this.velX);
    }

    if (this.x - this.size <= 0) {
      this.velX = Math.abs(this.velX);
    }

    if (this.y + this.size >= height) {
      this.velY = -Math.abs(this.velY);
    }

    if (this.y - this.size <= 0) {
      this.velY = Math.abs(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
  }

  collisionDetect() {
    for (const ball of balls) {
      if (!(this === ball)) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}

class evilcircle extends shape {
  constructor(x,y) {
    super(x,y,20,20)
    this.color="white"
    this.size = 10;
    this.velX = 5;
    this.velY = 5;
    // create evil circle object
    const evil = new evilcircle(100, 100);

    // listen for keyboard input to move object
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "a":
          this.x -= this.velX;
          break;
        case "d":
          this.x += this.velX;
          break;
        case "w":
          this.y -= this.velY;
          break;
        case "s":
          this.y += this.velY;
          break;
      }
  });
  
// Function to update the ball count
function updateBallCount() {
  const ballCountDisplay = document.getElementById('ballCount');
  if (ballCountDisplay) {
    ballCountDisplay.textContent = `Ball Count: ${balls.length}`;
  }
}

  }
  draw() {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.lineWidth = 3;
  }
  update() {
    if ((this.x + this.size) >= width) {
      this.x = this.size;
    }

    if ((this.x - this.size) <= 0) {
      this.x = this.size;
    }

    if ((this.y - this.size) >= height) {
      this.y = this.size;
    }

    if ((this.y - this.size) <= 0) {
      this.y = this.size;
    }
  }

}
  const balls = [];
  let ballCount = 25;
  const ballcountdisplay = document.getElementById("ballcount")

  // specific ball added to array
  const Ball = new Ball(50, 100, 4, 4, "blue", 10);
  Ball.color;
  Ball.x;
  Ball.size;
  Ball.draw();

  while (balls.length < 25) {
    const size = random(10, 20);
    const ball = new Ball(
      // ball position always drawn at least one ball width
      // away from the edge of the canvas, to avoid drawing errors
      random(0 + size, width - size),
      random(0 + size, height - size),
      random(-7, 7),
      random(-7, 7),
      randomRGB(),
      size
    );

    balls.push(ball);
  }

// loop for animation
  function loop() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, width, height);

    for (const ball of balls) {
      ball.draw();
      ball.update();
      ball.collisionDetect();
    }

    evilcircle.draw();
    evilcircle.collisionDetect();
    evilcircle.update();

    updateBallCount();

    requestAnimationFrame(loop);
  }

// start loop animation
  loop();
