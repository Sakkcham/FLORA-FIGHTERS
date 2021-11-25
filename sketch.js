var bkimg;
var player;
var playerimg;
var enemy;
var enemy1;
var enemy2;
var enemy3;
var enemy4;
var enemy_1;
var bullets;
var Bullet1;
var Bullet2;
var Bullet3;
var Bullet4;
var Bullet5;
var Bullet6;
function preload(){
  bkimg=loadImage("background.jpg");
  playerimg=loadImage("enemy.png");
  enemy_1=loadImage("plane.png");
  bullets=loadImage("Bullets.png")
}
function setup(){
  createCanvas(windowWidth, windowHeight);
  player=createSprite(width/2,height-100,20,30);
  player.addImage(playerimg);
  player.scale=0.8;

  enemy=createSprite(250,height-500,20,120);
  enemy.addImage(enemy_1);
  enemy.scale=0.8;

  enemy1=createSprite(450,height-500,20,120);
  enemy1.addImage(enemy_1);
  enemy1.scale=0.8;

  enemy2=createSprite(650,height-500,20,120);
  enemy2.addImage(enemy_1);
  enemy2.scale=0.8;

  enemy3=createSprite(850,height-500,20,120);
  enemy3.addImage(enemy_1);
  enemy3.scale=0.8;

  enemy4=createSprite(1050,height-500,20,120);
  enemy4.addImage(enemy_1);
  enemy4.scale=0.8;

 Bullet1=createSprite(710,height-155,20,120);
 Bullet1.addImage(bullets);
 Bullet1.scale=0.1;
 

 Bullet2=createSprite(700,height-165,20,120);
 Bullet2.addImage(bullets);
 Bullet2.scale=0.1;
 

 Bullet3=createSprite(690,height-155,20,120);
 Bullet3.addImage(bullets);
 Bullet3.scale=0.1;
  
 Bullet4=createSprite(590,height-155,20,120);
 Bullet4.addImage(bullets);
 Bullet4.scale=0.1;

 Bullet5=createSprite(580,height-165,20,120);
 Bullet5.addImage(bullets);
 Bullet5.scale=0.1;

 Bullet6=createSprite(570,height-155,20,120);
 Bullet6.addImage(bullets);
 Bullet6.scale=0.1;
  
}
function draw(){
  background(bkimg);



  drawSprites();
}