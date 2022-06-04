/**
 * @param {number[][]} rectangle
 */
const SubrectangleQueries = function (rectangle) {
  // store a reference to the data
  this.rectangle = rectangle;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function (
  row1,
  col1,
  row2,
  col2,
  newValue
) {
  // iterate through every row
  for (let i = row1; i <= row2; i++) {
    // iterate through every column
    for (let j = col1; j <= col2; j++) {
      // update the value to the new one
      this.rectangle[i][j] = newValue;
    }
  }
};

/**
 * @param {number} row
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function (row, col) {
  // why is this a medium
  return this.rectangle[row][col];
};
