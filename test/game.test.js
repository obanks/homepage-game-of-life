import progressGame from "../src/game";

describe("progress game", function () {
  let grid;

  beforeEach(() => {
    grid = [
      ["D", "D", "D"],
      ["D", "D", "D"],
      ["D", "D", "D"],
    ];
  });

  const deadGrid = [
    ["D", "D", "D"],
    ["D", "D", "D"],
    ["D", "D", "D"],
  ];

  it("should return board with all dead cells when board with all dead cells is provided", () => {
    expect(progressGame(grid)).toEqual(grid);
  });
  it("should kill single middle live cell due to underpopulation", () => {
    grid[1][1] = "A";
    expect(progressGame(grid)).toEqual(deadGrid);
  });
  it("should kill two live neighbours due to underpopulation", () => {
    grid[1][1] = "A";
    grid[0][1] = "A";
    expect(progressGame(grid)).toEqual(deadGrid);
  });

  it("should keep alive cell with two live neighbours", () => {
    const inputGrid = [
      ["D", "D", "D"],
      ["A", "A", "A"],
      ["D", "D", "D"],];
    expect(progressGame(inputGrid)).toEqual([
      ["D", "D", "D"],
      ["D", "A", "D"],
      ["D", "D", "D"],
    ]);
  })
});