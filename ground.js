class Ground{
constructor( x, y, width, height){
var options  = {
    isStatic: true 

}

this.body = Bodies.rectangles(x, y, width, height, options);
this.width = width;
this.height = height;
World.add = (world, this.body)

}
disply(){
var pos = this.body.position;
rectMode(CENTER);
fill(255);
rect(pos.x, pos.y, pos.width, pos.height);

}

}