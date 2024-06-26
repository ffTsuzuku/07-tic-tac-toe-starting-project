import { useState } from 'react'
import GameBoard from './components/GameBoard'
import Player from './components/Player'
import { WINNING_COMBINATIONS } from './winning_combinations'
import GameOver from './components/GameOver'

const PLAYERS = {
    X: 'Player 1',
    O: 'Player 2',
}

const INITIAL_BOARD_STATE = [
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

const derive_winner = (game_board) => {
    let winner = null
    for (const combination of WINNING_COMBINATIONS) {
        const [cell_one, cell_two, cell_three] = combination
        const val_1 = game_board[cell_one.row][cell_one.column]
        const val_2 = game_board[cell_two.row][cell_two.column]
        const val_3 = game_board[cell_three.row][cell_three.column]

        if (val_1 != null && val_1 === val_2 && val_1 === val_3) {
            winner = val_1 === 'X' ? 'X' : 'O'
            break
        }
    }

    return winner
}

const derive_game_board = (game_turns) => {
    const game_board = [...INITIAL_BOARD_STATE].map((array) => [
        ...array,
    ])
    for (const turn of game_turns) {
        const {
            cell: { row, column },
            player,
        } = turn
        game_board[row][column] = player
    }
    return game_board
}

function App() {
    console.log('App Refreshed')
    const [game_turns, set_game_turns] = useState([])
    const [players, set_players] = useState(PLAYERS)

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

    const reset_game = () => set_game_turns([])

    const handle_player_name_change = (
        player_symbol,
        player_name
    ) => {
        set_players((players) => ({
            ...players,
            [player_symbol]: player_name,
        }))
    }

    const active_player = derive_active_player(game_turns)
    const game_board = derive_game_board(game_turns)
    let winner_symbol = derive_winner(game_board)
    let draw = game_turns.length === 9 && !winner_symbol

    return (
        <>
            <a href='#main-content'>Skip To Main</a>
            <main id='main-content'>
                <div id='game-container'>
                    <ol id='players'>
                        <Player
                            is_active={active_player === 'X'}
                            default_name={PLAYERS.X}
                            symbol={'X'}
                            on_name_change={handle_player_name_change}
                        />
                        <Player
                            is_active={active_player === 'O'}
                            default_name={PLAYERS.O}
                            symbol={'O'}
                            on_name_change={handle_player_name_change}
                        />
                    </ol>
                    {(winner_symbol || draw) && (
                        <GameOver
                            winner={players[winner_symbol]}
                            onReset={reset_game}
                        />
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
