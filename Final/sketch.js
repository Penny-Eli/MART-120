var charX = 200;
var charY = 200;

var charX2 = 600;
var charY2 = 600;


var w = 87;
var s = 83;
var a = 65;
var d = 68;


var i = 73;
var k = 75;
var j = 74;
var l = 76;


var eyeX = 1350;
var eyeY = 70;
var eyeWidth = 200;
var eyeHeight = 120;

var blinkProgress = 0;
var blinking = false;
var lastBlinkTime = 0;
var blinkInterval = 3000;

var moveRange = 1400;
var restingX, restingY;


var ShapeX = 50;
var ShapeY = 70;
var ShapeXSpeed = 5;
var ShapeYSpeed = 4;


let totalTime = 90;
let startTime;
let isRunning = false;
let remainingTime = totalTime;

let nextSpeedIncrease = 22;



function setup() {
  createCanvas(1460, 750);
  textAlign(CENTER, CENTER);
  textSize(32);

  restingX = eyeX;
  restingY = eyeY;
}


// Draw Loop
function draw() {

  // Win
  if (!isRunning && remainingTime <= 0) {
    background(0);
    fill(255);
    textSize(60);
    text("YOU WIN!", width / 2, height / 2);
    return;
  }

  background(30);

  // Blinking Eye
  if (millis() - lastBlinkTime > blinkInterval && !blinking) {
    blinking = true;
  }

  if (blinking) {
    blinkProgress += 0.15;
    if (blinkProgress >= 1) {
      blinkProgress = 1;
      blinking = false;
      lastBlinkTime = millis();
    }
  } else if (blinkProgress > 0) {
    blinkProgress -= 0.15;
    blinkProgress = max(blinkProgress, 0);
  }


  // Timer
  if (isRunning) {
    let elapsed = (millis() - startTime) / 1000;
    remainingTime = max(0, totalTime - elapsed);

    if (elapsed >= nextSpeedIncrease) {
      ShapeXSpeed *= 1.5;
      ShapeYSpeed *= 1.5;
      nextSpeedIncrease += 22;
    }

    if (remainingTime <= 0) {
      isRunning = false;
    }
  }

  fill(255);
  text(nf(remainingTime.toFixed(1), 2, 1) + "s", width / 2, height / 2);
  textSize(16);
  text("Press SPACE to start/restart", width / 2, height - 30);
  textSize(32);


  // Follow Mouse
  let dx = mouseX - restingX;
  let dy = mouseY - restingY;
  let distance = sqrt(dx * dx + dy * dy);

  if (distance > moveRange) {
    let ratio = moveRange / distance;
    dx *= ratio;
    dy *= ratio;
  }

  eyeX = restingX + dx;
  eyeY = restingY + dy;


  // Draw Eye
  push();
  noStroke();

  fill(255);
  ellipse(eyeX, eyeY, eyeWidth, eyeHeight * (1 - blinkProgress));

  fill(100, 150, 255);
  ellipse(eyeX, eyeY, 50, 50 * (1 - blinkProgress));

  fill(0);
  ellipse(eyeX, eyeY, 20, 20 * (1 - blinkProgress));

  if (blinkProgress > 0) {
    fill(220, 180, 180, 200);

    rect(
      eyeX - eyeWidth / 2,
      eyeY - eyeHeight / 2,
      eyeWidth,
      eyeHeight * blinkProgress
    );

    rect(
      eyeX - eyeWidth / 2,
      eyeY + eyeHeight / 2 - eyeHeight * blinkProgress,
      eyeWidth,
      eyeHeight * blinkProgress
    );
  }

  pop();


  // Bouncing Enemy
  fill(255, 70, 70);
  circle(ShapeX, ShapeY, 50);

  ShapeX += ShapeXSpeed;
  ShapeY += ShapeYSpeed;

  if (ShapeX > width || ShapeX < 0) ShapeXSpeed *= -1;
  if (ShapeY > height || ShapeY < 0) ShapeYSpeed *= -1;


  // Players
  characterMovement();
  drawCharacter();
}

// Character Movement
function characterMovement() {
  if (keyIsDown(w)) charY -= 5;
  if (keyIsDown(s)) charY += 5;
  if (keyIsDown(a)) charX -= 5;
  if (keyIsDown(d)) charX += 5;

  if (keyIsDown(i)) charY2 -= 5;
  if (keyIsDown(k)) charY2 += 5;
  if (keyIsDown(j)) charX2 -= 5;
  if (keyIsDown(l)) charX2 += 5;
}


// Draw chatacters 
function drawCharacter() {
  fill(87, 69, 200);
  circle(charX, charY, 67);

  fill(25, 200, 100);
  square(charX2, charY2, 67);
}


// Starting Timer
function keyPressed() {
  if (key === " ") {
    startTime = millis();
    isRunning = true;
    remainingTime = totalTime;

    nextSpeedIncrease = 22;
    ShapeXSpeed = 5;
    ShapeYSpeed = 4;
  }
}










  
