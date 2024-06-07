function preload() {
    img = loadImage('flower.jpg');
  }
  
  //creating a canvas
  function setup() {
    createCanvas(500, 500);
    img.resize(width, height);
  }
  
  //pixelating the image
  function draw() {
    
    for (let a = 0; a < width; a += 7) {
      for (let b = 0; b < height; b += 7) {
        color = img.get(a, b);
        stroke(color);
        fill(color);
        square(a, b, 10);
      }
    }
  
    noLoop();
  
  }
