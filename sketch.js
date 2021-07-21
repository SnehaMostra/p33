const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var backgroundImg, snowflakeImg;
var snowflake;

function preload(){
   backgroundImg = loadImage("snow2.jpg");
   snowflakeImg = loadImage("snow4.webp");
}


function setup() {
  createCanvas(1200,600);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

 

}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);

  // display the snowflakes
  for (var i = 0; i < snowflake.length; i++) {
    snowflake[i].display();}

    //create snowflake objects
  if(frameCount%60===0){
    snowflake.push(new  Snowflake(random(width/2-10,width/2+10), 10,10));
}    

  drawSprites();

}