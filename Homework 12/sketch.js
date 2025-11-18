var x = 50;
var y = 50;
var diameter = 25;

var exitX = 900;
var exitY = 750;
var exitSize = 80;

var Shapex = 300;
var Shapey = 300;


var shapeXSpeed;
var shapeYSpeed;

var shape2x = 500
var shape2y = 800

var shape2xSpeed;
var shape2ySpeed;

var s = 83;
var w = 87;
var a = 65;
var d = 68;

var mouShapex;
var mouShapey;


function setup() {
  createCanvas(1000, 850);

  shape2xSpeed = random (2, 6);
  shape2ySpeed = random (2, 6);
  
  shapeXSpeed = random(2, 6);
  shapeYSpeed = random(2, 6);
}

function draw() {
  background(69, 67, 200);

  controlPlayer();
  changeDiameter();

  
  fill(255);
  circle(x, y, diameter);

  
  fill(23, 200, 21);
  circle(Shapex, Shapey, 30);

  
  Shapex += shapeXSpeed;
  Shapey += shapeYSpeed;
  
  
  if (Shapex > width || Shapex < 0) shapeXSpeed *= -1;
  if (Shapey > height || Shapey < 0) shapeYSpeed *= -1;


  shape2x += shape2xSpeed;
  shape2y += shape2ySpeed;
  if (shape2x > width || shape2x < 0) shape2xSpeed *= -1;
  if ( shape2y > height || shape2y < 0) shape2ySpeed *=-1;

  fill (200, 50, 50);
  circle(shape2x, shape2y, 60)
  
  fill(121, 50, 13);
  rect(exitX, exitY, exitSize, exitSize);

  fill(0);
  textSize(20);
  text("EXIT", exitX + 15, exitY + 45);

  fill(135, 170, 99);
  circle(mouShapex, mouShapey, 30);

  createBorders(10);

  checkForWin();
}

function controlPlayer() {
  if (keyIsDown(s)) y += 15;
  if (keyIsDown(w)) y -= 10;
  if (keyIsDown(d)) x += 10;
  if (keyIsDown(a)) x -= 10;
}

function changeDiameter() {
  if (diameter < 300) {
    diameter += 3;
  } else {
    diameter = 35;
  }
}

function createBorders(thickness) {
  rect(0, 0, width, thickness);
  rect(0, height - thickness, width, thickness);
  rect(0, 0, thickness, height);
  rect(width - thickness, 0, thickness, height);
}

function mouseClicked()
{ 

    mouShapex = mouseX
    mouShapey = mouseY


}


function checkForWin() {
  if (
    x > exitX &&
    x < exitX + exitSize &&
    y > exitY &&
    y < exitY + exitSize
  ) {
    fill(45, 255, 0);
    textSize(40);
    text("GONE", width / 2 - 120, height / 2);
    noLoop(); 
  }
}