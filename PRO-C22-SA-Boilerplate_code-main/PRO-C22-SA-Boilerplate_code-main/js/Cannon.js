class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannon = loadImage("./assets/canon.png")
    this.base = loadImage("./assets/cannonBase.png")
    
  }
  display(){
    push();
    translate(this.x,this.y)
    rotate(this.angle);
    imageMode(CENTER)
image(this.cannon, 0, 0, this.width, this.height);
pop();
image(this.base, this.x, this.y, this.width, this.height);
  }
}
