var img; 
function preload() {  
img = loadImage("daisy.png"); 
}

//canvas in the area
function setup() { 
createCanvas(500, 500);
background("#457b9d");

//image inside shape, using mask function 
  img.resize(200,200); 
  let x = createGraphics(100,150); 
  x.ellipse(100,100,170);
  x.rect(0,0,200,340,100);
  img.mask(x); 
  image(img,300,25); // placing the sub canvas inside the main canvas

  // clip function 
  img.resize(200,200); //resizing 

  let y = createGraphics(200,200);
  y.ellipse(150,150,250);
  y.canvas.getContext("2d").clip(); 
  y.image(img,0,0); //positioning the image 
  image(y,50,225);
  
  // text:
  cnv = createGraphics(width, height);
  cnv.fill("#8ecae6");  
  cnv.rect(270,250,210,+100);  // x , y, w, h
  cnv.erase();
  cnv.textSize(70);
  cnv.text('daisy',290, 320); // txt, x, y
  image(cnv, 0, 0); 
}
