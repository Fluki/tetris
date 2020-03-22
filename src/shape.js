//import Tetromino from "./tetromino.js";

class Shape {
  constructor(type) {
    this.type = type;
    this.nodes = [];
    this.setColor();
  }

  // sada imamo position zasto4?????????
  // IMA 4 0 je default ne treba 5. kkk nisam hteo da te ispravljam nego sma mislio da imas drugacijju nameru

  // 0 1 2 3 bez 4 moja greska tamo sam pisao do 3
  // ma ispravljaj samo
  // za |
  // idi u igricu i rotira T
  // i reci koliko ima pozicija
  // za | 0 i 2 <---- su isti dap
  //
  /////////////////////SAND BOX ////////////////////////////
  //mi ovde moramo da pitamo koja je orijentacija
  // test() {
  //   if (this.orientation === 0 || this.orientation === 2) {
  //     for (let i = 0; i < nodes.length; i++) {
  //       for (let j = 0; j < 4; j++) {
  //         if (
  //           this.position.x === nodes[i].position.x &&
  //           this.position.y + j === nodes[i].position.y
  //         ) {
  //           newNodes.push(nodes[i]);
  //         }
  //       }
  //     }
  //   }
  //BITNO nama su x i y gornji desni ugao znaci
  //da ali ce da rotiri oko gornjeg coska
  // ne oko sredine
  // more sve da se siftuje dole za 2 polja
  // moze?
  // za ovu dvojku se slazam ali sta kec radi??
  // pomera ga za 1 u desno nema smisla
  //  u pravu si
  // nisam siguran sad mozda ce trebati neka korekcija aj da testiramo ovo
  //   if (this.orientation === 1 || this.orientation === 3) {
  //     for (let i = 0; i < nodes.length; i++) {
  //       for (let j = 0; j < 4; j++) {
  //         if (
  //           this.position.x + j === nodes[i].position.x &&
  //           this.position.y + 2 === nodes[i].position.y
  //         ) {
  //           newNodes.push(nodes[i]);
  //         }
  //       }
  //     }
  //   }
  // }
  //
  /////////////////////////////////////////////////////
  //
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
    //arr
    const newNodes = [];

