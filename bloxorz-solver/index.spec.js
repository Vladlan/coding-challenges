const { Box2d } = require("./index");
const level1 = ['1110000000',
              '1B11110000',
              '1111111110',
              '0111111111',
              '0000011X11',
              '0000001110'];

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
  it("should return start position", () => {
    const res = getStartPosition(level1);
    expect(res).toEqual([1, 1]);
  });
});
