function setup() {
  createCanvas(700, 500);
}

function draw() {
  background (220);
  // backlight
  fill (255,0,0);
  rect (190, 260, 15, 40);
  
  // frontlight
  fill (255, 270, 0);
  rect (550, 270, 8, 30);
  
  // back tyre
  fill (70, 250);
  ellipse (300, 350, 90, 90);
  
  // front tyre
  fill (70, 250);
  ellipse (450, 350, 90, 90);
  
  // car body
  fill(10, 100, 150);
  rect(195, 250,355, 90);
  rect (270, 200, 200, 50);
  
}
