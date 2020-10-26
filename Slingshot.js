class Slingshot{
    constructor(bodyA, pointb){
        var options = {
            bodyA: bodyA,
            pointB: pointb,
            stiffness: 0.1,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }

    display(){

        if(this.sling.bodyA != null){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}