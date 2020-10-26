const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,  base1, base2;
var block1, block2, block3, block4, block5;
var block6, block7, block8, block9 ;
var block10,block11, block12;
var  block13, block14;

var gamestate = "onSling";

var score = 0;
var bgImg = "bgwhite.png";
var backgroundCol;

function preload(){
  getBgColour();
}

function setup() {
  var canvas = createCanvas(1000,600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500, 570, 1000, 20);

  base1 = new Ground(550, 500, 200, 25);
  base2 = new Ground(805, 420, 170, 25);

  //level1 - 1
  block1 = new Box(490, 490, 30, 40);
  block2 = new Box(520, 490, 30, 40);
  block3 = new Box(550, 490, 30, 40);
  block4 = new Box(580, 490, 30, 40);
  block5 = new Box(610, 490, 30, 40);

  block6 = new Box(505, 420, 30, 40);
  block7 = new Box(535, 420, 30, 40);
  block8 = new Box(565, 420, 30, 40);
  block9 = new Box(595, 420, 30, 40);

  block10 = new Box(520, 380, 30, 40);
  block11 = new Box(550, 380, 30, 40);
  block12 = new Box(580, 380, 30, 40);

  block13 = new Box(535, 340, 30, 40);
  block14 = new Box(565, 340, 30, 40);


  nblock1 = new Box(760, 410, 30, 40);
  nblock2 = new Box(790, 410, 30, 40);
  nblock3 = new Box(820, 410, 30, 40);
  nblock4 = new Box(850, 410, 30, 40);

  nblock5 = new Box(775, 350, 30, 40);
  nblock6 = new Box(805, 350, 30, 40);
  nblock7 = new Box(835, 350, 30, 40);

  nblock8 = new Box(790, 310, 30, 40);
  nblock9 = new Box(820, 310, 30, 40);

  nblock10 = new Box(805, 270, 30, 40);

  seiger = new Polygon(200, 300, 50, 50);

  sling = new Slingshot(seiger.body, {x: 200, y: 300});


  
}

function draw() {

  if(backgroundCol){
  background(backgroundCol);
  }

  text("Score: " + score, 750, 40);
  Engine.update(engine);

  ground.display();

  base1.display();
  base2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();

  nblock1.display();
  nblock2.display();
  nblock3.display();
  nblock4.display();
  nblock5.display();
  nblock6.display();
  nblock7.display();
  nblock8.display();
  nblock9.display();
  nblock10.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();

  nblock1.score();
  nblock2.score();
  nblock3.score();
  nblock4.score();
  nblock5.score();
  nblock6.score();
  nblock7.score();
  nblock8.score();
  nblock9.score();
  nblock10.score();

  seiger.display();

  sling.display();

  drawSprites();
}

function mouseDragged(){
  if(gamestate === "onSling"){
  Matter.Body.setPosition(seiger.body, {x: mouseX , y: mouseY});
  }
}

function mouseReleased (){
  gamestate = "launch";
  sling.fly();
 
}

function keyPressed(){
  if(keyCode === 32){
    sling.attach(seiger.body);
    gamestate = "onSling";
  }
}

async function getBgColour(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour< 18){
    bgImg = "Bgwhite.png";
  }
  else{
    bgImg = "Bgblack.png";
  }

  backgroundCol = loadImage(bgImg);
}