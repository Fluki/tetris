const setNodesPipe = (nodes, orientation, position) => {
  const newNodes = [];
  if (orientation === 0 || orientation === 2) {
    for (let i = 0; i < nodes.length; i++) {
      for (let j = 0; j < 4; j++) {
        if (
          position.x === nodes[i].position.x &&
          position.y + j === nodes[i].position.y
        ) {
          newNodes.push(nodes[i]);
        }
      }
    }
  }
  if (orientation === 1 || orientation === 3) {
    for (let i = 0; i < nodes.length; i++) {
      for (let j = 0; j < 4; j++) {
        if (
          position.x + j - 1 === nodes[i].position.x &&
          position.y + 2 === nodes[i].position.y
        ) {
          newNodes.push(nodes[i]);
        }
      }
    }
  }
  return newNodes;
};

export default setNodesPipe;
