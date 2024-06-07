// creating variables and arrays
let gameState = 'intro'; 
let cat; 
let mice = []; 
let obstacles = []; 
let m_caught = 0; 
let m_win = 10; 
let max_hit = 5; 
let o_hit = 0; 

// function to initialize the game
    function setup() {
      createCanvas(700, 500); 
      cat = new Cat(); 
      
      for (let i = 0; i < 10; i++) {
        mice.push(new Mouse());
        obstacles.push(new Obstacle());
      }
    }

// main 
    function draw() {
      background("black"); 
      
// game logic
      if (gameState === 'intro') {
        introScreen();
      } 
      else if (gameState === 'playing') {
        playGame();
      } 
      else if (gameState === 'won') {
        winScreen();
      } 
      else if (gameState === 'lost') {
        loseScreen();
      }
    }

// introduction
    function introScreen() {
      textAlign(CENTER);
      textSize(32);
      fill("white");
      text('Cat and Mouse', width / 2, height / 2 - 20);
      textSize(16);
      text('Press ENTER to Start', width / 2, height / 2 + 20);
      // Start the game when ENTER is pressed
      if (keyIsPressed && keyCode === ENTER) {
        gameState = 'playing';
      }
    }

// main game logic
    function playGame() {
      cat.move(); 
      cat.display(); 

// check for mice caught
      for (let mouse of mice) {
        mouse.display();
        if (cat.catches(mouse)) {
          m_caught++;
          mouse.reset(); 
        }
      }

// check for obstacles hit
      for (let obstacle of obstacles) {
        obstacle.display();
        if (cat.hits(obstacle)) {
          o_hit++;
          obstacle.reset(); 
        }
      }

// display points and number of obstacles hit
      fill("white");
      textSize(16);
      text('Mice Caught: ' + m_caught, 10, 20);
      text('Obstacles Hit: ' + o_hit, 10, 40);

// conditions to win/lose
      if (m_caught >= m_win) {
        gameState = 'won';
      }

      if (o_hit >= max_hit) {
        gameState = 'lost';
      }
    }

// screen displayed when you win
    function winScreen() {
      textAlign(CENTER);
      textSize(32);
      fill("white");
      text('You Won!', width / 2, height / 2 - 20);
      textSize(16);
      text('Press ENTER to Restart', width / 2, height / 2 + 20);
      
      // reset
      if (keyIsPressed && keyCode === ENTER) {
        reset_g();
      }
    }

// screen displayed when you lose
    function loseScreen() {
      textAlign(CENTER);
      textSize(32);
      fill("white");
      text('You Lost!', width / 2, height / 2 - 20);
      textSize(16);
      text('Press ENTER to Restart', width / 2, height / 2 + 20);
      
      // reset
      if (keyIsPressed && keyCode === ENTER) {
        reset_g();
      }
    }

// resetting the game
    function reset_g() {
      gameState = 'intro';
      m_caught = 0;
      o_hit = 0;
      
      for (let mouse of mice) {
        mouse.reset();
      }
      for (let obstacle of obstacles) {
        obstacle.reset();
      }
    }

// define player (cat)
    class Cat {
      constructor() {
        this.size = 50;
        this.x = width / 2;
        this.y = height / 2;
      }

// player movement control
      move() {
        if (keyIsDown(LEFT_ARROW)) {
          this.x -= 5;
        }
        if (keyIsDown(RIGHT_ARROW)) {
          this.x += 5;
        }
        if (keyIsDown(UP_ARROW)) {
          this.y -= 5;
        }
        if (keyIsDown(DOWN_ARROW)) {
          this.y += 5;
        }
      }

// display player (cat)
      display() {
        fill("#e3f2fd");
        ellipse(this.x, this.y, this.size, this.size);
      }

// check if player catches a mouse
      catches(mouse) {
        let d = dist(this.x, this.y, mouse.x, mouse.y);
        return d < this.size / 2 + mouse.size / 2;
      }

// check if player hit an obstacle
      hits(obstacle) {
        let d = dist(this.x, this.y, obstacle.x, obstacle.y);
        return d < this.size / 2 + obstacle.size / 2;
      }
    }

// define mouse 
    class Mouse {
      constructor() {
        this.size = 30;
        this.reset();
      }

// reset mouse position
      reset() {
        this.x = random(width);
        this.y = random(height);
      }

// display mouse
      display() {
        fill("#979dac");
        ellipse(this.x, this.y, this.size, this.size);
      }
    }

// define obstacle
    class Obstacle {
      constructor() {
        this.size = 40;
        this.reset();
      }

// reset obstacle position
      reset() {
        this.x = random(width);
        this.y = random(height);
      }

// display obstacle
      display() {
        fill("#757bc8");
        rect(this.x, this.y, this.size, this.size);
      }
    }
