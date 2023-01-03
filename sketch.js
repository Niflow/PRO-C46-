var bg,bgImg;
var player, shooterImg, shooter_shooting;
var enemyImage;
var ground;
var gameState=1;
var bullet;
function preload(){

  
  shooterImg = loadImage("assets/shooter_2.png");
  shooter_shooting = loadImage("assets/shooter_3.png");
  enemyImage=loadImage('assets/zombie.png');
  bgImg = loadImage("assets/bg.jpeg");

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
bg.addImage(bgImg);
bg.scale = 1.1;
  ground=createSprite(0,800,2000,50);
  ground.visible=true;

//criando o sprite do jogador
player = createSprite(displayWidth-1150, displayHeight-50, 50, 50);
 player.addImage(shooterImg);
   player.scale = 0.3;
   player.debug = true;
   player.setCollider("rectangle",0,0,300,300);

  enemyGroup=new Group;
}

function draw() {
  background(0); 
  
  if(gameState==1){
  createEnemy();
     //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando toques
    // if(keyDown("DOWN_ARROW")||touches.length>0){
    //  player.y = player.y+30
    // }
    if(keyWentDown("space")){
 
      player.addImage(shooter_shooting);
      bullets(bullet);
    }
    //o jogador volta à imagem original quando pararmos de pressionar a barra de espaço
    else if(keyWentUp("space")){
    player.addImage(shooterImg);
}
  }


 


//solte balas e mude a imagem do atirador para a posição de tiro quando a tecla de espaço for pressionada




drawSprites();

}
function createEnemy(){
  if (frameCount%90===0){;
    var enemy=createSprite(800,700,50,50);
    enemy.x=Math.round(random(1400,1100));
    enemy.addImage(enemyImage);
    enemy.scale=0.2;
    enemy.velocityX=-5;
    enemyGroup.add(enemy);
  }
}

function bullets(bullet){;
   bullet=createSprite(500,600,5,5,);
  
  bullet.velocityX=5;
}