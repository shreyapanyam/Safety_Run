var mario, marioIMG, marioIMG2;
var ground, Background, backgroundIMG;


function preload() {
  marioIMG = loadImage("images/mario_standing_removed.png");
  marioIMG2 = loadImage("images/mario_standing_removed.png","images/mario_removed.png");

  backgroundIMG = loadImage("images/Background.png");

  
}

function setup() {
  createCanvas(600,400);
  
  

  Background = createSprite(300, 100, 800, 350);
  Background.addImage(backgroundIMG);
  Background.scale = 0.68;

  Background.velocityX = -3;

  mario = createSprite(50, 270, 20, 50);
  mario.addImage(marioIMG);
  mario.scale = 0.1;
  console.log(mario.depth);
  ground = createSprite(200, 300, 500, 10);
  mario.debug = true;
  ground.debug = true;

  
}

function draw() {
  background("lightgray");  

  if (Background.x < 0) {
    Background.x = 300;
  }

  mario.collide(ground);

  console.log(Background.x);
  
  drawSprites();
}