    switch (this.type) {
      case "O":
        for (let i = 0; i < nodes.length; i++) {
          for (let j = 0; j < 2; j++) {
            for (let k = 0; k < 2; k++)
              if (
                this.position.x + j === nodes[i].position.x &&
                this.position.y + k === nodes[i].position.y
              ) {
                newNodes.push(nodes[i]);
              }
          }
        }
        break;
      case "I":
        if (this.orientation === 0 || this.orientation === 2) {
          for (let i = 0; i < nodes.length; i++) {
            for (let j = 0; j < 4; j++) {
              if (
                this.position.x === nodes[i].position.x &&
                this.position.y + j === nodes[i].position.y
              ) {
                newNodes.push(nodes[i]);
              }
            }
          }
        }
        if (this.orientation === 1 || this.orientation === 3) {
          for (let i = 0; i < nodes.length; i++) {
            for (let j = 0; j < 4; j++) {
              if (
                this.position.x + j - 1 === nodes[i].position.x &&
                this.position.y + 2 === nodes[i].position.y
              ) {
                newNodes.push(nodes[i]);
              }
            }
          }
        }
        break;
      case "L":
        if (this.orientation === 0) {
          for (let i = 0; i < nodes.length; i++) {
            if (
              this.position.x + 2 === nodes[i].position.x &&
              this.position.y + 2 === nodes[i].position.y
            ) {
              newNodes.push(nodes[i]);
            }

            for (let j = 0; j < 3; j++) {
              if (
                this.position.x + 1 === nodes[i].position.x &&
                this.position.y + j === nodes[i].position.y
              ) {
                newNodes.push(nodes[i]);
              }
            }
          }
        }
        if (this.orientation === 1) {
          for (let i = 0; i < nodes.length; i++) {
            for (let i = 0; i < nodes.length; i++) {
              if (
                this.position.x === nodes[i].position.x &&
                this.position.y + 1 === nodes[i].position.y
              ) {
                newNodes.push(nodes[i]);
              }

              for (let j = 0; j < 3; j++) {
                if (
                  this.position.x + j === nodes[i].position.x &&
                  this.position.y === nodes[i].position.y
                ) {
                  newNodes.push(nodes[i]);
                }
              }
            }
          }
        }
        if (this.orientation === 2) {
          for (let i = 0; i < nodes.length; i++) {
            for (let i = 0; i < nodes.length; i++) {
              if (
                this.position.x + 1 === nodes[i].position.x &&
                this.position.y === nodes[i].position.y
              ) {
                newNodes.push(nodes[i]);
              }

              for (let j = 0; j < 3; j++) {
                if (
                  this.position.x + 2 === nodes[i].position.x &&
                  this.position.y + j === nodes[i].position.y
                ) {
                  newNodes.push(nodes[i]);
                }
              }
            }
          }
        }
        if (this.orientation === 3) {
          for (let i = 0; i < nodes.length; i++) {
            for (let i = 0; i < nodes.length; i++) {
              if (
                this.position.x + 2 === nodes[i].position.x &&
                this.position.y - 1 === nodes[i].position.y
              ) {
                newNodes.push(nodes[i]);
              }

              for (let j = 0; j < 3; j++) {
                if (
                  this.position.x + j === nodes[i].position.x &&
                  this.position.y === nodes[i].position.y
                ) {
                  newNodes.push(nodes[i]);
                }
              }
            }
          }
        }
        break;

      case "J":
        if (this.orientation === 0) {
          for (let i = 0; i < nodes.length; i++) {
            if (
              this.position.x === nodes[i].position.x &&
              this.position.y + 2 === nodes[i].position.y
            ) {
              newNodes.push(nodes[i]);
            }

            for (let j = 0; j < 3; j++) {
              if (
                this.position.x + 1 === nodes[i].position.x &&
                this.position.y + j === nodes[i].position.y
              ) {
                newNodes.push(nodes[i]);
              }
            }
          }
        }
        if (this.orientation === 1) {
          for (let i = 0; i < nodes.length; i++) {
            for (let i = 0; i < nodes.length; i++) {
              if (
                this.position.x === nodes[i].position.x &&
                this.position.y - 1 === nodes[i].position.y
              ) {
                newNodes.push(nodes[i]);
              }

              for (let j = 0; j < 3; j++) {
                if (
                  this.position.x + j === nodes[i].position.x &&
                  this.position.y === nodes[i].position.y
                ) {
                  newNodes.push(nodes[i]);
                }
              }
            }
          }
        }
        if (this.orientation === 2) {
          for (let i = 0; i < nodes.length; i++) {
            for (let i = 0; i < nodes.length; i++) {
              if (
                this.position.x + 2 === nodes[i].position.x &&
                this.position.y === nodes[i].position.y
              ) {
                newNodes.push(nodes[i]);
              }

              for (let j = 0; j < 3; j++) {
                if (
                  this.position.x + 1 === nodes[i].position.x &&
                  this.position.y + j === nodes[i].position.y
                ) {
                  newNodes.push(nodes[i]);
                }
              }
            }
          }
        }
        if (this.orientation === 3) {
          for (let i = 0; i < nodes.length; i++) {
            for (let i = 0; i < nodes.length; i++) {
              if (
                this.position.x + 2 === nodes[i].position.x &&
                this.position.y + 1 === nodes[i].position.y
              ) {
                newNodes.push(nodes[i]);
              }

              for (let j = 0; j < 3; j++) {
                if (
                  this.position.x + j === nodes[i].position.x &&
                  this.position.y === nodes[i].position.y
                ) {
                  newNodes.push(nodes[i]);
                }
              }
            }
          }
        }
        break;
      case "Z":
        if (this.orientation === 0 || this.orientation === 2) {
          for (let i = 0; i < nodes.length; i++) {
            for (let j = 0; j < 2; j++) {
              for (let k = 0; k < 2; k++) {
                if (
                  this.position.x + j + k === nodes[i].position.x &&
                  this.position.y + k === nodes[i].position.y
                ) {
                  newNodes.push(nodes[i]);
                }
              }
            }
          }
        }

        if (this.orientation === 1 || this.orientation === 3) {
          for (let i = 0; i < nodes.length; i++) {
            for (let j = 0; j < 2; j++) {
              for (let k = 0; k < 2; k++) {
                if (
                  this.position.x + j === nodes[i].position.x &&
                  this.position.y + k - j === nodes[i].position.y
                ) {
                  newNodes.push(nodes[i]);
                }
              }
            }
          }
        }
        break;

      case "S":
        if (this.orientation === 0 || this.orientation === 2) {
          for (let i = 0; i < nodes.length; i++) {
            for (let j = 0; j < 2; j++) {
              for (let k = 0; k < 2; k++) {
                if (
                  this.position.x + j - k + 1 === nodes[i].position.x &&
                  this.position.y + k === nodes[i].position.y
                ) {
                  newNodes.push(nodes[i]);
                }
              }
            }
          }

          if (this.orientation === 1 || this.orientation === 3) {
            for (let i = 0; i < nodes.length; i++) {
              for (let j = 0; j < 2; j++) {
                for (let k = 0; k < 2; k++) {
                  if (
                    this.position.x + j === nodes[i].position.x &&
                    this.position.y + k === nodes[i].position.y
                  ) {
                    newNodes.push(nodes[i]);
                  }
                }
              }
            }
          }
        }
        break;
      case "T":
        if (this.orientation === 0) {
          for (let i = 0; i < nodes.length; i++) {
            if (
              this.position.x + 1 === nodes[i].position.x &&
              this.position.y + 1 === nodes[i].position.y
            ) {
              newNodes.push(nodes[i]);
            }

            for (let j = 0; j < 3; j++) {
              if (
                this.position.x + j === nodes[i].position.x &&
                this.position.y === nodes[i].position.y
              ) {
                newNodes.push(nodes[i]);
              }
            }
          }
        }
        if (this.orientation === 1) {
          for (let i = 0; i < nodes.length; i++) {
            if (
              this.position.x + 1 === nodes[i].position.x &&
              this.position.y + 1 === nodes[i].position.y
            ) {
              newNodes.push(nodes[i]);
            }

            for (let j = 0; j < 3; j++) {
              if (
                this.position.x === nodes[i].position.x &&
                this.position.y + j === nodes[i].position.y
              ) {
                newNodes.push(nodes[i]);
              }
            }
          }
        }

        if (this.orientation === 2) {
          for (let i = 0; i < nodes.length; i++) {
            if (
              this.position.x + 1 === nodes[i].position.x &&
              this.position.y === nodes[i].position.y
            ) {
              newNodes.push(nodes[i]);
            }

            for (let j = 0; j < 3; j++) {
              if (
                this.position.x + j === nodes[i].position.x &&
                this.position.y + 1 === nodes[i].position.y
              ) {
                newNodes.push(nodes[i]);
              }
            }
          }
        }
        if (this.orientation === 3) {
          for (let i = 0; i < nodes.length; i++) {
            if (
              this.position.x === nodes[i].position.x &&
              this.position.y + 1 === nodes[i].position.y
            ) {
              newNodes.push(nodes[i]);
            }

            for (let j = 0; j < 3; j++) {
              if (
                this.position.x + 1 === nodes[i].position.x &&
                this.position.y + j === nodes[i].position.y
              ) {
                newNodes.push(nodes[i]);
              }
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
    //Naseljava upisane nodove
  }

  removeShape() {
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].isPopulated = false;
    }
    this.nodes = [];
  }

  //sta ako bi ovo samo vracalo nodove
  //napakuje niz proveri da li su svi slobodni
  //ako jesu upisuje ih u this.nodes
  //ako nisu vrati

  //NAME CHANGE TO getNewNodes
  //returns false if one of them is populated
}
export default Shape;
