class Game {
    constructor(){};
      
    async start(){
      if(gameState === 3){
        form = new Form();
        form.display();
      }
    }
  
    play(){

        form.hide();  
      background(back);   
      //console.log("inside play")
      invisibleGround.velocityX = -(6 + 3*score/100);
      //you.velocityX=2
      if((touches.length > 0 || keyDown("SPACE")) && you.y  >= displayHeight-120) {
      // console.log("inside if")
        you.velocityY = -15;
        touches = [];
      //cast.visible = false;
     }  
      you.velocityY = you.velocityY + 0.8
      if(coinsGroup.isTouching(you)){
        score = score+2;
        coinsGroup[0].destroy();
      }
     if(treaGroup.isTouching(you)){
       score = score+5;
        treaGroup[0].destroy();
      }
      if (invisibleGround.x < 0){
        invisibleGround.x = invisibleGround.width/2;
        //cast.visible = false;
      }
      you.collide(invisibleGround);  

      if(inGroup.isTouching(you)){
       you.visible = false;    
      
    }    
      
      if(obstaclesGroup.isTouching(you)){
          gameState = END;
      }    
 //textSize(20);
  //fill("Black");
  //stroke(2);
  //text("Score: "+ score,30,50);
 
      drawSprites();
    }
  
    end(){
gameOver.visible=true;
      restart.visible=true;
      invisibleGround.velocityX = 0;
      console.log("Game Ended");        
    you.visible=false;
    coinsGroup.setVelocityXEach(0);
    treaGroup.setVelocityXEach(0);
     you.velocityX=0;
    coinsGroup.setLifetimeEach(-1);
    treaGroup.setLifetimeEach(-1);
    invisibleGround.visible = false;
    obstaclesGroup.setVelocityXEach(0);
    cloudsGroup.setVelocityXEach(0);        
    obstaclesGroup.setLifetimeEach(-1);
    cloudsGroup.setLifetimeEach(-1);  
   // coinsGroup.destroyEach(); 
   // treaGroup.destroyEach();
    obstaclesGroup.destroyEach();
    //cloudsGroup.destroyEach();
    if(touches.length>0 || mousePressedOver(restart)) {   
      gameState = 3;
      touches = []
      }
    
}
 spawnObstacles(){
  if(frameCount % 120 === 0) {
    var obstacle = createSprite(1500,displayHeight-65,20,30);
    obstacle.velocityX = -(6 + 2*score/10);
   
    var rand = Math.round(random(1,6));
    //console.log("random"+rand);
    switch(rand) {
      case 1: obstacle.addAnimation("zo1",zo1_running);
      obstacle.scale = 0.2;
      obstacle.setCollider('rectangle',0,0,30,30);
              break;
      case 2: obstacle.addAnimation("mons",mons);
      obstacle.scale = 0.07;
      obstacle.setCollider('rectangle',0,0,150,150);
              break;
      case 3: obstacle.addAnimation("dino",dino);
      obstacle.scale = 1.6;
      obstacle.setCollider('rectangle',0,0,30,30);
              break;
     case 4 : obstacle.addImage(sto);     
      obstacle.scale = 0.2;
      obstacle.setCollider('circle',0,0,15);
              break;
      case 5: obstacle.addImage("bari",bari);      
     obstacle.scale = 0.3;
     obstacle.setCollider('circle',0,0,15);
              break;  
       case 6: obstacle.addImage("bari",poi);      
       obstacle.scale = 0.3;
       obstacle.setCollider('circle',0,0,15);
              break;               
            
      default: break;
    }
    obstacle.debug = false;
    //assign scale and lifetime to the obstacle           
   // obstacle.scale = 0.20;
    obstacle.lifetime = 300;
    obstacle.depth = you.depth;
    you.depth =you.depth+1;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}

 spawnClouds(){
  //console.log("spawnClouds");
  if (frameCount % 60 === 0) {
    var cloud = createSprite(displayWidth+20,displayHeight-300,40,10);
    cloud.y = Math.round(random(100,220));
    cloud.addImage(clo);
     //console.log("inside spawn cloud")
    cloud.scale = 0.1;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 800;
    
    //adjust the depth
    cloud.depth =you.depth;
    you.depth = you.depth+1;   
    
    //add each cloud to the group
    cloudsGroup.add(cloud);
  }
}

 reset(){
  gameState = PLAY;
 gameOver.visible = false;
 restart.visible = false;
 you.visible = true;
 obstaclesGroup.destroyEach();
 cloudsGroup.destroyEach();

 score = 0;
   }

   spawntrea(){
    if (frameCount % 500 === 0) {
        var coin1 = createSprite(displayWidth+500,displayHeight-100,40,10);
    coin1.y = Math.round(random(550,700));
    coin1.addImage(trea);
    coin1.scale = 0.2;
    coin1.velocityX = -3;
    
     //assign lifetime to the variable
    coin1.lifetime = 800;
    
    //adjust the depth
    coin1.depth = you.depth;
    you.depth = you.depth + 1;
    
    //add each coin to the group
    treaGroup.add(coin1);
  
  }}

  spawninvi(){
    if (frameCount % 10000 === 0) {
        var inv = createSprite(displayWidth+20,displayHeight-300,40,10);
    inv.y = Math.round(random(680,681));
    inv.addImage(invi);
   inv.scale = 0.15;
   inv.velocityX = -3;
    
     //assign lifetime to the variable
   inv.lifetime = 800;
    
    //adjust the depth
    inv.depth = you.depth;
    you.depth = you.depth + 1;
    inv.setCollider('circle',0,0,1000);
    inv.debug  =false;
    //add each coin to the group
    inGroup.add(inv);
  
  }}

  spawnboost(){
    if (frameCount % 3000 === 0) {
        var boo = createSprite(displayWidth+20,displayHeight-300,40,10);
    boo.y = Math.round(random(680,681));
    boo.addImage(invi);
  boo.scale = 0.15;
   boo.velocityX = -3;
    
     //assign lifetime to the variable
   boo.lifetime = 800;
    
    //adjust the depth
    boo.depth = you.depth;
    you.depth = you.depth + 1;
    boo.setCollider('circle',0,0,500);
   boo.debug  =false;
    //add each coin to the group
   boostGroup.add(boo);
  
  }}
  


   spawnCoins(){
    if (frameCount % 100 === 0) {
        var coin = createSprite(displayWidth+500,displayHeight-100,40,10);
    coin.y = Math.round(random(550,700));
    coin.addImage(coinImg);
    coin.scale = 0.2;
    coin.velocityX = -3;
    
     //assign lifetime to the variable
    coin.lifetime = 800;
    
    //adjust the depth
    coin.depth = you.depth;
    you.depth = you.depth + 1;
    
    //add each coin to the group
    coinsGroup.add(coin);
  
  }}}