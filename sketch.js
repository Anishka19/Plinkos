var Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions =[];

var divisionHeight = 240;
var score = 0;

function setup() {
  createCanvas(690, 610);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=690; k = k + 69) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 55; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 30; j <=width-20; j=j+50){
    plinkos.push(new Plinko(j,155));
  }

  //create 3rd row of plinko objects
  for (var j = 55; j <=width; j=j+50){
    plinkos.push(new Plinko(j,235));
  }
  
  //create 4th row of plinko objects
  for (var j = 30; j <=width-20; j=j+50){
    plinkos.push(new Plinko(j,315));
  }

}

function draw() {
  background("#FFDBDB");
  
 // textSize(20)
 
  Engine.update(engine);
  
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-50, width/2+50),10));
  }


  //display the paricles 
  for (var l = 0; l < particles.length; l++) {
    particles[l].display();
    console.log(particles.length);
  }
}