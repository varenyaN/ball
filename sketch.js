const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var  square1;
var   rect1;
var circle1;
var smallcircle1;
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    square1 = new  Square (30,30);
   rect1 = new Rect (30,40);
   circle1=  new  Circle (900,450,70)
   smallcircle1  = new  Iron  ( 300,350);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    square1 . display ();
    rect1 .display ();
    circle1.display ();
    smallcircle1 .display ();
}