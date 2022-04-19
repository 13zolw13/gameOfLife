describe('lifeGame', () => {
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

});
export class LifeGame {
  gameArray: any[][];

  constructor(private a: number, b: number) {
    this.gameArray = new Array(a).fill(null).map(() => new Array(b).fill(null));
  }


  setCell(x: number, y: number, status: boolean) {
    this.gameArray[x][y] = status;
  }

}
