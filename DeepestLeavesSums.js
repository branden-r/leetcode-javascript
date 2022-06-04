const deepestLeavesSum = (root) => {
  // use this to hold every node at the current depth
  let depth = [root];
  // use this to hold every node at the next depth
  let nextDepth = [];
  // break the loop by returning an answer
  while (true) {
    // loop over every node at the current depth
    for (node of depth) {
      // we will need to access the value of each node at the final depth
      // a null node has no value, so don't include them
      if (node.left !== null) nextDepth.push(node.left);
      if (node.right !== null) nextDepth.push(node.right);
    }
    // if we found a depth deeper than the current one, go down to it
    if (nextDepth.length > 0) {
      depth = nextDepth;
      nextDepth = [];
      // if we did not find a depth deeper than the current one, we're at the final depth
      // sum these nodes to find our answer
    } else return depth.reduce((sum, node) => sum + node.val, 0);
  }
};
