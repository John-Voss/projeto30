const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;

var ground;
var platform;
var polyg, polyg_image;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;
var block11, block12, block13, block14, block15, block16;

function preload() {
  polyg_image = loadImage('polygon.png');
}

function setup() {
  createCanvas(1400,700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(700, 690, 1400, 10);

  platform = new Ground(1000, 550, 300, 5);

  var options = {
    restitution: 1,
    friction: 1,
    density: 2.8
  }
  polyg = Bodies.rectangle(200, 500, 80, 80, options);
  World.add(world, polyg);

  block1 = new Block(1000, 545);
  block2 = new Block(970, 545);
  block3 = new Block(940, 545);
  block4 = new Block(910, 545);
  block5 = new Block(1030, 545);
  block6 = new Block(1060, 545);
  block7 = new Block(1090, 545);
  block8 = new Block(1000, 450);
  block9 = new Block(1030, 450);
  block10 = new Block(1060, 450);
  block11 = new Block(970, 450);
  block12 = new Block(940, 450);
  block13 = new Block(1000, 400);
  block14 = new Block(1030, 400);
  block15 = new Block(970, 400);
  block16 = new Block(1000, 355);

  sling_shot = new SlingShot(this.polyg, {x:200, y:500});
}

function draw() {
  background(56,44,44); 
  Engine.update(engine);

  ground.display();
  platform.display();

  push();
  translate(polyg.position.x, polyg.position.y);
  rotate(polyg.angle);
  //rectMode(CENTER);
  //rect(0, 0, 80, 80);
  imageMode(CENTER);
  image(polyg_image, 0, 0, 80, 80);
  pop();

  //fill('#4682B4');
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  //fill('#FF1493');
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  //fill('#00FFFF');
  block13.display();
  block14.display();
  block15.display();
  //fill('orange');
  block16.display();

  sling_shot.display();
}
function mouseDragged() {
  Matter.Body.setPosition(this.polyg, {x: mouseX, y: mouseY});
}
function mouseReleased() {
  sling_shot.fly();
}
