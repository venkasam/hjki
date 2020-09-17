class Ball{
    constructor(x,y,radius){
    var options={
    'isStatic':true,
    
    
    
    
    }
    
    
    this.body=Bodies.circle(x,y,radius,options)
    this.x=x
    this.y=y
    this.radius=radius
    World.add(world,this.body)
    }
    
    display(){
    var pos=this.body.position
    push()
    translate(pos.x,pos.y)
    ellipseMode(CENTER)
    fill("red")
    ellipse(0,0,this.radius)
     pop()
    
    
    
    
    
    
    
    
    }
    
    
    
    
    }