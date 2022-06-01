const hasPathSum = (root, target) => {
  // return false if the tree is empty
  if (root === null) return false;
  // update target based on the value of the current node
  target -= root.val;
  // if we're at a leaf node, return true if the target has been reached, false if it hasn't
  if (root.left === null && root.right === null) return target === 0;
  // we're not at a leaf node; check the rest of the tree
  return hasPathSum(root.left, target) || hasPathSum(root.right, target);
};
