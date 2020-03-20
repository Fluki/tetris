import Shape from "./shape.js";

class Object extends Shape {
  constructor(type, x, y) {
    super(type);
    this.position = { x, y };
  }

  // prolaziti kroz svaki node i cekirati zatim vracati vrednost
  // brisanje iza sebe (da resetNode mora da se ukine)
  // fali nam colision
  // nakon kompleta reda spustti sve ostale na dno
  // score u zavisnosti u linija pobrisanih score je bolji x1 x2 x3 x4
  // nakon sudara treba isprazniti liniju
  // da li je brzina 0 i gde je naseljena
  // boje
  // brzina
  // gameover
  // multiplayer

  move() {
    this.position.y = this.position.y + 1;
    if (this.position.y > 24) {
      this.position.y = 24;
    }
  }
  moveLeft() {
    //   TODO URADI DA MOZE LEPO DA SE SALTA levo i desno brze nego sto pada dole
    this.position.x = this.position.x - 1;
  }
  moveRight() {
    this.position.x = this.position.x + 1;
  }
}

export default Object;
