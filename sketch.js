function setup() {
  createCanvas(600, 600);
  background(300);
}
let value = 0;
let x = Math.random() * 600;
let y = Math.random() * 600;
let xDirection = x++;
let yDirection = y++;
function draw() {
  background(300);
  fill(value);
  ellipse(x, y, 50, 50);

   if (x >= 600) {
     xDirection = xDirection * -1;
   } else if (x <= 0) {
     xDirection = xDirection * -1;
   }
   x += xDirection * -1;
  if (y >= 600){
      yDirection = yDirection * -1;
  }else if(y <= 0){
      yDirection = yDirection * -1;
  }
  y += yDirection * -1;
}
