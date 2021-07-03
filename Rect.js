class Rect {
    constructor(x, y) {
      var options = {
        'density':4,
        'friction': 0.3,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, 60, 60, options);
      this.width = 60;
      this.height = 50;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(8);
      stroke('black')
      fill('pink')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  