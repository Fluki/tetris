import Shape from "./shape.js";
import Node from "./node.js";

class Object extends Shape {
  constructor(type, x, y) {
    super(type);
    this.position = { x, y };
    //

    this.orientation = 0;
    // 0 default orijentacija
    // 1 90 stepeni u smeru kazaljke u odnosu na 0
    // 2 180 stepeni u smeru kazaljke u odnosu na 0
    // 3 270 stepeni u smeru kazaljke u odnosu na 0

    this.velocityY = 1; // 0 miruje
    //horiznotalna brzina
    this.velocityX = 0; // 1 desno -1 levo
  }

  rotate() {
    this.orientation = (this.orientation + 1) % 4;
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

  //Move ce se u buducnosti pozivati na svaki shape
  // prvo pita za velocity
  //pa levo desno
  moveVerticaly(nodes, generation) {
    //seting the speed
    if (generation !== 10) {
      return;
    }
    this.dePopulateNodes();
    /////////////////////////////////////////////////////
    //move i addShapeToGrid
    //ne mora da ga brise prvo bolje prvo da proveri da li moze
    //ako ne moze ostavlja ga na isto mestu ali mu v stavlja na 0
    //
    //1. brise ga
    //2. proverava da li moze
    //3. menja poziciju
    //4. stavalja ga na novo mesto

    //Prvo pokusavam pomeranje
    // this.position.x += this.velocityX;
    this.position.y += this.velocityY;
    //this.getNewNodes //ako moze vraca true ako ne moze vraca false
    if (!this.setNewNodes(nodes)) {
      //ako ne moze
      //stari nacin horizotalni sudar gasi vertikalnu brzinu
      //sto ne zelimo
      //1. vraca poziciju na staro
      //2. postavlja brzinu na nula

      this.position.y -= this.velocityY;
      this.velocityY = 0;
      this.velocityX = 0;
      //mora da zna da li je doslo do hor ili ver sudara
    }

    this.populateNodes();
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
}

export default Object;
