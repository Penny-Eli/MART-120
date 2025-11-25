var x = 50;
var y = 50;
var diameter = 25;

var exitX = 900;
var exitY = 750;
var exitSize = 80;


var shapeXs = [];
var shapeYs = [];
var diameters = [];
var shapeXSpeeds = [];
var shapeYSpeeds = [];

var s = 83;
var w = 87;
var a = 65;
var d = 68;

var mouShapex;
var mouShapey;

function setup() {
  createCanvas(1000, 850);

  
  for (var i = 0; i < 5; i++) {
    shapeXs[i] = random(0, width);
    shapeYs[i] = random(0, height);
    diameters[i] = random(20, 50);
    shapeXSpeeds[i] = random(1, 5);
    shapeYSpeeds[i] = random(1, 5);
  }
}

function draw() {
  background(69, 67, 200);

  controlPlayer();
  changeDiameter();


  fill(255);
  circle(x, y, diameter);

  
  for (var i = 0; i < shapeXs.length; i++) {
    
    shapeXs[i] += shapeXSpeeds[i];
    shapeYs[i] += shapeYSpeeds[i];
   for (var i = 0; i < shapeXs.length; i++) {
  
  shapeXs[i] += shapeXSpeeds[i];
  shapeYs[i] += shapeYSpeeds[i];

  
  if (shapeXs[i] > width) shapeXs[i] = 0;
  if (shapeXs[i] < 0) shapeXs[i] = width;

  if (shapeYs[i] > height) shapeYs[i] = 0;
  if (shapeYs[i] < 0) shapeYs[i] = height;


  fill(23, 200, 21);
  circle(shapeXs[i], shapeYs[i], diameters[i]);
}
    
    if (shapeXs[i] > width || shapeXs[i] < 0) shapeXSpeeds[i] *= -1;
    if (shapeYs[i] > height || shapeYs[i] < 0) shapeYSpeeds[i] *= -1;

    
    fill(23, 200, 21);
    circle(shapeXs[i], shapeYs[i], diameters[i]);
  }


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

function mouseClicked() {
  mouShapex = mouseX;
  mouShapey = mouseY;
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