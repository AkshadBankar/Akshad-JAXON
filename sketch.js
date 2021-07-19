var player,player_running;
var path,path_Image,Edges;

function preload(){
  //pre-load images
  path_Image = loadImage ("path.png");
  

  player_running = loadAnimation("Runner-1.png","Runner-2.png");

  
}

function setup(){
  createCanvas(400,400);
  
  
  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible = false;
  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible = false;

  path = createSprite(200,200,50,50);
  path.addImage(path_Image);
  path.velocityY = 4;
  path.scale = 1.2;

  player = createSprite(200,300,20,10)
  player.addAnimation("running", player_running);
  player.scale = 0.1;
 
  

  

}

function draw() {
  background('white'); 

  player.x = World.mouseX;
  Edges = createEdgeSprites();
  player.collide(Edges);
  player.collide(leftBoundary);
  player.collide(rightBoundary);
  
if(path.y > 400){
   path.y = height/2;

}  

  drawSprites()
}
