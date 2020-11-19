class drops{
    constructor(x,y){
this.body=Bodies.circle(x,y,radius);
World.add(world,this.body)
this.radius=radius
    }
display(){
ellipseMode(RADIUS)
ellipse(this.body.position.x,this.body.position.y,this.radius)

}



}