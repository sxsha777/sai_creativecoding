function setup() {
    createCanvas(360, 360); //canvas size
}

function draw() {
    background(255); //set background color
  
    //body
    fill("#5E71B1");
    ellipse(185, 220, 155)
      
    //head  
    fill("#B5C6FE");
    ellipse(190, 150, 150);

    //eyes
    fill("#5E71B1");
    ellipse(195 - 30, 163 - 25, 30);
    ellipse(195 + 20, 163 - 25, 25);
    fill("#3C476D");
    ellipse(200 + 20, 160 - 15, 35);
    ellipse(200 - 30, 160 - 15, 40);

    //mouth
    noFill();
    arc(195, 175+10, 30, 20, 0.5, 3.1);
  
    //antenna
    translate (width/2 - 145, 0.2);
    beginShape ();
    vertex (150,50);
    bezierVertex (30, 100, 70, 0, 100, 100);
    endShape();
    fill("#3C476D");
    circle(150,50,15)
  
}
