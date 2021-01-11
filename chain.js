class Chain{
    constructor(body1,body2,xoffset)
    {

       
      
        var c_options=
        {
            bodyA:body1,
            bodyB:body2,
           pointB:{x:xoffset,y:0}
        }
        
        this.xoff=xoffset;
        this.chain= Constraint.create(c_options);
        World.add(world,this.chain);
      }
      display()
      {
          var A=this.chain.bodyA.position;
          var B=this.chain.bodyB.position;
          stroke("yellow")
        strokeWeight(4);
        line(A.x,A.y, B.x+this.xoff,B.y);
      }
    }
