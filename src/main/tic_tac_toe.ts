type LastPlayer = "X" | "O" | null;

interface PlayedPosition {
    x: number
    y: number
}

interface TicTacToeInterface {
    last_player: LastPlayer
    played_positions: PlayedPosition[]
}

export class TicTacToe implements TicTacToeInterface {

    last_player : LastPlayer = null
    played_positions: PlayedPosition[] = []

    play(player : LastPlayer, pos_x: number, pos_y: number) {

        if(!this.last_player && player === "O") {
            return false;
        }

        if(this.last_player === player) {
            return false;
        }

        const already_exists = this.played_positions.find((position) => position.x == pos_x && position.y == pos_y);

        if(already_exists) {
            return false;
        }

        this.played_positions.push({
            x: pos_x,
            y: pos_y
        });

        this.last_player = player;


        return true;
    }

    getPlayerAtPosition(pos_x: number, pos_y: number) {
        return "X";
    }
}


