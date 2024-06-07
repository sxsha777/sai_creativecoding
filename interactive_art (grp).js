let cursorX;
let cursorY;
let isHovering = false;

function setup() {
  createCanvas(windowWidth, windowHeight);// taking the whole space of the screen
  textSize(80);//size of the text 
}

function draw() {
  // gradient colors
  let colorTop = color(255, 255, 255);    // white
  let colorBottom = color('#151E3D'); // Blue

  // Draw linear gradient from top to bottom
  setGradient(0, 0, width, height, colorTop, colorBottom);
  
  //if-else statement of hovering 
  if (isHovering){
    //the overlay mode will appear only when hovering on the text
    blendMode(OVERLAY);
  } else {
    //blend mode is the orginal or no effect
    blendMode(BLEND); // Reset blend mode when not hovering
  }
  
  // cursor - freely moves on the x and y axis 
  cursorX = mouseX;
  cursorY = mouseY;
  
  // the shape of the cursor
  //ellipse (cursor, width,height)
  ellipse(cursorX, cursorY, 40, 40);
  
  //text (text,x,y)
  fill(26,23,56); //text colour
  //text('text',x-axis, y-axis)
  text('Welcome to',200,280);
  text('Bath Spa University',100,380);
}

function setGradient(x, y, w, h, c1, c2) {
  // Interpolate between c1 and c2 across horizontal axis
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x + w, i);
  }
}

//where the hovering effect will take place
function mouseMoved() {
  // Calculate the bounding box for each text element
  const welcomeWidth = textWidth ('Welcome to');
  const welcomeHeight = textAscent() + textDescent();
  const welcomeX = 200; //x-axis of the text
  const welcomeY = 280 - textAscent(); //y-axis
  
  const uniWidth = textWidth('Bath Spa University');
  const uniHeight = textAscent() + textDescent();
  const uniX = 100; //x-axis of the text 
  const uniY = 380 - textAscent(); //y-axis of the text
  
  // the mouse is within the bounding box of each text element
  if (
    //the effect will appear anywhere in the range of the width and height of the 'Welcome to'  
    mouseX > welcomeX && mouseX < welcomeX + welcomeWidth &&
    mouseY > welcomeY && mouseY < welcomeY + welcomeHeight
  ) {
    isHovering = true;
  } else if (
    //the effect will appear anywhere in the range of the width and height of the 'Bath Spa Univeristy'  
    mouseX > uniX && mouseX < uniX + uniWidth &&
    mouseY > uniY && mouseY < uniY + uniHeight
  ) {
    isHovering = true;
  } else {
    isHovering = false;
  }
}
