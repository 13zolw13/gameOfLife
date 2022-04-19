

export class LifeGame {


  gameArray: any[][];

  constructor(private a: number, b: number) {
    this.gameArray = new Array(a).fill(null).map(() => new Array(b).fill(null));
  }

  private minAliveNeighbors = 3

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

};
describe(`${LifeGame.name}`, () => {

  describe('Set up value', () => {


  it('should set up alive status in game ', () => {

    const lifeGame = new LifeGame(5, 5);
    lifeGame.setCell(1, 1, true);
    lifeGame.setCell(2, 2, true);
    lifeGame.setCell(3, 3, true);
    expect(lifeGame.gameArray[1][1]).toBe(true);
  });

  it('should set up dead status in game ', () => {

    const lifeGame = new LifeGame(5, 5);
    lifeGame.setCell(1, 1, false);
    lifeGame.setCell(2, 2, false);
    lifeGame.setCell(3, 3, false);
    expect(lifeGame.gameArray[1][1]).toBe(false);
  });

  it('should not change other cell values', () => {
    const lifeGame = new LifeGame(5, 5);
    lifeGame.setCell(1, 1, true);
    lifeGame.setCell(2, 2, true);
    expect(lifeGame.gameArray[1][2]).toBe(null);

  });
  })

  describe('Checking the status neighbor cells', () => {
    it('should find alive friend', () => {
      const lifeGame = new LifeGame(5, 5);
      lifeGame.setCell(1, 1, true);
      lifeGame.setCell(2, 2, true);
      lifeGame.setCell(0, 0, true);
      lifeGame.setCell(1, 0, true);
      expect(lifeGame.aliveNeighbors(1, 1)).toBe(3);

    });
  })

  describe('Checking the status neighbor cells and changing status if enough alive neighbors ', () => {
    it('should stay alive', () => {
      const lifeGame = new LifeGame(5, 5);
      lifeGame.setCell(1, 1, true);
      lifeGame.setCell(2, 2, true);
      lifeGame.setCell(0, 0, true);
      lifeGame.setCell(1, 0, true);
      lifeGame.updateStatus();
      expect(lifeGame.gameArray[1][1]).toBe(true);

    });

    it('should not stay alive', () => {
      const lifeGame = new LifeGame(5, 5);
      lifeGame.setCell(1, 1, true);
      lifeGame.setCell(2, 2, true);
      lifeGame.setCell(0, 0, true);
      lifeGame.setCell(1, 5, true);
      lifeGame.updateStatus();
      expect(lifeGame.gameArray[1][1]).toBe(false);

    });
  })
});