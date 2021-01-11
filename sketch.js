
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof=new Roof(400,50,300,50)

	bob1=new Bob(400,250,"red")
	bob2=new Bob(360,250,"yellow")
	bob3=new Bob(320,250,"blue")
	bob4=new Bob(440,250,"green")
	bob5=new Bob(480,250,"purple")
	
	chain1=new Chain(bob1.body,roof.body,0);
	chain2=new Chain(bob2.body,roof.body,-60);
	chain3=new Chain(bob3.body,roof.body,-120);
	chain4=new Chain(bob4.body,roof.body,60);
	chain5=new Chain(bob5.body,roof.body,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  

  
  drawSprites();
 
}

function mouseDragged()
{
  Matter.Body.setPosition(bob5.body,{x:mouseX,y:mouseY})
}