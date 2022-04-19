
export class LifeGame {


  gameArray: any[][];

  constructor(private a: number, b: number) {
    this.gameArray = new Array(a).fill(null).map(() => new Array(b).fill(null));
  }

  private minAliveNeighbors = 3;

  setCell(x: number, y: number, status: boolean) {
    this.gameArray[x][y] = status;
  }
  aliveNeighbors(arg0: number, arg1: number): any {
    let count = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (i === 0 && j === 0) {
          continue;
        }
        if (this.gameArray[arg0 + i] && this.gameArray[arg0 + i][arg1 + j]) {
          count++;
        }
      }
    }
    return count;
  }

  updateStatus() {
    this.gameArray.forEach((row, i) => {
      row.forEach((cell, j) => {
        const aliveNeighbors = this.aliveNeighbors(i, j);
        if (cell) {
          if (aliveNeighbors < 2) {
            this.gameArray[i][j] = false;
          }
        } else {
          if (aliveNeighbors === this.minAliveNeighbors) {
            this.gameArray[i][j] = true;
          }
        }
      });
    });

  }

}
