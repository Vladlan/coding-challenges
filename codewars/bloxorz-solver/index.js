const keypress = async () => {
  process.stdin.setRawMode(true);
  return new Promise((resolve) =>
    process.stdin.once("data", (data) => {
      const byteArray = [...data];
      if (byteArray.length > 0 && byteArray[0] === 3) {
        process.exit(1);
      }
      process.stdin.setRawMode(false);
      resolve();
    })
  );
};

// z___x
// |
// y
class Box2d {
  constructor() {
    this.ox = 1;
    this.oy = 1;
    this.oz = 2;
  }
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

const getPositionOf = (arr, subj) => {
  const bCoords = [];
  for (let y = 0; y < arr.length; y++) {
    const row = arr[y];
    for (let x = 0; x < row.length; x++) {
      const cell = row[x];
      if (cell === subj) {
        bCoords.push([x, y]);
      }
    }
  }
  return bCoords;
};

const DIRECTIONS = ["R", "D", "L", "U"];

const getProperCoord = (coords, d) => {
  if (coords.length === 1) return coords[0];
  if (d === "R") return coords[0][0] > coords[1][0] ? coords[0] : coords[1];
  if (d === "L") return coords[0][0] < coords[1][0] ? coords[0] : coords[1];
  if (d === "U") return coords[0][1] < coords[1][1] ? coords[0] : coords[1];
  if (d === "D") return coords[0][1] > coords[1][1] ? coords[0] : coords[1];
};

const getAnotherCoord = (bCoords, bCoord) => {
  return bCoords.find((c) => c.join() !== bCoord.join());
};

const getSecondNextCoord = (box, bCoord, h, bCoords, sign) => {
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

function getFreeYLength(arr, d = "D", bCoord) {
  for (const [x, y] of bCoords) {
    if (x < xCoords[0]) allowedCoords["R"] = true;
    if (x > xCoords[0]) allowedCoords["L"] = true;
    const nexByD = arr[y + 2] ? arr[y + 2][x] : null;
    if (nexByD && ["1", "X", "B"].includes(nexByD)) {
      allowedCoords["D"] = true;
    }
    const nexByU = arr[y - 2] ? arr[y - 2][x] : null;
    if (nexByU && ["1", "X", "B"].includes(nexByU)) {
      allowedCoords["U"] = true;
    }
  }
}

let xCoords = null;
function getALlowedDirections(arr, bCoords) {
  if (!xCoords) {
    xCoords = getPositionOf(arr, "X")[0];
  }
  const allowedCoords = {};
  for (const coors of bCoords) {
    const [x, y] = coors;
    if (x < xCoords[0]) allowedCoords["R"] = true;
    if (x > xCoords[0]) allowedCoords["L"] = true;
    const nexByD = arr[y + 2] ? arr[y + 2][x] : null;
    if (nexByD && ["1", "X", "B"].includes(nexByD)) {
      allowedCoords["D"] = true;
    }
    const nexByU = arr[y - 2] ? arr[y - 2][x] : null;
    if (nexByU && ["1", "X", "B"].includes(nexByU)) {
      allowedCoords["U"] = true;
    }
  }
  const allowedCoorsArr = Object.keys(allowedCoords);
  for (const h of DIRECTIONS) {
    if (!allowedCoorsArr.includes(h)) {
      allowedCoorsArr.push(h);
    }
  }
  return allowedCoorsArr;
}

function findNextPosition(arr, bCoords, box) {
  const allowedDirections = getALlowedDirections(arr, bCoords);
  for (const h of allowedDirections) {
    const [d, sign] = box[h](true);
    const D = d * sign;
    const newCoords = [];

    const bCoord = getProperCoord(bCoords, h);
    const [bx, by] = bCoord;
    if (["R", "L"].includes(h)) {
      const nexBx = arr[by] ? arr[by][bx + D] : null;
      if (nexBx && ["1", "X", "B"].includes(nexBx)) {
        if (nexBx === "X") X = "X";
        return [
          [getSecondNextCoord(box, bCoord, h, bCoords, sign), [bx + D, by]]
            .filter(Boolean)
            .sort((a, b) => a[0] - b[0]),
          h,
        ];
      }
    }
    if (newCoords.length === d) return [newCoords, h];
    if (["U", "D"].includes(h)) {
      const nexBy = arr[by + D] ? arr[by + D][bx] : null;
      if (nexBy && ["1", "X", "B"].includes(nexBy)) {
        if (nexBy === "X") X = "X";
        return [
          [getSecondNextCoord(box, bCoord, h, bCoords, sign), [bx, by + D]]
            .filter(Boolean)
            .sort((a, b) => a[1] - b[1]),
          h,
        ];
      }
    }
  }
}

const replaceCharInString = (str, index, char) => {
  return str.substring(0, index) + char + str.substring(index + 1);
};

let X = null;
const ANSWER = [];
const moveToNextPosition = (arr, box) => {
  const startPos = getPositionOf(arr, "B");
  const [newCoords, d] = findNextPosition(arr, startPos, box);
  ANSWER.push(d);
  box[d]();
  for (const [x, y] of newCoords) {
    arr[y] = replaceCharInString(arr[y], x, "B");
  }
  for (const [x, y] of startPos) {
    arr[y] = replaceCharInString(arr[y], x, "1");
  }
  return arr;
};

async function bloxSolver(arr) {
  const box = new Box2d();
  let i = 0;
  while (i < 1000) {
    arr = moveToNextPosition(arr, box);
    console.log("arr: ", arr);
    console.log("ANSWER: ", ANSWER.join(""));
    await keypress();
    if (X) return ANSWER.join("");
    i++;
  }
  console.log("FAILED!!! ");
  return arr;
}

const i1 = [
  "1110000000",
  "1B11110000",
  "1111111110",
  "0111111111",
  "0000011X11",
  "0000001110",
];
const i2 = [
  "000000111111100",
  "111100111001100",
  "111111111001111",
  "1B11000000011X1",
  "111100000001111",
  "000000000000111",
];
const i3 = [
  "00011111110000",
  "00011111110000",
  "11110000011100",
  "11100000001100",
  "11100000001100",
  "1B100111111111",
  "11100111111111",
  "000001X1001111",
  "00000111001111",
];
const i4 = [
  "11111100000",
  "1B111100000",
  "11110111100",
  "11100111110",
  "10000001111",
  "11110000111",
  "11110000111",
  "00110111111",
  "01111111111",
  "0110011X100",
  "01100011100",
];
const i5 = [
  "000001111110000",
  "000001001110000",
  "000001001111100",
  "B11111000001111",
  "0000111000011X1",
  "000011100000111",
  "000000100110000",
  "000000111110000",
  "000000111110000",
  "000000011100000",
];
const res = bloxSolver(i3);
console.log("res: ", res);

module.exports = {
  bloxSolver,
  Box2d,
  getStartPosition: getPositionOf,
  findNextPosition,
  moveToNextPosition,
};
