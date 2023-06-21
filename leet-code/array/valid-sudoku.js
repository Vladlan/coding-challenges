// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

function isRowsValid(board) {
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    const numsMap = {};
    for (let j = 0; j < row.length; j++) {
      const num = row[j];
      if (!Number.isNaN(Number.parseInt(num))) {
        if (numsMap[num]) {
          return false;
        } else {
          numsMap[num] = true;
        }
      }
    }
  }
  return true;
}
function isColumnsValid(board) {
  for (let i = 0; i < board.length; i++) {
    const numsMap = {};
    for (let j = 0; j < board.length; j++) {
      const num = board[j][i];
      if (!Number.isNaN(Number.parseInt(num))) {
        if (numsMap[num]) {
          return false;
        } else {
          numsMap[num] = true;
        }
      }
    }
  }
  return true;
}
function create3x3Boxes(board) {
  const boxes = [];
  for (let i = 0; i < board.length; i += 3) {
    for (let j = 0; j < board.length; j += 3) {
      const box = [];
      for (let k = j; k < j + 3; k++) {
        for (let l = i; l < i + 3; l++) {
          box.push(board[k][l]);
        }
      }
      boxes.push(box);
    }
  }
  return boxes;
}

function is3x3BoxValid(box) {
  const numsMap = {};
  for (const num of box) {
    if (!Number.isNaN(Number.parseInt(num))) {
      if (numsMap[num]) {
        return false;
      } else {
        numsMap[num] = true;
      }
    }
  }
  return true;
}

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  if (!isRowsValid(board)) return false;
  if (!isColumnsValid(board)) return false;
  const boxes3x3 = create3x3Boxes(board);
  for (const box of boxes3x3) {
    if (!is3x3BoxValid(box)) return false;
  }
  return true;
};

// const board = [
//   ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];

// const r1 = isValidSudoku(board); // true
// console.log("r1: ", r1);

const board = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
const r1 = isValidSudoku(board); // false
console.log('r1: ', r1);
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
