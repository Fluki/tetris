import setNodesSquare from "./setNodes/square.js";
import setNodesPipe from "./setNodes/pipe.js";
import setNodesL from "./setNodes/L.js";
import setNodesJ from "./setNodes/J.js";
import setNodesZ from "./setNodes/Z.js";
import setNodesS from "./setNodes/S.js";
import setNodesT from "./setNodes/T.js";

class Tetramino {
  constructor(type, x, y) {
    this.type = type;
    this.nodes = [];
    this.setColor();
    this.position = { x, y };
    this.orientation = 0;
    this.velocityY = 1;
    this.velocityX = 0;
  }

  rotate() {
    this.orientation = (this.orientation + 1) % 4;
  }

  moveHorizontaly(nodes) {
    this.dePopulateNodes();

    this.position.x += this.velocityX;
    if (!this.setNewNodes(nodes)) {
      this.position.x -= this.velocityX;
      this.velocityX = 0;
    }

    this.populateNodes();
  }

  stopHorizontaly() {
    this.velocityX = 0;
  }

  moveLeft() {
    this.velocityX = -1;
  }
  moveRight() {
    this.velocityX = 1;
  }

  moveVerticaly(nodes, generation) {
    //seting the speed
    if (generation !== 10) {
      return;
    }
    this.dePopulateNodes();
    this.position.y += this.velocityY;

    if (!this.setNewNodes(nodes)) {
      this.position.y -= this.velocityY;
      this.velocityY = 0;
      this.velocityX = 0;
    }

    this.populateNodes();
  }

  setColor() {
    switch (this.type) {
      case "O":
        this.color = "yellow";
        break;
      case "I":
        this.color = "pink";
        break;
      case "L":
        this.color = "orange";
        break;
      case "J":
        this.color = "green";
        break;
      case "Z":
        this.color = "red";
        break;
      case "S":
        this.color = "blue";
        break;
      case "T":
        this.color = "purple";
        break;
    }
  }

  setNewNodes(nodes) {
    let newNodes;

    switch (this.type) {
      case "O":
        newNodes = setNodesSquare(nodes, this.position);
        break;
      case "I":
        newNodes = setNodesPipe(nodes, this.orientation, this.position);
        break;
      case "L":
        newNodes = setNodesL(nodes, this.orientation, this.position);
        break;
      case "J":
        newNodes = setNodesJ(nodes, this.orientation, this.position);
        break;
      case "Z":
        newNodes = setNodesZ(nodes, this.orientation, this.position);
        break;
      case "S":
        newNodes = setNodesS(nodes, this.orientation, this.position);
        break;
      case "T":
        newNodes = setNodesT(nodes, this.orientation, this.position);
    }

    for (let i = 0; i < newNodes.length; i++) {
      if (newNodes[i].isPopulated) {
        return false;
      }
    }

    this.nodes = newNodes;
    return true;
  }

  dePopulateNodes() {
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].isPopulated = false;
    }
  }

  populateNodes() {
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].isPopulated = true;
      this.nodes[i].color = this.color;
    }
  }

  removeShape() {
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].isPopulated = false;
    }
    this.nodes = [];
  }
}

export default Tetramino;
