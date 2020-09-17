const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var i=30;
var b=500;
var o=60;
var k=200
var s=200
var link=[]


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    for(var p=0;p<1200;p=p+50){
     link.push(ba=new Square(p,50,PI))
     }
    

    a=new Ball(b,o,i)
    if(frameCount%1==0){
    sq=new Gquare(b-100,o-100)
    }
}

function draw(){
    background("green");
    Engine.update(engine);
    a.display()
    sq.display()
    ba.display()
    if(frameCount%1==0){
      sq=new Gquare(b-100,o-100)
      }
  
      for(var s=0;s<link.length;s++){
        link[s].display()
    }
 
      
 if (keyDown("n")){
   i=i*2
   a=new Ball(b,o,i)

 }

 if (keyDown("m")){
   i=i/2
   a=new Ball(b,o,i)

 }
 if (keyDown(LEFT_ARROW)){
  b=b-5
  a=new Ball(b,o,i)

}
if (keyDown(UP_ARROW)){
  o=o-5
  a=new Ball(b,o,i)
}
if (keyDown(DOWN_ARROW)){
  o=o+5
  a=new Ball(b,o,i)
}
if (keyDown(RIGHT_ARROW)){
  b=b+5
  a=new Ball(b,o,i)
}


}
