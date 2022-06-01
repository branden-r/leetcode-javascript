const isSymmetric = (root) => {
  // the left and right subtree should mirror each other
  return compareSubtrees(root.left, root.right);
};

const compareSubtrees = (left, right) => {
  // null-case: if one of the subtrees are null, then they must both be null
  if (left === null || right === null) return left === right;
  // non-null case: compare the values and the subtrees
  return (
    left.val === right.val &&
    compareSubtrees(left.left, right.right) &&
    compareSubtrees(left.right, right.left)
  );
};
