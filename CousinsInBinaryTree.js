const isCousins = (root, x, y) => {
  // the root node is the only node at depth zero
  // it has no cousins
  if (root.val === x || root.val === y) return false;

  // use this to hold every node at the current depth
  let depth = [root.left, root.right];
  // use this for iterating at the next depth
  let nextDepth = [];
  // use this to track which value we found (x or y)
  let found = null;
  // use this to track which value is missing
  // if we found x, this is y, otherwise its x
  let missing = null;

  // break the loop by returning an answer
  while (true) {
    // loop over all the nodes at the current depth
    for (const [i, node] of depth.entries()) {
      // a null node has no value to check, so we move to the next one
      if (node === null) continue;
      // if we've already found one value:
      // (1) we don't need to check for both values, only the missing one
      // (2) we don't need to go to the next depth
      if (found !== null) {
        // if we found the missing value, we're done
        if (missing === node.val)
          // we need to check that x and y are not siblings

          // we are at an even index
          // the sibling of a node at an even index is at the next index
          // since we found the first value before the current node, this sibling cannot hold the value we found previously
          // x and y are cousins

          // we are at an odd index
          // the sibling of a node at an odd index is at the previous index
          // since we found the first value before the current node, this sibling might hold the value we found previously

          // we are at an odd index, but the node does not have a sibling
          // x and y are cousins

          // we are at an odd index, the node has a sibling, but the sibling holds a value not equal to the value we found previously
          // x and y are cousins

          // we are at an odd index, the node has a sibling, and holds the value we found previously
          // x and y are siblings

          return (
            i % 2 === 0 || depth[i - 1] === null || depth[i - 1].val !== found
          );
      } else {
        // check x
        if (node.val === x) {
          found = x;
          missing = y;
          // check y
        } else if (node.val === y) {
          found = y;
          missing = x;
          // we didn't find x or y, so we might need to go to the next depth
        } else nextDepth.push(node.left, node.right);
      }
    }
    // if we found one value, but not the other, x and y are not on the same depth
    // x and y are not cousins
    if (found !== null) return false;
    // we did not find either value
    // proceed to the next depth
    depth = nextDepth;
    nextDepth = [];
  }
};
