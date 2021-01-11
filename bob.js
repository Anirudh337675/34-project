class Bob
{
    constructor(x,y,color)
    {
      
        
        this.body=  Bodies.rectangle(x,y,40,40)
        this.color=color
        this.width=40
        this.height=40

        World.add(world,this.body);
    }
    display()
    {
        var roc=this.body.position;
     
      
        rectMode(CENTER);
        noStroke
        fill(this.color);
        rect(roc.x,roc.y,this.width,this.height);
        
    }

}