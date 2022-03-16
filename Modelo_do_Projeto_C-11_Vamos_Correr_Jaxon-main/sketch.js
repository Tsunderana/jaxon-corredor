var  jason, jason_correndo;
var rua, rua_estrada;

function preload(){
  //imagens pré-carregadas
 jason_correndo = loadAnimation("Runner-1.png","Runner-2.png");
 rua_estrada = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui

  estrada = createSprite(180,300,10,10);
  estrada.addImage("estrada", rua_estrada);
  estrada.y = estrada.width /2;
  estrada.velocityY = 3;
 

  correndo = createSprite(100,360,10,10);
  correndo.addAnimation("correndo", jason_correndo);
  correndo.scale = 0.05;

  
}

function draw() {
  background("gray");
  drawSprites();
  
  if (estrada.y > 500) {
    estrada.y = 0
    estrada.velocityY = 3;
  }
  
  if(keyDown("left")){
    correndo.position.x = correndo.position.x-5;
  }
  
  if(keyDown("right")){
    correndo.position.x = correndo.position.x+5;
  }

  if(correndo.x > 300){
    correndo.x = 300;
  }
 
  if(correndo.x < 62){
    correndo.x = 62;
  }
  
  
}


