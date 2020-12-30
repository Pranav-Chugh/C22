const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground;
var ball;
function setup() {
  createCanvas(400,400);
  //createSprite(200, 200, 50, 50);
 
  myEngine = Engine.create()
  myWorld = myEngine.world;
  var options = {
   
    isStatic: true


  }
ground = Bodies.rectangle(200, 380, 400, 10, options); 
World.add(myWorld, ground);
console.log(ground);

var ball_option = {

restitution: 1.0

}

ball = Bodies.circle(200, 200, 25, ball_option);
World.add(myWorld,ball);
}


function draw() {   
  background(0); 
  
  Engine.update(myEngine);
rectMode(CENTER);
rect(ground.position.x, ground.position.y, 400, 10);
ellipseMode(RADIUS);
ellipse(ball.position.x, ball.position.y, 25, 25);




  //drawSprites();
}