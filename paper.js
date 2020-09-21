class Paper {
    constructor(x,y,r){
        var options= {
        }
        this.body= Bodies.circle(x,y,r,options);
        World.add(world, this.body);
        this.r= r; 
    }

    display(){
        var pos= this.body.position;
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.r, this.r);
    }
}