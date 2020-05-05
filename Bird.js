class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/g-63.png");
    this.smoke_image = loadImage("sprites/smoke.png");
    this.trajectory = [] ;

  }

  display() {
    super.display();
    if(this.body.position.x>200 && this.body.velocity.x>10){
    var pos= [this.body.position.x,this.body.position.y];
    this.trajectory.push(pos);
    console.log(this.trajectory);
    
      
    }
    
    for (var index = 0;  index<this.trajectory.length; index=index+1){
      image(this.smoke_image,this.trajectory[index][0],this.trajectory[index][1]);
    }
  }
}
