var charx = 100;
var chary = 100;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

var shax = 30;
var shay = 50;
var shaxsp;
var shaysp;

var shax2 = 500;
var shay2 = 300;
var shaxsp2;
var shaysp2;

var exitX = 750;
var exitY = 550;
var exitSize = 50;
var gameWon = false;

var mouseshapex = -100;
var mouseshapey = -100;

function setup() {
  createCanvas(800, 600);
  shaxsp = Math.floor(Math.random() * 5) + 1;
  shaysp = Math.floor(Math.random() * 5) + 1;
  shaxsp2 = Math.floor(Math.random() * 5) + 1;
  shaysp2 = Math.floor(Math.random() * 5) + 1;
}

function draw() {
  background(120, 67, 190);

  if (!gameWon) {
    
    fill(18, 210, 95);
    circle(shax, shay, 50);
    shax += shaxsp;
    shay += shaysp;
    if (shax > width || shax < 0) shaxsp *= -1;
    if (shay > height || shay < 0) shaysp *= -1;

    
    fill(255, 50, 50);
    circle(shax2, shay2, 50);
    shax2 += shaxsp2;
    shay2 += shaysp2;
    if (shax2 > width || shax2 < 0) shaxsp2 *= -1;
    if (shay2 > height || shay2 < 0) shaysp2 *= -1;

    
    fill(255, 255, 0);
    rect(exitX - exitSize / 2, exitY - exitSize / 2, exitSize, exitSize);
    fill(0);
    textSize(15);
    text("The Gate", exitX - 17, exitY + 5);

    
    drawCharacter();
    characterMovement();

    
    fill(160, 150, 140);
    circle(mouseshapex, mouseshapey, 30);

    
    checkExit();
  } else {
    background(50, 200, 100);
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(40);
    text("Safe!", width / 2, height / 2);
  }
}

function characterMovement() {
  if (keyIsDown(w)) chary -= 5;
  if (keyIsDown(s)) chary += 5;
  if (keyIsDown(a)) charx -= 5;
  if (keyIsDown(d)) charx += 5;
}

function drawCharacter() {
  fill(87, 69, 200);
  circle(charx, chary, 67);
}

function checkExit() {
  let d = dist(charx, chary, exitX, exitY);
  if (d < exitSize / 2 + 33) {
    gameWon = true;
  }
}


function mouseClicked() {
  mouseshapex = mouseX;
  mouseshapey = mouseY;
}

