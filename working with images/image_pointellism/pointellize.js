let img;
let a,b;
let col;
function preload() {
  img = loadImage('cat.jpg')
}

//creating a canvas
function setup() {
  createCanvas(500,500);
  background(0, 0, 0);
  image(img, 0, 0);
}

//applying pointellism over the image
function draw() {
  a = random(0, width);
  b = random(0, height);
  col = img.get(a,b);
  fill(col);
  noStroke()
  ellipse(a, b, 15, 15);
}
