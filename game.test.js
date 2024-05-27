const {Game} = require("./game");

describe("test game", () => {
    it("init test", () => {
        const game = new Game();
        game.settings = {
            gridSize: {
                width: 4,
                height: 5
            }
        }
        const setting =  game.settings;
        expect(setting.gridSize.width).toBe(4)
        expect(setting.gridSize.height).toBe(5)
    })
})