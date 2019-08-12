function changeDirection() {
  x = Math.random() * 1050;
  y = Math.random() * 500;
}
function setup() {
  createCanvas(1050, 500);
  background(300);
}
let value = 0;
let x = Math.random() * 1050;
let y = Math.random() * 500;
let xDirection = x++;
let yDirection = y++;
function draw() {
  background(300);
  fill(value);
  ellipse(x, y, 50, 50);

   if (x >= 1050) {
     xDirection = xDirection * -1;
   } else if (x <= 0) {
     xDirection = xDirection * -1;
   }
   x += xDirection * -1;
  if (y >= 500){
      yDirection = yDirection * -1;
  }else if(y <= 0){
      yDirection = yDirection * -1;
  }
  y += yDirection * -1;
}