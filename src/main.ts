// module aliases
import Matter, { IChamferableBodyDefinition } from "matter-js";

const PI = Math.PI;

var { Engine, Render, World, Bodies, Runner } = Matter;

var boxes = [];
var world: Matter.World;
var boundaries: Matter.Body[] = [];

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
  element: document.querySelector("div.playground"),
  engine: engine,
  options: {
    wireframes: false
    showAngleIndicator: true,
    showVelocityIndicator: true
  }
});

var runner = Runner.create();
Runner.run(runner, engine);

// create two boxes and a ground

var ballOptions = {
  restitution: 0.8,
  friction: 0.1
};

var boundAngle = PI / 12;

var boxA = Bodies.circle(300, 200, 15, { ...ballOptions, mass: 1 });
var boxB = Bodies.circle(350, 50, 20, { ...ballOptions, mass: 1 });
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

var boundaryOptions: IChamferableBodyDefinition = {
  isStatic: true,
  friction: 1,
  restitution: 0.9,
  render: {
    fillStyle: "red",
    strokeStyle: "blue",
    lineWidth: 1
  }
};
var setup = (width: number, height: number): void => {
  boundaries.push(
    Bodies.rectangle((width * 1) / 3, height / 4, width / 2, 10, {
      ...boundaryOptions,
      angle: boundAngle
    })
  );
  boundaries.push(
    Bodies.rectangle((width * 1) / 3, height / 1.5, width / 2, 10, {
      ...boundaryOptions,
      angle: boundAngle
    })
  );
  boundaries.push(
    Bodies.rectangle((width * 2) / 3, height / 2.2, width / 2, 10, {
      ...boundaryOptions,
      angle: -boundAngle
    })
  );

  World.add(engine.world, boundaries);
};

// setup(700, 600);

// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, ground]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);

// function setup() {
//   createCanvas(700, 600);
//   engine = Engine.create();
//   world = engine.world;
//   // Engine.run(engine);
//   boundaries.push(
//     new Boundary((width * 1) / 3, height / 1.5, width / 2, 10, PI / 8)
//   );
//   boundaries.push(
//     new Boundary((width * 2) / 3, height / 3, width / 2, 10, -PI / 8)
//   );

//   // world.gravity.x = 0.2;

//   // World.add(world, boundaries);
// }

// // function mouseDragged() {
// function mouseDragged(event) {
//   console.log(event);
//   console.log(mouseButton);
//   boxes.push(
//     new Box(mouseX, mouseY, random(5, 10), {
//       fill: 100
//     })
//   );
//   // return false;
// }

// function draw() {
//   background(50);
//   Engine.update(engine);

//   var visibleBoxes = boxes.filter(box => !box.isOffScreen());
//   boxes.filter(box => box.isOffScreen()).forEach(b => b.removeFromWorld());
//   boxes = visibleBoxes;

//   boxes.forEach(box => {
//     box.show();
//   });
//   boundaries.forEach(b => b.show());
//   textSize(16);
//   fill(255);
//   text("balls: " + boxes.length, 10, 30);
//   text("bodies: " + world.bodies.length, 10, 50);
// }

// var { Engine, Render, World, Bodies } = Matter;
