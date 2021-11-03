var  ground,groundImg;
var snow,snowImg;
var girl,girlImg,changeImg,hangeImg1;

function preload(){
groundImg = loadImage("snow1.jpg");
snowImg = loadImage("snow4.webp");
girlImg = loadImage("pic.gif")
changeImg = loadImage("pic3.gif")
changeImg1 = loadImage("pic4.gif")

}


function setup() {
  createCanvas(1200,700);

  ground=createSprite(600,350,1200,700);
  ground.addImage(groundImg);
  ground.scale=1.5

  girl = createSprite(900,550);
  girl.addImage(girlImg);
  girl.scale=0.3;

}

function draw() {
  background(255,255,255);
  
  if(keyDown(LEFT_ARROW)){
   girl.x-=10
   girl.changeImage("OLDimage",girlImg)
    girl.addImage(girlImg);
 


  }
  if(keyDown(RIGHT_ARROW)){
    girl.x+=10
    girl.changeImage("changing1image",changeImg1);
    girl.addImage(changeImg1);
   }

   if(keyDown(UP_ARROW)){
     girl.changeImage("changingimage",changeImg)
     girl.addImage(changeImg);
   }
   if(keyDown(DOWN_ARROW)){
    girl.changeImage("OLDimage",girlImg)
    girl.addImage(girlImg);
  }
   
  drawSprites();
  snowFall();

}

function snowFall(){
  if(frameCount%10===0){
   snow=createSprite(random(900,300));
   snow.addImage(snowImg);
   snow.scale=0.1;
   snow.velocityY=2;
   if(snow.y>700){
    snow.velocityY=0;
  }

  }


}