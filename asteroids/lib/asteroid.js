const MovingObject = require("./moving_object.js");
const Util = require('./utils.js');

class Asteroid extends MovingObject{
  constructor(pos){
    this.pos = pos;
    const COLOR = "#00FF00";
    const RADIUS = 10;
    this.vel = this.randomVec(Math.random(10));
    super({color: COLOR, radius: RADIUS, pos: this.pos, vel: this.vel});
  }
  randomVec (length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  }
  // Scale the length of a vector by the given amount.
  scale (vec, m) {
    return [vec[0] * m, vec[1] * m];
  }
}


let newAsteroid = new Asteroid([20,20]);
let canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");
newAsteroid.draw(ctx);
