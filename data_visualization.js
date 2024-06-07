// data
let data = [13, 6, 28, 77, 50, 60, 25, 30, 11]; 
let total = data.reduce((sum, value) => sum + value, 0);

function setup() {
  createCanvas(500, 500);
  background("black");
  noLoop();
}

function draw() {
  
  //color palette
  let palette = ["#fbf8cc", "#fde4cf", "#ffcfd2", "#f1c0e8", "#cfbaf0", 
                 "#a3c4f3", "#90dbf4", "#98f5e1", "#b9fbc0"];

  // creating pie chart
  let lastAngle = 0;
  let a = data.map(value => (value / total) * TWO_PI);
  
  for (let i = 0; i < a.length; i++) {
    let color = palette[int(random(0,9))];
    fill(color);
    arc(width / 2, height / 2, 350, 350, lastAngle, lastAngle + a[i]);
    lastAngle += a[i];
  }
}
