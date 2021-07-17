const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
let bgImg,fruitImg,bunnyImg;
let bunny;
let button;


function preload(){

  bgImg = loadImage("background.png")
  fruitImg = loadImage("melon.png")
  bunnyImg = loadImage("Rabbit.png")

}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

button = createImg('cut_btn.png');
button.position(220,30)
button.size(50,50)
button.mouseClicked(drop);


bunny = createSprite(250,650,100,100);
bunny.addImage(bunnyImg);
bunny.scale=0.2
  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
    background(bgImg);
  rope.show();
  ellipse(fruit.position.x,fruit.position.y,30,30);
  Engine.update(engine);
  ground.show();
push();
imageMode(CENTER);
if(fruit!=null){
  image(fruitImg,fruit.position.x,fruit.position.y,95,95);
}
 pop();  

drawSprites();

}

function drop(){
  rope.break();
  fruit_con.detach();
  fruit_con=null;
}

