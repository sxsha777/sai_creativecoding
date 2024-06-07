var rows = 14;
var cols = 14;
var disX = 35;
var disY = 35;
var col, shape, size;

colors = ["#9290C3", "#003076", "#535C91"];

function setup() {
	createCanvas(500, 500);
    mousePressed();
}

//pattern
function mousePressed() {
	background(0);
	rectMode(CENTER);
	noStroke();
	colorMode(RGB);
	
	for (var x = 1; x < rows; x++) {
		for (var y = 1; y < cols; y++) {
			col = random(colors);
			size = random(25,25);
            fill(col);
			
			//randomize a number between 0 and 2 
			shape = floor(random(0, 2)); 
			
			//to randonmly choose from the options of shapes
			if(shape == 0) {
				ellipse(x*disX, y*disY, size, size);
			}
			if(shape == 1) {
				rect(x*disX, y*disY, size, size);
			}
			
		}
	}
}
