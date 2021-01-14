type LastPlayer = "X" | "O" | null;

interface PlayedPosition {
    player: LastPlayer
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
    turnsCount: number = 0
    play(player : LastPlayer, pos_x: number, pos_y: number) {

        if(!this.last_player && player === "O") {
            return false;
        }

        if(this.last_player === player) {
            return false;
        }

        const already_exists = this.getPlayerAtPosition(pos_x,pos_y);

        if(already_exists) {
            return false;
        }

        this.played_positions.push({
            player: player,
            x: pos_x,
            y: pos_y
        });
        this.turnsCount++;

        const winner = this.findWinner();

        if(winner) {
            return winner + " has won";
        }
        else if(this.turnsCount === 9){
            return "It's a draw";
        }

        this.last_player = player;


        return true;
    }


    findWinner() {
        const rows = this.getAllPossibleWinningCombinations();

        let winner : string | null = null;

        rows.forEach((positions) => {
            if(!winner) {
                let log : any = {"X": 0,"O": 0};
                positions.forEach((position) => {
                    const player_at_pos = this.getPlayerAtPosition(position.x, position.y);

                    if(!player_at_pos) {
                        return false;
                    }

                    log[player_at_pos]++;
                })

                if(log.X === 3) {
                    winner = "X";
                }

                if(log.O === 3) {
                    winner = "O";
                }
            }
        })

        return winner;
    }


    getAllPossibleWinningCombinations() {
        /*
            This function generates this:
            [
                [ { x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 } ],
                [ { x: 2, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 2 } ],
                [ { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 } ],
                [ { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 } ],
                [ { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 } ],
                [ { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 } ],
                [ { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 } ],
                [ { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 } ]
            ]
      */

        const possible_winning_rows = [
            [{x: 0, y: 0},{x: 1, y: 1},{x: 2, y: 2}],
            [{x: 2, y: 0},{x: 1, y: 1},{x: 0, y: 2}]
        ];

        for (let x = 0; x < 3; x++) {
            let row = [];
            let reverse_row = [];
            for (let y = 0; y < 3; y++) {
                row.push({x, y});
                reverse_row.push({x: y, y: x});
            }
            possible_winning_rows.push(row);
            possible_winning_rows.push(reverse_row);
        }

        return possible_winning_rows;
    }

    getPlayerAtPosition(pos_x: number, pos_y: number) {
        const playerAtPosition = this.played_positions.find((position) => position.x == pos_x && position.y == pos_y);
        if (playerAtPosition) {
            return playerAtPosition.player;
        }


    }
}


