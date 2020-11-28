var jungle_image
var jungle
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var obstacle
var PLAY=1
var END=0
var gameState=PLAY
var survivalTime=0
var score
var gameOver
var gameOver_image


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  jungle_image=loadImage("jungle (1).jpg")
 
}



function setup() {
  createCanvas(600,300);
  

  jungle=createSprite(150,30)
  jungle.addImage(jungle_image)
  jungle.velocityX=-5
   monkey=createSprite(50,260,10,10);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.09;
   
  var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: monkey.scale=0.12;
              break;
      case 2: monkey.scale=0.14;
              break;
      case 3: monkey.scale=0.16;
              break;
      case 4: monkey.scale=0.18;
              break;
      default: break;
    }
  ground=createSprite(200,260,600,10);
  ground.velocityX=-5;
  ground.visible=false
 
  obstacleGroup=createGroup();
  FoodGroup=createGroup();
  score=0
}


function draw() {

    background("lightgrey");
    text("score:"+score,400,60)
    
 
  if(keyDown("space")&&monkey.y>=200){
    monkey.velocityY=-15;
     
     }
  monkey.velocityY=monkey.velocityY+0.8
    
 
     if(ground.x<300){
    ground.x=ground.width/2;
     }
    if(jungle.x<300){
    jungle.x=jungle.width/2;
     }
  
    
  
  spawnObstacles();
  spawnBananas();
     
    
      if(FoodGroup.isTouching(monkey)){
      score=score+1
  }
    
 if(obstacleGroup.isTouching(monkey)){
    background("lightgreen")
    
    }
 
      
      
  
 
  
  monkey.collide(ground)
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+ score,400,50);
  
    
}

function spawnObstacles(){
 if(frameCount %100 ===0 ){
    var obstacle=createSprite( 600,235,20,20)
    obstacle.velocityX=-(4+score*1.5/100);
   obstacle.addImage(obstaceImage)
   obstacle.scale=0.10
   obstacle.lifetime=255
   obstacle.debug=false
   obstacle.setCollider("circle",20,20)
   obstacleGroup.add(obstacle);
    }
}

function spawnBananas(){
  if(frameCount%80===0){
    var Banana=createSprite(500,80,20,20);
    Banana.velocityX=-4
    Banana.y=Math.round(random(50,150))
    console.log (Banana.y)
    Banana.addImage(bananaImage);
    Banana.scale=0.1;
    Banana.debug=false
    Banana.setCollider("rectangle",0,  0,10,10)
    Banana.lifetime=255
    FoodGroup.add(Banana)
    
   
  }
}




