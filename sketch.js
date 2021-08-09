var ship, shipSailing, edges;
var seaImage;
var sea;

function preload(){
  shipSailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200,200,200,200)
  sea.addImage("sea", seaImage)
  sea.scale = 0.4;

  ship = createSprite(200,200,60,60);
  ship.addAnimation("sailing", shipSailing);
  

ship.scale = 0.3;
  ship.x = 120;

  
  
}

function draw() {
  background("blue");
 
sea.velocityX = -3;

if (sea.x<0){
  sea.x=sea.width/8
}

  drawSprites();
}