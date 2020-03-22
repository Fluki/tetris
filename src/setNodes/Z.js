const setNodesZ = (nodes, orientation, position) => {
  const newNodes = [];
  if (orientation === 0 || orientation === 2) {
    for (let i = 0; i < nodes.length; i++) {
      for (let j = 0; j < 2; j++) {
        for (let k = 0; k < 2; k++) {
          if (
            position.x + j + k === nodes[i].position.x &&
            position.y + k === nodes[i].position.y
          ) {
            newNodes.push(nodes[i]);
          }
        }
      }
    }
  }

  if (orientation === 1 || orientation === 3) {
    for (let i = 0; i < nodes.length; i++) {
      for (let j = 0; j < 2; j++) {
        for (let k = 0; k < 2; k++) {
          if (
            position.x + j === nodes[i].position.x &&
            position.y + k - j === nodes[i].position.y
          ) {
            newNodes.push(nodes[i]);
          }
        }
      }
    }
  }
  return newNodes;
};

export default setNodesZ;
