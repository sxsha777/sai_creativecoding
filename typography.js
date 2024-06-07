// declaring the variable
var font;
var coordinates;
function preload() { 
  font = loadFont('PTSerif-Regular.ttf'); 
}

// creating a canvas
function setup() { 
  createCanvas(400, 400); 
  noStroke(); 
  coordinates = font.textToPoints('cats!', 70, 230, 120, {sampleFactor:0.14});

background("#231942"); 
   
// for loop
for (var i = 0; i < coordinates.length; i++) { 
    var a = coordinates[i]; 
    fill("#9f86c0")
    ellipse(a.x, a.y, 7, 7);
    fill("#5e548e")
    ellipse(a.x, a.y, 5, 5)

  } 

}
