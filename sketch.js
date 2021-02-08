


var engine, world;
var ground;

function setup() {
  createCanvas(800,400);
  
  //1. create (engine)instance/object  of Engine class
  engine = Matter.Engine.create();

  //2. world using engine
  world = engine.world;

  //3. create (ground body)instance/object of Bodies class
  // JSON format var name = { 'key': value}
  var ground_options = {
    'isStatic': true,
    'friction': 1
   };
  ground = Matter.Bodies.rectangle(0, 380, 800, 20, ground_options);

  //4. add body to World
  Matter.World.add(world, ground);
  console.log(ground);
}

function draw() {
  background(255,255,255);  
  //5. update Engine
  Matter.Engine.update(engine);

  fill ("brown");
  rect (ground.position.x, ground.position.y, 800, 20);
  
}