
class MovingObject {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  }

  move(){
    this.pos[0] = this.pos[0] + this.vel[0];
    this.pos[1] = this.pos[1] + this.vel[1];
    return this.pos;
  }
}


// let obj = new MovingObject({ pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"});
// // obj.draw(ctx);
// obj.move();
// console.log(obj.pos);

module.exports = MovingObject;
