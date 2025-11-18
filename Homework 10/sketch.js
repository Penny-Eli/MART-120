var Head1 = 250;
var Head2 = 100;
var headDi = 1

var Body1 = 200;
var Body2 = 185;
var bodyDi = 3;

var size = 22;
var count = 0; 
var sizeDi = 2;

var Nose1 = 250;
var Nose2 = 100;
var Nose1Di = 4;
var Nose2Di = 3;

var RA1 = 250;
var RADI = 2;

var LA2 = 150;
var LADI = 2;



function setup()


{
    createCanvas (500, 600);


}

function draw()

{



 
  
 
  
 
background (120, 45, 78);
fill ('navy');
rect (225,Body2 , 50, 200);
Body2 += bodyDi;
if (Body2 <= 0 || Body2 >= 450)
{
    bodyDi *= -1;
}

Nose1 += Nose1Di;
Nose2 += Nose2Di;

if (Nose1>= width - 20 || Nose1 <= 20) Nose1Di *= -1;
  if (Nose2 >= height - 20 || Nose2 <= 20) Nose2Di *= -1;

circle (Head1 , Head2, 150);
Head1+=headDi;
if(Head1 >=418 || Head1 <= 82)
{
    headDi *= -1;
}

LA2 += LADI;
  if (LA2 > width - 50 || LA2 < 50) {
    LADI *= -1;
  }
    RA1 += RADI;
  if (RA1 > height - 50 || RA1 < 50) {
    RADI *= -1;
  }

strokeWeight (10);
point ( 225, 90);
point (275,90);
triangle (Nose1 - 15, Nose2 - 10, Nose1 + 15, Nose2 - 15, Nose1 + 20, Nose2 + 15);

line (225, 200, LA2, 250);
line (275, 200, 350, RA1);


line (235, 370, 220, 450);
line (265, 370, 280, 450);
textSize (size);
size+= sizeDi;
count++;
if (count > 5)
{
    sizeDi *= -1;
    count = 0;
}
text ('Navy Silhouette', 150, 500);
textSize (30);


text ('Eli Penny', 40, 30);
  
 









}
