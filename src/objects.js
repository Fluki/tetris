class Shape {
  // L,J,Z,O,|,z

  constructor(type) {
    this.type = type;
  }
}

class Node {
  constructor(x, y) {
    this.position = { x, y };
    this.isPopulated = false;
  }
}
const WIDTH = 10;
const HEIGHT = 10;

const generateNodes = () => {
  const nodes = [];
  for (let i = 0; i < HEIGHT; i++) {
    for (let j = 0; j < WIDTH; j++) {
      nodes.push(new Node(j, i));
    }
  }
  return nodes;
};
const nodes = generateNodes();

console.log(nodes);
class Object extends Shape {
  constructor(type, x, y) {
    super(type);
    this.position = { x, y };
  }
  //   Moguc prob. ne moze svaki da resetuje tablu
  reset(nodes) {
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].isPopulated = false;
    }
  }
  move() {
    this.position.y = this.position.y + 1;
  }
  moveLeft() {
    //   TODO URADI DA MOZE LEPO DA SE SALTA levo i desno brze nego sto pada dole
    this.position.x = this.position.x - 1;
  }
  moveRight() {
    this.position.x = this.position.x + 1;
  }

  addShapeToGrid(nodes) {
    switch (this.type) {
      case "O":
        for (let i = 0; i < nodes.length; i++) {
          if (
            this.position.x === nodes[i].position.x &&
            this.position.y === nodes[i].position.y
          ) {
            nodes[i].isPopulated = true;
          }
          if (
            this.position.x + 1 === nodes[i].position.x &&
            this.position.y === nodes[i].position.y
          ) {
            nodes[i].isPopulated = true;
          }
          if (
            this.position.x === nodes[i].position.x &&
            this.position.y + 1 === nodes[i].position.y
          ) {
            nodes[i].isPopulated = true;
          }
          if (
            this.position.x + 1 === nodes[i].position.x &&
            this.position.y + 1 === nodes[i].position.y
          ) {
            nodes[i].isPopulated = true;
          }
        }
        break;
      case "|":
        for (let i = 0; i < nodes.length; i++) {
          for (let j = 0; j < 4; j++) {
            if (
              this.position.x === nodes[i].position.x &&
              this.position.y + j === nodes[i].position.y
            ) {
              nodes[i].isPopulated = true;
            }
          }
        }
        break;
      case "L":
        for (let i = 0; i < nodes.length; i++) {
          if (
            this.position.x + 1 === nodes[i].position.x &&
            this.position.y + 2 === nodes[i].position.y
          ) {
            nodes[i].isPopulated = true;
          }

          for (let j = 0; j < 3; j++) {
            if (
              this.position.x === nodes[i].position.x &&
              this.position.y + j === nodes[i].position.y
            ) {
              nodes[i].isPopulated = true;
            }
          }
        }
        break;
      case "L":
        for (let i = 0; i < nodes.length; i++) {
          if (
            this.position.x + 1 === nodes[i].position.x &&
            this.position.y + 2 === nodes[i].position.y
          ) {
            nodes[i].isPopulated = true;
          }

          for (let j = 0; j < 3; j++) {
            if (
              this.position.x === nodes[i].position.x &&
              this.position.y + j === nodes[i].position.y
            ) {
              nodes[i].isPopulated = true;
            }
          }
        }
        break;
      case "J":
        for (let i = 0; i < nodes.length; i++) {
          if (
            this.position.x === nodes[i].position.x &&
            this.position.y + 2 === nodes[i].position.y
          ) {
            nodes[i].isPopulated = true;
          }

          for (let j = 0; j < 3; j++) {
            if (
              this.position.x + 1 === nodes[i].position.x &&
              this.position.y + j === nodes[i].position.y
            ) {
              nodes[i].isPopulated = true;
            }
          }
        }
        break;
      case "Z":
        for (let i = 0; i < nodes.length; i++) {
          if (
            this.position.x === nodes[i].position.x &&
            this.position.y === nodes[i].position.y
          ) {
            nodes[i].isPopulated = true;
          }
          if (
            this.position.x + 1 === nodes[i].position.x &&
            this.position.y === nodes[i].position.y
          ) {
            nodes[i].isPopulated = true;
          }
          if (
            this.position.x + 1 === nodes[i].position.x &&
            this.position.y + 1 === nodes[i].position.y
          ) {
            nodes[i].isPopulated = true;
          }
          if (
            this.position.x + 2 === nodes[i].position.x &&
            this.position.y + 1 === nodes[i].position.y
          ) {
            nodes[i].isPopulated = true;
          }
        }
        break;
      case "S":
        for (let i = 0; i < nodes.length; i++) {
          if (
            this.position.x + 1 === nodes[i].position.x &&
            this.position.y === nodes[i].position.y
          ) {
            nodes[i].isPopulated = true;
          }
          if (
            this.position.x + 2 === nodes[i].position.x &&
            this.position.y === nodes[i].position.y
          ) {
            nodes[i].isPopulated = true;
          }
          if (
            this.position.x === nodes[i].position.x &&
            this.position.y + 1 === nodes[i].position.y
          ) {
            nodes[i].isPopulated = true;
          }
          if (
            this.position.x + 1 === nodes[i].position.x &&
            this.position.y + 1 === nodes[i].position.y
          ) {
            nodes[i].isPopulated = true;
          }
        }
    }
  }
}

function genrateObject() {
  const shapes = ["L", "J", "|", "O", "S", "Z"];
  var shape = shapes[Math.floor(Math.random() * shapes.length)];
  return new Object(shape, 0, 0);
}

var testObj = genrateObject();

const canvas = document.getElementById("canvas");

function paintNodes(nodes) {
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 540, 540);

  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].isPopulated) {
      ctx.fillRect(nodes[i].position.x * 54, nodes[i].position.y * 54, 54, 54);
    }
  }
}

fallingDown = setInterval(fallingDownLoop, 1000);
setInterval(GameLoop, 100);

function fallingDownLoop() {
  testObj.move();
}

function GameLoop() {
  console.log(controller);
  if (controller.right.active) {
    testObj.moveRight();
  }
  if (controller.left.active) {
    testObj.moveLeft();
  }
  testObj.reset(nodes);
  testObj.addShapeToGrid(nodes);
  paintNodes(nodes);
}

("use strict");
var ButtonInput = function() {
  this.active = false;
  this.getInput = function(down) {
    if (this.active != down) {
      this.active = down;
    }
  };
};

var Controller = function() {
  this.right = new ButtonInput();
  this.left = new ButtonInput();

  this.keyDownUp = function(event) {
    /* console.log(this) */
    var down = event.type == "keydown" ? true : false;

    switch (event.keyCode) {
      case 37:
        this.left.getInput(down);
        break;
      case 39:
        this.right.getInput(down);
        break;
    }
  };
  this.handleKeyDownUp = event => {
    this.keyDownUp(event);
  };
};

var controller = new Controller();

/* window.addEventListener("keydown", test.KeyDownUp); */
window.addEventListener("keydown", controller.handleKeyDownUp);
window.addEventListener("keyup", controller.handleKeyDownUp);
