class Node {
  constructor(x, y) {
    this.position = { x, y };
    this.isPopulated = false;
  }
}

const WIDTH = 12;
const HEIGHT = 25;

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

export default Node;
