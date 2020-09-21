
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper; 
var ground;
var d1, d2, d3;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

paper= new Paper(100,680,10);
ground= new Ground(400, 690, 800,20);
d1= new Dustbin(650, 620, 20, 120);
d2= new Dustbin(725, 670, 135, 20);
d3= new Dustbin(780, 620, 20, 120);



	//Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  d1.display();
  d2.display();
  d3.display();
}

function keyPressed(){
	//if (keyCode==UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {
			x: 200,
			y: -200
		});
	//}
}


