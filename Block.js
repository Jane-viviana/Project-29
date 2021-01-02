class Block{
    constructor(x,y,width,height){
        var options = {
            //isStatic:true,
            'restitution':0.8,
            'friction':2.0,
            'density':2.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
      //  translate(0,0,this.width,this.height);
      translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("white")
        rect(0,0, this.width, this.height);
        pop();
    }
}