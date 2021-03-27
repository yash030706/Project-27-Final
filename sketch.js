
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
const Render = Matter.Render;
var roof;
var rope;
var bobObj, bobObj1, bobObj2, bobObj3, bobObj4
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;
	roof = new Roof(380,50,400,20) ;
	bobObj = new bob(370,450,50);
	bobObj1 = new bob(420,450,50);
	bobObj2 = new bob(470,450,50);
	bobObj3 = new bob(320,450,50);
	bobObj4 = new bob(270,450,50);
	rope = new Rope(bobObj.body,roof.body,-10,0);
	rope1 = new Rope(bobObj1.body,roof.body,40,0);
	rope2 = new Rope(bobObj2.body,roof.body,90,0);
	rope3 = new Rope(bobObj3.body,roof.body,-60,0);
	rope4 = new Rope(bobObj4.body,roof.body,-110,0);


	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,0);
  
  drawSprites();
  roof.display();
  bobObj.display();
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  rope.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
 
}

function keyPressed() {
	if(keyCode === 38){

	  Matter.Body.applyForce(bobObj4.body,bobObj4.body.position,{x:-50,y:-45});

	}
}

function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}



