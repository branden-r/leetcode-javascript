const isCousins = (root, x, y) => {
  [xDepth, xParent, yDepth, yParent] = findXY(root, x, y, 0);
  return xDepth === yDepth && xParent !== yParent;
};

const findXY = (
  root,
  x,
  y,
  rootDepth,
  rootParent,
  xDepth,
  xParent,
  yDepth,
  yParent
) => {
  if (root === null || (xDepth !== undefined && yDepth !== undefined))
    return [xDepth, xParent, yDepth, yParent];

  if (root.val === x) {
    xDepth = rootDepth;
    xParent = rootParent;
  }
  else if (root.val === y) {
    yDepth = rootDepth;
    yParent = rootParent;
  }

  const [leftXDepth, leftXParent, leftYDepth, leftYParent] = findXY(
    root.left,
    x,
    y,
    rootDepth + 1,
    root,
    xDepth,
    xParent,
    yDepth,
    yParent
  );

  const [rightXDepth, rightXParent, rightYDepth, rightYParent] = findXY(
    root.right,
    x,
    y,
    rootDepth + 1,
    root,
    xDepth,
    xParent,
    yDepth,
    yParent
  );

  if (leftXDepth === undefined) {
    xDepth = rightXDepth;
    xParent = rightXParent;
  } else {
    xDepth = leftXDepth;
    xParent = leftXParent;
  }

  if (leftYDepth === undefined) {
    yDepth = rightYDepth;
    yParent = rightYParent;
  } else {
    yDepth = leftYDepth;
    yParent = leftYParent;
  }

  return [xDepth, xParent, yDepth, yParent];
};
