type LastPlayer = "X" | "O" | null;

interface TicTacToeInterface {
    last_player: LastPlayer
}

export class TicTacToe implements TicTacToeInterface {

    last_player : LastPlayer = null

    play(player : LastPlayer, pos_x: number, pos_y: number) {

        if(!this.last_player && player === "O") {
            return false;
        }

        if(this.last_player === player) {
            return false;
        }

        this.last_player = player;
        return true;
    }
}
