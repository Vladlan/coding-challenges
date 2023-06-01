const { before } = require("node:test");
const { Box2d } = require("./index");

const level1 = () => [
  "1110000000",
  "1B11110000",
  "1111111110",
  "0111111111",
  "0000011X11",
  "0000001110",
];
const level2 = () => [
  "1110000000",
  "11BB110000",
  "1111111110",
  "0111111111",
  "0000011X11",
  "0000001110",
];

describe("Box2d", () => {
  let box2d = null;
  beforeEach(() => {
    box2d = new Box2d();
  });
  it("should be defined", () => {
    expect(box2d).toBeDefined();
  });
  it("should move as expected 1", () => {
    box2d.R();
    expect([box2d.ox, box2d.oy, box2d.oz]).toEqual([2, 1, 1]);
    box2d.D();
    expect([box2d.ox, box2d.oy, box2d.oz]).toEqual([2, 1, 1]);
    box2d.U();
    expect([box2d.ox, box2d.oy, box2d.oz]).toEqual([2, 1, 1]);
    box2d.L();
    expect([box2d.ox, box2d.oy, box2d.oz]).toEqual([1, 1, 2]);
  });
});

describe("getStartPosition", () => {
  it("should return start position for level1", () => {
    const res = getStartPosition(level1());
    expect(res).toEqual([[1, 1]]);
  });
  it("should return start position for level2", () => {
    const res = getStartPosition(level2());
    expect(res).toEqual([
      [2, 1],
      [3, 1],
    ]);
  });
});

describe("findNextPosition", () => {
  it("should find next position for level1", () => {
    const [res, d] = findNextPosition(
      level1(),
      getStartPosition(level1()),
      new Box2d()
    );
    expect(res).toEqual([
      [2, 1],
      [3, 1],
    ]);
    expect(d).toEqual("R");
  });
  it("should find next position for level2", () => {
    const box = new Box2d();
    box.R();
    const [res, d] = findNextPosition(
      level2(),
      getStartPosition(level2()),
      box
    );
    expect(res).toEqual([[4, 1]]);
    expect(d).toEqual("R");
  });
});

describe("moveToNextPosition", () => {
  const step1 = () => [
    "1110000000",
    "10BB110000",
    "1111111110",
    "0111111111",
    "0000011X11",
    "0000001110",
  ];
  const step2 = () => [
    "1110000000",
    "1000B10000",
    "1111111110",
    "0111111111",
    "0000011X11",
    "0000001110",
  ];
  box = null;
  beforeEach(() => {
    box = new Box2d();
  });
  it("should return level with new box position step1", () => {
    const level = level1();
    expect(moveToNextPosition(level, box)).toEqual(step1());
  });
  it("should return level with new box position step2", () => {
    const level = step1();
    box.R();
    expect(moveToNextPosition(level, box)).toEqual(step2());
  });
  it("should return level with new box position after step1 & step2", () => {
    const level = level1();
    const lStep1 = moveToNextPosition(level, box);
    expect(lStep1).toEqual(step1());
    const lStep2 = moveToNextPosition(lStep1, box);
    expect(lStep2).toEqual(step2());
  });
});
