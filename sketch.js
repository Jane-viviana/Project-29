const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

function setup(){
     var canvas = createCanvas(800,500);
     engine = Engine.create()
     world = engine.world;

     ground = new Ground(400,600,50,15);
}
function draw(){
    background(0);
    //Engine.update(engine);

    ground.display();
}