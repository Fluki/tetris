const setNodesT = (nodes, orientation, position) => {
  const newNodes = [];
  if (orientation === 0) {
    for (let i = 0; i < nodes.length; i++) {
      if (
        position.x + 1 === nodes[i].position.x &&
        position.y + 1 === nodes[i].position.y
      ) {
        newNodes.push(nodes[i]);
      }

      for (let j = 0; j < 3; j++) {
        if (
          position.x + j === nodes[i].position.x &&
          position.y === nodes[i].position.y
        ) {
          newNodes.push(nodes[i]);
        }
      }
    }
  }
  if (orientation === 1) {
    for (let i = 0; i < nodes.length; i++) {
      if (
        position.x + 1 === nodes[i].position.x &&
        position.y + 1 === nodes[i].position.y
      ) {
        newNodes.push(nodes[i]);
      }

      for (let j = 0; j < 3; j++) {
        if (
          position.x === nodes[i].position.x &&
          position.y + j === nodes[i].position.y
        ) {
          newNodes.push(nodes[i]);
        }
      }
    }
  }

  if (orientation === 2) {
    for (let i = 0; i < nodes.length; i++) {
      if (
        position.x + 1 === nodes[i].position.x &&
        position.y === nodes[i].position.y
      ) {
        newNodes.push(nodes[i]);
      }

      for (let j = 0; j < 3; j++) {
        if (
          position.x + j === nodes[i].position.x &&
          position.y + 1 === nodes[i].position.y
        ) {
          newNodes.push(nodes[i]);
        }
      }
    }
  }
  if (orientation === 3) {
    for (let i = 0; i < nodes.length; i++) {
      if (
        position.x === nodes[i].position.x &&
        position.y + 1 === nodes[i].position.y
      ) {
        newNodes.push(nodes[i]);
      }

      for (let j = 0; j < 3; j++) {
        if (
          position.x + 1 === nodes[i].position.x &&
          position.y + j === nodes[i].position.y
        ) {
          newNodes.push(nodes[i]);
        }
      }
    }
  }

  return newNodes;
};

export default setNodesT;
