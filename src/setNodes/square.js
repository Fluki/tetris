const setNodesSquare = (nodes, position) => {
  const newNodes = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < 2; k++)
        if (
          position.x + j === nodes[i].position.x &&
          position.y + k === nodes[i].position.y
        ) {
          newNodes.push(nodes[i]);
        }
    }
  }
  return newNodes;
};

export default setNodesSquare;
