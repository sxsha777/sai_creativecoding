var img;
function preload() {
img = loadImage("scenery.jpg");

}

function setup () {
createCanvas (500, 500);
background(0);

}


function draw() {
background(0);
image(img, 60, 200);
var v = map(mouseX, 0, width, 0, 7);
img.resize(180,170); // resizing the image 
let c = createGraphics(100,100); // creating a sub canvas
c.rect(200,120,500);
c.triangle(0,0,350,500,400,0); //size and position 
img.mask(c); 
image(img,300,50); // putting the sub canvas inside the main canvas
  
}
