class Box {
    constructor(x,y,w,h){
        var prop1 = {
            restitution: 1  
        }
        this.body = Bodies.rectangle(x,y,w,h,prop1);
        this.width = w ;
        this.height = h ; 
        World.add(world,this.body); 
    }
    display(){
        rectMode(CENTER)
        fill("blue")
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}