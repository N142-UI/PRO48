var PLAY=1
var END=0
var edges;
var GameState=PLAY
var s1,s2;
var gImage;
var alien,ch1I,pl1,bg;
var bg1,aa;
var bullet,bulletImg,bulletGroup,alienGroup;


function preload(){
  gImage=loadImage("1234.jpg")
  ch1I = loadImage("ch1.png")
  pl1 = loadImage("plannet2.jpg")
  bg = loadImage("bgg.jpg")
  aa = loadImage("alien1.jpg")
  bulletImg = loadImage("bullet1.jpg")
  
}

function setup() {
  createCanvas(583,583)
  
  bulletGroup = new Group()
  alienGroup = new Group()
  
 
  ground= createSprite(380,292,800,800)
  ground.addImage(gImage)
  ground.scale=1
  ground.velocityY=0
  
 
  
  
  
  
  s1= createSprite(100,100)
  s1.addImage(ch1I)
  //s1.debug=true
  //s1.shapeColor="yellow"
  s1.scale=0.4
  
  s2= createSprite(500,500)
  s2.addImage(pl1)
  s2.scale=0.5
  
  s1.depth=s2.depth
  s1.depth+=1
  
  
 
}

function draw() {
  background("blue")
  drawSprites()
  a1() 
  
  if(GameState===PLAY){
  
    if(keyDown("SPACE")){
   
    Bullet() 
      console.log(2)
  }
    
    edges=createEdgeSprites()
    
    s1.collide(edges)
  
    if(mousePressedOver(s2)){
    nextPlanet()
  } 
    
  if(keyDown("DOWN_ARROW")){
    s1.y=s1.y+6
  }
  
  if(keyDown("RIGHT_ARROW")){
    s1.x=s1.x+6
  }
  
  if(keyDown("LEFT_ARROW")){
    s1.x=s1.x-6
  }
  
  if(keyDown("UP_ARROW")){
    s1.y=s1.y-6 
  }
  
  if(bulletGroup.isTouching(alienGroup)){
     bulletGroup.destroyEach()
    alienGroup.destroyEach()
    alienGroup.setVelocityXEach(0)
     }
   if(alienGroup.isTouching(s1)){
     GameState=END
   } 
 
  
  
    
  }
  
  else if(GameState===END){
    
    
    textSize(30)
    fill("YELLOW")
    text("GAMEOVER",200,200)
    
    
    
  }
  
  
  
 
}


function a1(){
  
  
   
   if(frameCount % 90 === 0){
    alien = createSprite(700,100,50,50)
    alien.addImage(aa) 
    alien.scale=0.4 
    alien.debug=true 
    alien.velocityX = - 8
    alien.y= Math.round(random(50,500))
    s1.depth=alien.depth;
    s1.depth+=1
    alienGroup.add(alien) 
  }   
}
function nextPlanet(){
  
  bg1= createSprite(300,250,600,800)
  bg1.addImage(bg)
  bg1.scale=1
  s1.visible=true
  s1.depth=bg1.depth;
  s1.depth+=1
  
     if(bg1.x>400){
    bg1.x=200
  }
  
  s1.x=300
  s1.y=500  
  
  
 
 
}
function Bullet(){
  
  if(frameCount%10===0){
    bullet= createSprite(300,200,60,60) 
    bullet.addImage(bulletImg)
    bullet.scale=0.05
    bullet.velocityX=10
    bullet.y=s1.y
    s1.depth=bullet.depth;
    bullet.depth+=1
    bulletGroup.add(bullet)
     }
}
