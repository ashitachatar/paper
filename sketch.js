
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground1,dustbin1,dustbin2,dustbin3;


function setup() {
	createCanvas(1100,1100);
 
   
	engine = Engine.create();
	world = engine.world;

	paper1= new Paper(100, 600, 30);

	ground1 = new Ground(400, 1000, 1500, 20);
 
	dustbin1 = new Dustbin(985, 940, 20, 100);
	dustbin2 = new Dustbin(900, 980, 150, 20);
	dustbin3 = new Dustbin(815,940, 20, 100);


	Engine.run(engine);
 
}


function draw() {

 rectMode(CENTER);
 background(0,0,0);

 

 paper1.display();

 ground1.display();

 dustbin1.display();
 dustbin2.display();
 dustbin3.display();

 drawSprites();
 // keyPressed();
}

function keyPressed(){
   if(keyCode === UP_ARROW)  {

	  Matter.Body.applyForce(paper1.body, paper1.body.position, {x:35,y:-35})
   }

 }


