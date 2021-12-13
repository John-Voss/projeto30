class Block {
  constructor(x, y){
    var options = {
      restitution: 0.1,
      friction: 1.5,
      density:5
    }
    this.block = Bodies.rectangle(x, y, 30, 50, options);
    this.image = loadImage('block.png');
    this.Visiblity = 255;
    World.add(world, this.block);
  }
  display() {
    //console.log(this.block.speed);
    if(this.block.speed < 4) {
      var pos = this.block.position;

      push();
      translate(pos.x, pos.y);
      rotate(this.block.angle);
      imageMode(CENTER);
      //strokeWeight(2);
      //stroke('black');
      image(this.image, 0,0, 30, 50);
      pop();
    }
    else {
      World.remove(world, this.block);
      push();
      this.Visiblity -= 5;
      tint(255, this.Visiblity);
      image(this.image, this.block.position.x, this.block.position.y, 30, 50); 
      pop();
    }
  }
}