import {TicTacToe} from "../main/tic_tac_toe";


/*
 tictactoe.play("O",1,0)
*/

describe('Tic Tac Toe Test', () => {
    it("X must be first", () => {
        let handler: TicTacToe = new TicTacToe();
        expect(handler.play("X", 1, 0)).toBe(true);
    })
    it("O cannot be first", () => {
        let handler: TicTacToe = new TicTacToe();
        expect(handler.play("O", 1, 0)).toBe(false);
    })

    it("If X plays twice the it should fail", () => {
        let handler: TicTacToe = new TicTacToe();
        expect(handler.play("X", 1, 0)).toBe(true);
        expect(handler.play("X", 2, 0)).toBe(false);
    })

    it("X first, then O", () => {
        let handler: TicTacToe = new TicTacToe();
        expect(handler.play("X", 1, 0)).toBe(true);
        expect(handler.play("O", 2, 0)).toBe(true);
    })

    it("X plays at position 1,0", () => {
        let handler: TicTacToe = new TicTacToe();
        expect(handler.play("X", 1, 0)).toBe(true);
        expect(handler.getPlayerAtPosition(1,0)).toBe("X");
    })

    it("O cannot play on a played position", () => {
        let handler: TicTacToe = new TicTacToe();
        expect(handler.play("X", 1, 0)).toBe(true);
        expect(handler.play("O", 1, 0)).toBe(false);
    })

    it("Players alternate placing X and O on the board", () => {
        let handler: TicTacToe = new TicTacToe();
        expect(handler.play("X", 1, 0)).toBe(true);
        expect(handler.getPlayerAtPosition(1,0)).toBe("X");
        expect(handler.play("O", 2, 0)).toBe(true);
        expect(handler.getPlayerAtPosition(2,0)).toBe("O");
    })


    it("3 Horizontal Xs wins the game", () => {
        let handler: TicTacToe = new TicTacToe();
        expect(handler.play("X", 0, 0)).toBe(true);
        expect(handler.getPlayerAtPosition(0,0)).toBe("X");

        expect(handler.play("O", 2, 1)).toBe(true);
        expect(handler.getPlayerAtPosition(2,1)).toBe("O");

        expect(handler.play("X", 1, 0)).toBe(true);
        expect(handler.getPlayerAtPosition(1,0)).toBe("X");

        expect(handler.play("O", 1, 1)).toBe(true);
        expect(handler.getPlayerAtPosition(1,1)).toBe("O");

        expect(handler.play("X", 2, 0)).toBe("X has won");

    })
    it("3 Vertical Xs wins the game", () => {
        let handler: TicTacToe = new TicTacToe();
        expect(handler.play("X", 0, 0)).toBe(true);
        expect(handler.getPlayerAtPosition(0,0)).toBe("X");

        expect(handler.play("O", 2, 1)).toBe(true);
        expect(handler.getPlayerAtPosition(2,1)).toBe("O");

        expect(handler.play("X", 0, 1)).toBe(true);
        expect(handler.getPlayerAtPosition(0,1)).toBe("X");

        expect(handler.play("O", 1, 1)).toBe(true);
        expect(handler.getPlayerAtPosition(1,1)).toBe("O");

        expect(handler.play("X", 0, 2)).toBe("X has won");

    })

    it("3 Diagonal Os wins the game", () => {
        let handler: TicTacToe = new TicTacToe();
        expect(handler.play("X", 0, 0)).toBe(true);

        expect(handler.play("O", 2, 0)).toBe(true);

        expect(handler.play("X", 0, 1)).toBe(true);

        expect(handler.play("O", 1, 1)).toBe(true);

        expect(handler.play("X", 1, 2)).toBe(true);

        expect(handler.play("O", 0, 2)).toBe("O has won");
    })

    it("9 positions filled and no 3 in a row results in a draw", () => {
        let handler: TicTacToe = new TicTacToe();
        expect(handler.play("X", 1, 0)).toBe(true);
        expect(handler.play("O", 0, 0)).toBe(true);
        expect(handler.play("X", 1, 1)).toBe(true);
        expect(handler.play("O", 2, 0)).toBe(true);
        expect(handler.play("X", 2, 1)).toBe(true);
        expect(handler.play("O", 0, 1)).toBe(true);
        expect(handler.play("X", 0, 2)).toBe(true);
        expect(handler.play("O", 1, 2)).toBe(true);
        expect(handler.play("X", 2, 2)).toBe("It's a draw");
    })
})
