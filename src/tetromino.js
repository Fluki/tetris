import Object from "./obj.js";
import Shape from "./shape.js";

class Tetromino {

  const shape = new Shape();

  setColor() {
    switch (shape.type) {
      case "O":
        shape.color = "yellow";
        break;
      case "I":
        shape.color = "pink";
        break;
      case "L":
        shape.color = "orange";
        break;
      case "J":
        shape.color = "green";
        break;
      case "Z":
        shape.color = "red";
        break;
      case "S":
        shape.color = "blue";
        break;
      case "T":
        shape.color = "purple";
        break;
    }
  }
  setNewNodes(nodes) {
    //arr
    const newNodes = [];

    switch (shape.type) {
      case "O":
        for (let i = 0; i < nodes.length; i++) {
          for (let j = 0; j < 2; j++) {
            for (let k = 0; k < 2; k++)
              if (
                shape.position.x + j === nodes[i].position.x &&
                shape.position.y + k === nodes[i].position.y
              ) {
                newNodes.push(nodes[i]);
              }
          }
        }
        break;
      case "I":
        for (let i = 0; i < nodes.length; i++) {
          for (let j = 0; j < 4; j++) {
            if (
              shape.position.x === nodes[i].position.x &&
              shape.position.y + j === nodes[i].position.y
            ) {
              newNodes.push(nodes[i]);
            }
          }
        }
        break;
      case "L":
        for (let i = 0; i < nodes.length; i++) {
          if (
            shape.position.x + 1 === nodes[i].position.x &&
            shape.position.y + 2 === nodes[i].position.y
          ) {
            newNodes.push(nodes[i]);
          }

          for (let j = 0; j < 3; j++) {
            if (
              shape.position.x === nodes[i].position.x &&
              shape.position.y + j === nodes[i].position.y
            ) {
              newNodes.push(nodes[i]);
            }
          }
        }
        break;
      case "J":
        for (let i = 0; i < nodes.length; i++) {
          if (
            shape.position.x === nodes[i].position.x &&
            shape.position.y + 2 === nodes[i].position.y
          ) {
            newNodes.push(nodes[i]);
          }

          for (let j = 0; j < 3; j++) {
            if (
              shape.position.x + 1 === nodes[i].position.x &&
              shape.position.y + j === nodes[i].position.y
            ) {
              newNodes.push(nodes[i]);
            }
          }
        }
        break;
      case "Z":
        for (let i = 0; i < nodes.length; i++) {
          for (let j = 0; j < 2; j++) {
            for (let k = 0; k < 2; k++) {
              if (
                shape.position.x + j + k === nodes[i].position.x &&
                shape.position.y + k === nodes[i].position.y
              ) {
                newNodes.push(nodes[i]);
              }
            }
          }
        }
        break;
      case "S":
        for (let i = 0; i < nodes.length; i++) {
          for (let j = 0; j < 2; j++) {
            for (let k = 0; k < 2; k++) {
              if (
                shape.position.x + j - k + 1 === nodes[i].position.x &&
                shape.position.y + k === nodes[i].position.y
              ) {
                newNodes.push(nodes[i]);
              }
            }
          }
        }
        break;

      case "T":
        for (let i = 0; i < nodes.length; i++) {
          if (
            shape.position.x + 1 === nodes[i].position.x &&
            shape.position.y + 1 === nodes[i].position.y
          ) {
            newNodes.push(nodes[i]);
          }

          for (let j = 0; j < 3; j++) {
            if (
              shape.position.x + j === nodes[i].position.x &&
              shape.position.y === nodes[i].position.y
            ) {
              newNodes.push(nodes[i]);
            }
          }
        }
        break;
    }

    for (let i = 0; i < newNodes.length; i++) {
      if (newNodes[i].isPopulated) {
        return false;
      }
    }

    shape.nodes = newNodes;
    return true;
  }
}
export default Tetromino;
