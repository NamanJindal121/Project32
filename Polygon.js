class Polygon {
    constructor(x ,y, width, height){
        var options ={
            restitution: 0.8,
            friction: 1.0,
            density: 0.5
        }

        this.body = Bodies.rectangle(x, y ,width, height, options);
        this.width = width;
        this.height = height;

        Matter.Body.setMass(this.body, this.body.mass*2);

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);
    }
}
