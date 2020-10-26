class Box {
  constructor(x, y, width, height){
    var options ={
      'restitution': 0,
      'friction': 0.8,
      'density':1.2
    }

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility = 255;
    World.add(world,this.body);
    this.image = loadImage("box.png");
  }
  display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill("#32a6a8");

    if(this.body.speed < 3){
    image(this.image, pos.x - 15, pos.y - 20, this.width, this.height);
    }
    else{
      World.remove(world, this.body);
      push();
      tint(255, this.visibility);
      this.visibility = this.visibility - 5;
      image(this.image, pos.x, pos.y, this.width, this.height);
      pop();
    }
  }

  score(){
    if(this.visibility< 0 && this.visibility> -105){
      score++;
    }
  }

};
