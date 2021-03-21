const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7;

function preload(){
  back_ground = loadImage("sprites/bg.png");
  
}

function setup() {
  var canvas = createCanvas(1800,1000);
  engine = Engine.create();
  world = engine.world;

  block1 = new Block(1500,520,30,1100);
  block2 = new Block(1650,700,400,30);
  
  block3 = new Block(230,100,220,30);
  block4 = new Block(216,154,30,80);
  block5 = new Block(300,208,250,30);
  block6 = new Block(385,261,30,80);

  
}

function draw() {
  background(back_ground);  
  Engine.update(engine);

  // block1.display();
  // block2.display();

  block3.display();
  block4.display();
  block5.display();
  block6.display();

}