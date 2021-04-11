class Helicoptor {
    constructor(x,y,w,h){
        var prop1 = {
            isStatic : true 
        }
        this.body = Bodies.rectangle(x,y,w,h,prop1);
        this.width = w ;
        this.height = h ; 
        World.add(world,this.body);
        this.img = loadImage ("helicopter.png")
    }
    display(){
        imageMode(CENTER)
        image(this.img,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}