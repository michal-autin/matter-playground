import * as Matter from "matter-js";

function Boundary(x, y, width, height, angle) {
  var options = {
    friction: 0.5,
    restitution: 0.9,
    isStatic: true,
    angle: angle
  };
  this.body = Matter.Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  this.angle = angle;

  Matter.World.add(engine.world, this.body);

  this.show = function() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    stroke(200);
    fill(250, 0, 0);
    rect(0, 0, this.width, this.height);
    pop();
  };
}

export default Boundary;
