var img;
function preload() {
img = loadImage("sunset.png");

}

function setup () {
createCanvas (600, 500); //creating canvas
background(0); //background color

}


function draw() {
background(0);
image(img, 0, 0);

filter(POSTERIZE);

}
