import Node from "./node.js"

const WIDTH = 10;
const HEIGHT = 10;

const generateNodes = () => {
	const nodes = []
	for(let i = 0; i < HEIGHT; i++){
		for(let j = 0; j < WIDTH; j++){
			nodes.push(new Node(j, i))	
		}
	}
	return nodes
}
const nodes = generateNodes();

console.log(nodes);