const Engine = Matter.Engine
const World = Matter.World 
const Bodies = Matter.Bodies 

var engine , world , ground , box , helicoptor 

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var prop = {
        isStatic: true 
    }
    ground = Bodies.rectangle(200,390,400,20,prop);
    World.add(world,ground);
     
    box = new Box(190,200,30,30) 
    heli1 = new Helicoptor(200,200,170,70)
    side1 = new Ground(200,370,100,20)
    side2 = new Ground(140,330,20,100)
    side3 = new Ground(240,330,20,100)
}

function draw(){
    background("black");
    Engine.update(engine)
    rectMode(CENTER) 
    fill("red");
    rect(ground.position.x,ground.position.y,400,20);

    box.display()
    heli1.display()
    side1.display()
    side2.display()
    side3.display()
}
