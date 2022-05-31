/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = (root, target) => {
    if (root === null) return false; // return false if the tree is empty
    target -= root.val; // update target based on the value of the current node
    if (root.left === null && root.right === null) return target === 0; // if we're at a leaf node, return true if the target has been reached, false if it hasn't
    return hasPathSum(root.left, target) || hasPathSum(root.right, target); // we're not at a leaf node; check the rest of the tree
}
