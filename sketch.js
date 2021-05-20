
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint  = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600)


	engine = Engine.create()
	world = engine.world

	//Create the Bodies Here.

	roof   = new Roof(600,150)

	bobObject1  = new Bob(600)
	bobObject2 = new Bob(650)
	bobObject3  = new Bob(700)
	bobObject4  = new Bob(550)
	bobObject5  = new Bob(500)

	rope1  = new Rope(bobObject1.body,roof.body,0,0)
	rope2  = new Rope(bobObject2.body,roof.body,50,0)
	rope3  = new Rope(bobObject3.body,roof.body,100,0)
	rope4  = new Rope(bobObject4.body,roof.body,-50,0)
	rope5  = new Rope(bobObject5.body,roof.body,-100,0)

	
	Engine.run(engine)
  
}


function draw() {
 
  background("white")

  roof.display()

    bobObject1.display()
    bobObject2.display()
	bobObject3.display()
	bobObject4.display()
	bobObject5.display()

	rope1.display()
	rope2.display()
	rope3.display()
	rope4.display()
	rope5.display()
 
}

function keyPressed(){

if(keyCode === UP_ARROW){

	Matter.Body.applyForce(bobObject5.body, bobObject5.body.position, {x:-50,y:-50})

}

}



