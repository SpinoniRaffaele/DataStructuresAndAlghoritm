import { Queue } from '../Queue/Queue';

export class RobotInAGrid {
  public robotInAGrid(grid: boolean[][], rows: number, columns: number) {
    const queue = new Queue<Cell>();
    const queued = [new Cell(0, 0)];
    queue.enqueue(new Cell(0, 0));
    let targetFound = false;

    while (!queue.isEmpty() && !targetFound) {
      const cell = queue.dequeue();
      this.findNeighbours(cell, grid, rows, columns)
          .filter(elem => this.doesntContainCellWithCoordinates(queued, elem.row, elem.column))
          .forEach(elem => {
            queue.enqueue(elem);
            elem.prev = cell;
            queued.push(elem);
            if (elem.row === rows - 1 && elem.column === columns - 1) targetFound = true;
          });
    }
    return this.buildPathBackward(queued);
  }

  private findNeighbours(cell: Cell, grid: boolean[][], rows: number, columns: number): Cell[] {
    const neighbours = [];
    if (cell.row + 1 < rows && grid[cell.row + 1][cell.column]) {
      neighbours.push(new Cell(cell.row + 1, cell.column));
    }
    if (cell.column + 1 < columns && grid[cell.row][cell.column + 1]) {
      neighbours.push(new Cell(cell.row, cell.column + 1));
    }
    return neighbours;
  }

  private doesntContainCellWithCoordinates(array: Cell[], row: number, column: number) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i].row === row && array[i].column === column) {
        return false;
      }
    }
    return true;
  }

  private buildPathBackward(queued: Cell[]): Cell[] {
    let index = queued.length - 1;
    const path = [queued[index]];
    while(path[0].prev) {
      path.splice(0, 0, path[0].prev);
    }
    return path;
  }
}

class Cell {
  row: number;
  column: number;
  prev: Cell;

  constructor(row: number, column: number, prev: Cell = undefined) {
    this.row = row;
    this.column = column;
    this.prev = prev;
  }
}

const test = () => {
  const robotInAGrid = new RobotInAGrid();
  const grid = [
      [true, true, true],
      [true, false, false],
      [true, true, true]
  ];
  const result = robotInAGrid.robotInAGrid(grid, 3, 3);
  console.log(result);
};

test();