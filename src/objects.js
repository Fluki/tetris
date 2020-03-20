import Shape from "./shape.js";
import Node from "./node.js";
import Object from "./obj.js";
import Controller from "./controler.js";

const canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

const numberOfNodesWidth = 12;
const numberOfNodesHeight = 25;

class Game {
  constructor() {
    this.objects = [];
    this.controller = new Controller();
  }
  //treba da imamo shapes
  generateNodes() {
    const nodes = [];
    for (let i = 0; i < numberOfNodesHeight; i++) {
      for (let j = 0; j < numberOfNodesWidth; j++) {
        nodes.push(new Node(j, i));
      }
    }
    // treba naci bolje mesto za ovo...
    window.addEventListener("keydown", this.controller.handleKeyDownUp);
    window.addEventListener("keyup", this.controller.handleKeyDownUp);

    this.nodes = nodes;
  }

  spawnShape() {
    const shapes = ["L", "J", "|", "O", "S", "Z"];
    var shape = shapes[Math.floor(Math.random() * shapes.length)];
    this.objects.push(new Object(shape, 5, 0));
  }

  paint() {
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const canvasX = canvasWidth / numberOfNodesWidth;
    const canvasY = canvasHeight / numberOfNodesHeight;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // mreza
    for (let i = 0; i < canvasWidth; i++) {
      for (let j = 0; j < canvasHeight; j++) {
        ctx.strokeRect(0 + i * canvasX, 0 + j * canvasY, canvasX, canvasY);
      }
    }

    for (let i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].isPopulated) {
        ctx.fillRect(
          this.nodes[i].position.x * canvasX,
          this.nodes[i].position.y * canvasY,
          canvasX,
          canvasY
        );
      }
    }
  }

  startGameLoop() {
    setInterval(() => this.gameLoop(), 100);
  }
  resetNodes() {
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].isPopulated = false;
    }
  }
  gameLoop() {
    // function fallingDownLoop() {
    //   this.objects[this.objects.length - 1].move();
    // }
    // console.log(controller);
    // console.log(this);

    // move nam menja kordinate ne pitajuci za okolinu
    this.objects[this.objects.length - 1].move();

    if (this.controller.right.active) {
      this.objects[this.objects.length - 1].moveRight();
    }
    if (this.controller.left.active) {
      this.objects[this.objects.length - 1].moveLeft();
    }
    this.resetNodes();
    // debugger;
    this.objects[this.objects.length - 1].addShapeToGrid(this.nodes);
    this.paint();
  }
}

function init() {
  const test = new Game();
  test.spawnShape();
  test.generateNodes();
  test.startGameLoop();
}

init();
