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
})
