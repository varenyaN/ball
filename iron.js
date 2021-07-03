class  Iron {
    constructor(x, y) {
      var options = {
        'density':30,
        'friction': 3,
        'restitution':0.8
      };
      this.body=Bodies.circle (x,y,50,[options])
      this.r=50
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
     var angle =this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate (angle);
      strokeWeight(9);
      stroke('orange')
      ellipseMode(RADIUS)
      fill('brown')
      ellipse(0,0,this.r,this.r)
      pop();
    };
  };
  