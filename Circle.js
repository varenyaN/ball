class Circle{
    constructor(x, y,r) {
      var options = {
        'density':1,
        'friction': 5,
        'restitution':0.3
      };
      this.r=r
      this.body=Bodies.circle (x,y,r,[options])
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y)                                                                                     
      strokeWeight(3);
      stroke('white')
      ellipseMode(RADIUS)
      fill("darkblue")
      ellipse(0,0,this.r,this.r)
      pop();
    };
  };                         