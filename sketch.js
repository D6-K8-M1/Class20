var fixedRect;
var movingRect;






function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200,200,70,50);
  movingRect=createSprite(200,50,50,70);
  fixedRect.debug=true;
  movingRect.debug=true;

  fixedRect.velocityY=-4;
  movingRect.velocityY=4;
}



function draw() {
  background(255,255,255); 
  
  //movingRect.x=mouseX;
  //movingRect.y=mouseY;

  edges=createEdgeSprites();
  movingRect.bounceOff(edges);
  fixedRect.bounceOff(edges);

  if(movingRect.y-fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y-movingRect.y < movingRect.height/2 + fixedRect.height/2){
      fixedRect.velocityY=fixedRect.velocityY*(-1);
      movingRect.velocityY=movingRect.velocityY*(-1); 
     }

     if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x-movingRect.x < movingRect.width/2 + fixedRect.width/2){
      fixedRect.velocityX=fixedRect.velocityX*(-1);
      movingRect.velocityX=movingRect.velocityX*(-1); 
    }
  
 drawSprites();
}



function isTouching (){
  if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x-movingRect.x < movingRect.width/2 + fixedRect.width/2 && 
    movingRect.y-fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y-movingRect.y < movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor="yellow";
    fixedRect.shapeColor="yellow";
     }
     else {
      movingRect.shapeColor="red";
      fixedRect.shapeColor="red";
     }
}