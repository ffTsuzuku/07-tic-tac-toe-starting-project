import { useState } from 'react'
import GameBoard from './components/GameBoard'
import Player from './components/Player'
import { WINNING_COMBINATIONS } from './winning_combinations'
import GameOver from './components/GameOver'

const initial_board_state = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

const derive_active_player = (game_turns) => {
    let player = 'X'
    if (game_turns.length && game_turns[0].player === 'X') {
        player = 'O'
    }
    return player
}

function App() {
    const [game_turns, set_game_turns] = useState([])

    const active_player = derive_active_player(game_turns)

    const game_board = initial_board_state
    for (const turn of game_turns) {
        const {
            cell: { row, column },
            player,
        } = turn
        game_board[row][column] = player
    }

    const execute_player_move = (row, column) => {
        set_game_turns((prev_turns) => {
            const player = derive_active_player(prev_turns)

            const copy = [
                { cell: { row, column }, player },
                ...prev_turns,
            ]
            return copy
        })
    }

    let game_over = false
    let winner = null
    for (const combination of WINNING_COMBINATIONS) {
        const [cell_one, cell_two, cell_three] = combination
        const val_1 = game_board[cell_one.row][cell_one.column]
        const val_2 = game_board[cell_two.row][cell_two.column]
        const val_3 = game_board[cell_three.row][cell_three.column]

        if (val_1 != null && val_1 === val_2 && val_1 === val_3) {
            game_over = true
            winner = val_1 === 'X' ? 'X' : 'O'
            break
        }
    }
    let draw = game_turns.length === 9 && !winner

    return (
        <>
            <a href='#main-content'>Skip To Main</a>
            <main id='main-content'>
                <div id='game-container'>
                    <ol id='players'>
                        <Player
                            is_active={active_player === 'X'}
                            default_name={'Player 1'}
                            symbol={'X'}
                        />
                        <Player
                            is_active={active_player === 'O'}
                            default_name={'Player 2'}
                            symbol={'O'}
                        />
                    </ol>
                    {(game_over || draw) && (
                        <GameOver winner={winner} />
                    )}
                    <GameBoard
                        on_player_move={execute_player_move}
                        board={game_board}
                    />
                </div>
            </main>
        </>
    )
}

export default App
