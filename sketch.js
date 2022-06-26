var space , spaceImg;
var rocket,rocketImg
var star,starImg
var ob , obImg;
var obG , starG;
var score = 0;
var stars = 0;
var PLAY = 1;
var END = 0
var gameState = "PLAY"
var press , psImg;
var sg,sgImg;
var restart,restartImg;
var alien,alienImg;
var gem,gemImg;
var intro,introImg;

function preload(){

  spaceImg = loadImage("spacebg.jpg");
  rocketImg = loadImage("rk2.png");
  starImg = loadImage("star1.png");
  obImg = loadImage("rock1.png");
  psImg = loadImage("pressstart.jpeg");
  sgImg = loadImage("sg1.jpeg");
  restartImg = loadImage("rs.jpeg");
  alienImg = loadImage("alien-removebg-preview.png");
  gemImg = loadImage("gem1-removebg-preview.png");
  introImg = loadImage("into.jpg");


}

function setup() {

  createCanvas(350,600);

  space = createSprite(175,400);
  space.addImage(spaceImg);
  space.velocityY = 3
    

  rocket = createSprite(100,400,90,50);
  rocket.addImage(rocketImg);
  rocket.scale = 0.2;

  sg = createSprite(300,300);
  sg.scale = 3
  sg.addImage(sgImg);
  sg.visible = false;

  restart = createSprite(300,400);
  restart.addImage(restartImg);
  restart.scale=0.2
  restart.visible=false;

  intro = createSprite(175,300);
  intro.addImage(introImg);
  //intro.visible = false;

  obG = new Group();
  starG = new Group();
  obG1 = new Group();
  star1 = new Group();

    
 
}

function draw() {
  background("grey")
  //if(mousePressedOver(press)){
    //gameState = PLAY
  //}
  

    

  
  if(gameState === "PLAY") 
  {
        if(keyDown("left_arrow")){
        rocket.x = rocket.x - 3;
       }
       
       if(keyDown("right_arrow")){
         rocket.x = rocket.x + 3;
       }
       
       if(keyDown("space")){
         rocket.velocityY = -10;
       }
    
       if(space.y>400){
         space.y = 150
       }

       score = score + Math.round(getFrameRate()/60);
    
    
   rocket.velocityY = rocket.velocityY + 0.8
 
        if(starG.isTouching(rocket) || star1.isTouching(rocket)){
            starG.destroyEach();
            star1.destroyEach();
            stars = stars+ 1
        }
        /*if(obG.isTouching(rocket)||rocket.y > 600){
          gameState = END;

          sg.visible=true;
          restart.visible=true;

          obG.destroyEach();
          starG.destroyEach();

          obG.setLifetimeEach(-1);
          starG.setLifetimeEach(-1);

        starG .setVelocityY=0;
        obG .setVelocityY=0;
        }*/

        spawnStar();
        spawnOb();
        spawnCraft();
        spawnGem();


        drawSprites();
          
       if(mousePressedOver(restart)){
         reset();
       }
    



  textSize(20);
  fill("white")
  text.shapeColor="red"
  text("Score: "+ score, 220,20);

  textSize(20);
  fill("white")
  text("Treasure: "+ stars, 10,20);


  
 
}
}


function spawnStar(){
  if(frameCount%100===0){
    var star = createSprite(200, -50);
    star.addImage(starImg)
    star.velocityY = 5
    star.scale=0.3
    star.x = Math.round(random(10,600));
    star.lifetime = 400
    starG.add(star);

 
}
}

function spawnGem(){
  if(frameCount%120===0){
    var gem = createSprite(200, -50);
    gem.addImage(gemImg)
    gem.velocityY = 5
    gem.scale=0.1
    gem.x = Math.round(random(10,600));
    gem.lifetime = 400
    star1.add(gem);

 
}
}



function spawnOb(){
    if(frameCount%50===0){

      var ob = createSprite(200, -50);
      ob.addImage(obImg)
      ob.velocityY = 7
      ob.scale=0.3
      ob.lifetime = 400
      ob.x = Math.round(random(10,600));
      obG.add(ob)

    }
 }

 function spawnCraft(){
  if(frameCount%80===0){
    var alien = createSprite(200, -50);
    alien.addImage(alienImg)
    alien.velocityY = 7
    alien.scale=0.3
    alien.lifetime = 400
    alien.x = Math.round(random(10,600));
    obG1.add(alien);
    

  }
 }




function reset(){

  gameState=PLAY;
  restart.visible = false;
  sg.visible = false;
  score = 0
}