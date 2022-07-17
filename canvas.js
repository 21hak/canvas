let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d"); // 졸라리 큰 object임. super object
// c.fillStyle = "rgba(255,0,0,0.5)";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "rgba(0,255,0,0.5)";
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = "rgba(0,0,255,0.5)";
// c.fillRect(300, 300, 100, 100);

// // line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "blue";
// c.stroke();

// arc/ circle
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "red";
// c.stroke();

// for (let i = 0; i < 100; i++) {
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = "red";
//   c.stroke();
// }

// let x = Math.random() * innerWidth;
// let y = Math.random() * innerHeight;
// let dx = (Math.random() - 0.5) * 10;
// let dy = (Math.random() - 0.5) * 10;
// let radius = 30;

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.stroke();
  };

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}
const circleList = [];
for (let i = 0; i < 100; i++) {
  let radius = 30;
  let x = Math.random() * (innerWidth - radius * 2) + radius;
  let y = Math.random() * (innerHeight - radius * 2) + radius;
  let dx = (Math.random() - 0.5) * 10;
  let dy = (Math.random() - 0.5) * 10;

  circleList.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < circleList.length; i++) {
    circleList[i].update();
  }

  //   circle.update();
  //   c.beginPath();
  //   c.arc(x, y, radius, 0, Math.PI * 2, false);
  //   c.strokeStyle = "blue";
  //   c.stroke();
}

animate();
