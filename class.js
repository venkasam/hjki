class Square{
constructor(x,y,angle){
 var option={
    'restitution':1.0,
    'isStatic':false
    
}
this.body=Bodies.rectangle(x,y,10,10,option,angle)
this.height=90
this.width=90
World.add(world,this.body)
Matter.Body.setAngle(this.body,angle)



}
 
display(){
 var pos=this.body.position
 var angle=this.body.angle
push()
translate(pos.x,pos.y)
rotate(angle)
rectMode(CENTER)
fill("red")
rect(0,0,this.width,this.height)
pop();


}




}

