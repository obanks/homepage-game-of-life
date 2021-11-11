const progressGame = (grid) => {
  // ["D", "D", "D"],
  // ["D", "D", "D"],
  // ["D", "D", "D"],

  const newGrid = [[], [], []];

  grid.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      if (cell === "A") {
        let aliveCellCount = 0;
        if (row[cellIndex - 1] == "A") {
          aliveCellCount++;
        }
        if (row[cellIndex + 1] == "A") {
          aliveCellCount++;
        }

        if (aliveCellCount < 2) {
          newGrid[rowIndex][cellIndex] = "D";
        } else {
          newGrid[rowIndex][cellIndex] = grid[rowIndex][cellIndex];
        }
      } else {
        newGrid[rowIndex][cellIndex] = grid[rowIndex][cellIndex];
      }
    });
  });
  return newGrid;
};

export default progressGame;
