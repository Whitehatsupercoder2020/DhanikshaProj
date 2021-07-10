var you,you_running,zo1_running,zo1,invisibleGround,mons,visi,inGroup;
var coin,restartImg,musde,musbo,musju,fbac,cast,form,cas,invi;
var obstaclesGroup,cloudsGroup,gameOver,coinImg,dino,mon,coi2,treaGroup;
var PLAY = 1,END = 0,gameState = 3,score = 0,boost,visi1,score = 0;
var back,clo,gameOverImg,sto,coinsGroup,restart,bari,poi,trea,zo;

function preload(){  
you_running=loadAnimation("images/r1-removebg-preview.png","images/r2-removebg-preview.png","images/r3-removebg-preview.png","images/r4-removebg-preview.png","images/r5-removebg-preview.png","images/r6-removebg-preview.png");
  gameOverImg=loadImage("images/gameover-removebg-preview.png");
  restartImg=loadImage("images/restart.png");
  zo1_running=loadAnimation("images/zo1-removebg-preview.png","images/zo11-removebg-preview.png");
  coinImg=loadImage("images/coin.png");
  clo=loadImage("images/cloud.png");
 back=loadImage("images/bacc.jpg");
  fbac = loadImage("images/backg.jpeg");
  cas = loadImage("images/castle1-removebg-preview.png");
  mons = loadAnimation("images/Monster-01.png","images/Monster-02.png");
zo = loadImage("images/zo1-removebg-preview.png")
  sto = loadImage("images/stone.png");
  bari = loadImage("images/barrier.png");
 visi1 = loadImage("images/visi.png");
 trea = loadImage("images/trea.png");
 coi2 = loadImage("images/coin1.png");
boost = loadImage("images/Boost.png");
poi = loadImage("images/poison.png");
invi = loadImage("images/invi.png");
  dino = loadAnimation("images/mon1.png","images/mon2.png","images/mon3.png","images/mon4.png","images/mon5.png","images/mon6.png");
}

function setup() {
 createCanvas(displayWidth,displayHeight);
  game = new Game();
 // form = new Form();
  game.start();
 //var message = "This is a message";
 //console.log(message);
 gameOver = createSprite(displayWidth/2,displayHeight/2- 10);
  gameOver.addImage(gameOverImg);
  restart = createSprite(displayWidth/2,displayHeight/2);
  restart.addImage(restartImg);
   gameOver.scale = 0.05;
  restart.scale = 0.5;
 /*cast  = createSprite(50,displayHeight-350,50,20);
 cast.scale = 1
 cast.addImage(cas);
 cast.visible = false;*/
 
  you = createSprite(50,displayHeight-190,20,50);
  you.x=camera.position.x;  
  you.addAnimation("yourunning", you_running);  
  you.setCollider('rectangle',0,0,160,250);
  you.scale = 0.4;
  you.debug=false;
 you.visible = false; 
  
  coinsGroup = new Group();
  obstaclesGroup = new Group();
  cloudsGroup = new Group();
  treaGroup = new Group();
  inGroup = new Group();

  gameOver.scale = 1;
  restart.scale = 1;

  invisibleGround = createSprite(displayWidth/50,displayHeight-5,displayWidth+10000,125);  
  invisibleGround.shapeColor = "#AECBA1";
  invisibleGround.visible = false;
 
   gameOver.visible = false;
  restart.visible = false;
}

function draw() {  
  textSize(20);
  fill("#FFF700");
  text("Score: "+ score,30,50);
 // background(back);
  you.x=camera.position.x;
 
  
/* if(gameState===0){
   game.start();
 }*/ 
 
  if (gameState===1){
    textSize(20);
    fill("#FFF700");
    text("Score: "+ score,30,50);
  //form.hide();
  clear();
  game.play();
  game.spawnClouds();
  game.spawnCoins();
  game.spawnObstacles();
  game.spawntrea();
  game.spawninvi();
  you.visible = true;
  //cast.visible = true;
  invisibleGround.visible = true;
  }
  drawSprites();
  if(gameState === END){
  
    textSize(20);
    fill("#FFF700");
    text("Score: "+ score,30,50);
  game.end();    
}
}