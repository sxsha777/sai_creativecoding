var mic;
var colours = ["#ff99c8", "#fcf6bd", "#d0f4de", "#a9def9", "#e4c1f9"]

function setup() {
	createCanvas(windowWidth, windowHeight); //the size of the laptop
	background(100);
	mic = new p5.AudioIn();
	mic.start();
}

function draw() {

    // size increases with volume
	var micLevel = mic.getLevel() * height * 5; 
  
	fill(random(colours)); // randomly picked from colours stored in var
    shape = floor(random(0, 2)); 
    if(shape == 0) {
	  rect(mouseX, mouseY, micLevel); //size of circle depends on the mic level
    }
    if(shape == 1) {
      ellipse(mouseX, mouseY, micLevel); //size of rect depends on the mic level
    }
}
