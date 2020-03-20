class Shape {
  constructor(type) {
    this.type = type;
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
export default Shape;
