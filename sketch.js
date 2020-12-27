const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var block1;

function setup(){
     var canvas = createCanvas(800,500);
     engine = Engine.create()
     world = engine.world;

     ground = new Ground(475,400,200,15);
     block1 = new Block(475,400,100,100);
}
function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    block1.display();
}