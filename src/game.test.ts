import { LifeGame } from "./LifeGame";


;
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