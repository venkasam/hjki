class Gquare{
    constructor(x,y){
     var option={
        'isStatic':false,
        
    }
    this.body=Bodies.rectangle(x,y,100,70,option)
    this.height=70
    this.width=100
    World.add(world,this.body)
    
    
    
    
    }
     
    display(){
     var pos=this.body.position
     
    push()
    translate(pos.x,pos.y)
    rectMode(CENTER)
    fill("red")
    rect(0,0,this.width,this.height)
    pop();
    
    
    }
    
    
    
    
    }
    
    







































