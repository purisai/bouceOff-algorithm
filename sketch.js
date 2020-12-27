function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400,100,60,60);
  fixedRect.shapeColor="blue";
  fixedRect.velocityY=2
  movingRect=createSprite(400,800,60,60);
  movingRect.shapeColor="green";
  movingRect.velocityY=-2
}

function draw() {
  background(0);  
  drawSprites();
  

 bouncingOff(movingRect,fixedRect)
  
  
}


/*function bouncingOff(o1,o2){
  if(o1.x-o2.x<o1.width/2+o2.width/2 && 
    o2.x-o1.x<o2.width/2+o2.width/2){
      o1.velocityX=o1.velocityX*(-1);
      o2.velocityX=o2.velocityX*(-1);
    }
  if( o1.y-o2.y<o1.height/2+o2.height/2&&
    o2.y-o1.y<o1.height/2+o2.height/2){
    o1.velocityY=o1.velocityY*(-1);
    o2.velocityY=o2.velocityY*(-1);
  }
  
}*/