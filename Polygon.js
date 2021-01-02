class Polygon{
    constructor(x,y,width,height){
       var options={
           'restitution':0.8,
           'friction':1.0,
           'density':1.0
       }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("polygon.png")
      World.add(world,this.body);
  }
     display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        scale(2);
       imageMode(CENTER);
       image(this.image,0,0,this.width,this.height);
        pop();
     }
}