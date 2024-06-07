var x = 50;

function setup() {
  createCanvas(500, 500);
  background(0);
  noStroke();
  mouseX = -x;
  mouseY = -x;
  
}

 // to add the mouse trail

function draw() {
  fill ("#CDB4DB84");
  rect (mouseX, mouseY, 35, 35)
  
}
