// z___x
// |
// y
class Box2d {
  oz = 2;
  oy = 1;
  ox = 1;
  R(info = false) {
    if (info) {
      return [this.oz, 1];
    }
    const ox = this.ox;
    this.ox = this.oz;
    this.oz = ox;
    return [this.ox, 1];
  }
  U(info = false) {
    if (info) {
      return [this.oz, -1];
    }
    const oy = this.oy;
    this.oy = this.oz;
    this.oz = oy;
    return [this.oy, 1];
  }
  D(info = false) {
    if (info) {
      return [this.oz, 1];
    }
    const oy = this.oy;
    this.oy = this.oz;
    this.oz = oy;
    return [this.oy, 1];
  }
  L(info = false) {
    if (info) {
      return [this.oz, -1];
    }
    const ox = this.ox;
    this.ox = this.oz;
    this.oz = ox;
    return [this.ox, -1];
  }
}

getStartPosition = (arr) => {
  const bCoords = [];
  for (let y = 0; y < arr.length; y++) {
    const row = arr[y];
    for (let x = 0; x < row.length; x++) {
      const cell = row[x];
      if (cell === "B") {
        bCoords.push([x, y]);
      }
    }
  }
  return bCoords;
};

const DIRECTIONS = ["R", "D", "L", "U"];

getProperCoord = (coords, d) => {
  if (coords.length === 1) return coords[0];
  if (d === "R") return coords[0][0] > coords[1][0] ? coords[0] : coords[1];
  if (d === "L") return coords[0][0] < coords[1][0] ? coords[0] : coords[1];
  if (d === "U") return coords[0][1] < coords[1][1] ? coords[0] : coords[1];
  if (d === "D") return coords[0][1] > coords[1][1] ? coords[0] : coords[1];
};

getAnotherCoord = (bCoords, bCoord) => {
  return bCoords.find((c) => c.join() !== bCoord.join());
};

getSecondNextCoord = (box, bCoord, h, bCoords, sign) => {
    console.log('box: ', box);
  if (box.oy === 2 && ["L", "R"].includes(h)) {
    const bCoord2 = getAnotherCoord(bCoords, bCoord);
    return [bCoord2[0] + sign, bCoord2[1]];
  }
  if (box.ox === 2 && ["U", "D"].includes(h)) {
    const bCoord2 = getAnotherCoord(bCoords, bCoord);
    return [bCoord2[0], bCoord2[1] + sign];
  }
  if (box.oz === 2 && ["U", "D"].includes(h)) {
    return [bCoord[0], bCoord[1] + sign];
  }
  if (box.oz === 2 && ["L", "R"].includes(h)) {
    return [bCoord[0] + sign, bCoord[1]];
  }
};

findNextPosition = (arr, bCoords, box) => {
  for (const h of DIRECTIONS) {
    const [d, sign] = box[h](true);
    const D = d * sign;
    const newCoords = [];
    console.log("d: ", d);

    const bCoord = getProperCoord(bCoords, h);
    const [bx, by] = bCoord;
    if (["R", "L"].includes(h)) {
      const nexBx = arr[by]?.[bx + D];
      if (nexBx && ["1", "X", "B"].includes(nexBx)) {
        return [
          [
            getSecondNextCoord(box, bCoord, h, bCoords, sign),
            [bx + D, by],
          ].filter(Boolean).sort((a, b) => a[0] - b[0]),
          h,
        ];
      }
    }
    if (newCoords.length === d) return [newCoords, h];
    if (["U", "D"].includes(h)) {
      const nexBy = arr[by + D]?.[bx];
      if (nexBy && ["1", "X", "B"].includes(nexBy)) {
        return [
          [
            getSecondNextCoord(box, bCoord, h, bCoords, sign),
            [bx, by + D],
          ].filter(Boolean).sort((a, b) => a[1] - b[1]),
          h,
        ];
      }
    }
  }
};

replaceCharInString = (str, index, char) => {
  return str.substring(0, index) + char + str.substring(index + 1);
};

moveToNextPosition = (arr, box) => {
  console.log("arr1: ", arr);
  const startPos = getStartPosition(arr);
  console.log("startPos: ", startPos);
  const [newCoords, d] = findNextPosition(arr, startPos, box);
  console.log("newCoords: ", newCoords, d);
  box[d]();
  for (const [x, y] of newCoords) {
    arr[y] = replaceCharInString(arr[y], x, "B");
  }
  for (const [x, y] of startPos) {
    arr[y] = replaceCharInString(arr[y], x, "0");
  }
  console.log("arr2: ", arr);
  return arr;
};

function bloxSolver(arr) {}

module.exports = {
  bloxSolver,
  Box2d,
  getStartPosition,
  findNextPosition,
  moveToNextPosition,
};
