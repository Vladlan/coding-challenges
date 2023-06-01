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

const DIRECTIONS = ["R", "U", "D", "L"];

findNextPosition = (arr, bCoords, box) => {
  for (const h of DIRECTIONS) {
    const [d, sign] = box[h](true);
    const D = d * sign;
    const newCoords = [];
    debugger;
    for (const bCoord of bCoords) {
      const [bx, by] = bCoord;
      if (["R", "L"].includes(h)) {
        const nexBx = arr[by]?.[bx + D];
        if (nexBx && ["1", "X", "B"].includes(nexBx)) {
          newCoords.push([bx + D, by]);
          if (d > 1) newCoords.unshift([bx + sign, by]);
        }
      }
      if (newCoords.length === d) return [newCoords, h];
      if (["U", "D"].includes(h)) {
        const nexBy = arr[by + D]?.[bx];
        if (nexBy && ["1", "X", "B"].includes(nexBy)) {
          newCoords.push([bx, by + D]);
          if (d > 1) newCoords.unshift([bx, by + sign]);
        }
      }
      if (newCoords.length === d) return [newCoords, h];
    }
  }
};

function bloxSolver(arr) {}

module.exports = { bloxSolver, Box2d, getStartPosition, findNextPosition };
