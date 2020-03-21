import Shape from "./shape.js";
import Node from "./node.js";
import Object from "./obj.js";
import Controller from "./controler.js";
import Tetromino from "./tetromino.js";

const canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "green";

const numberOfNodesWidth = 12;
const numberOfNodesHeight = 25;

class Game {
  constructor() {
    this.objects = [];
    this.controller = new Controller();
  }

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
    console.log(nodes);
  }

  spawnShape() {
    if (
      this.objects.length === 0 ||
      this.objects[this.objects.length - 1].velocityY === 0
    ) {
      const shapes = ["I"];//["L", "J", "I", "O", "S", "Z", "T"];
      var shape = shapes[Math.floor(Math.random() * shapes.length)];
      this.objects.push(new Object(shape, 5, 0));
    }
  }

  generateWalls() {
    for (let i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].position.y === 24) {
        this.nodes[i].isPopulated = true;
        this.nodes[i].isWall = true;
      }
      if (this.nodes[i].position.x === 0) {
        this.nodes[i].isPopulated = true;
        this.nodes[i].isWall = true;
      }
      if (this.nodes[i].position.x === 11) {
        this.nodes[i].isPopulated = true;
        this.nodes[i].isWall = true;
      }
    }
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
        ctx.fillStyle = this.nodes[i].color;
        if (this.nodes[i].isWall) {
          ctx.fillStyle = "black";
        }
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

  checkForGameOver() {
    // ako je jedan od poslednjih nodova naseljen
    //pri cemu je brzina poslednja obj 0
    //
  }

  gameLoop() {
    this.spawnShape();

    const lastAdded = this.objects[this.objects.length - 1];

    if (this.controller.right.active && lastAdded.velocityY) {
      lastAdded.moveRight();
    } else if (this.controller.left.active && lastAdded.velocityY) {
      lastAdded.moveLeft();
    } else {
      lastAdded.stopHorizontaly();
      console.log("stop");
      // kad dodje do ovde iskluciti kontrle
    }

    if(this)controller.up.active{  lastAdded.rotate();


    }
  
  

    for (let i = 0; i < this.objects.length; i++) {
      this.objects[i].moveHorizontaly(this.nodes);
      this.objects[i].moveVerticaly(this.nodes);
    }

    this.paint();
  }
}

function init() {
  const test = new Game();

  test.generateNodes();
  test.generateWalls();
  test.startGameLoop();
}

init();
