import { useState } from 'react'

const initial_board_state = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

const GameBoard = ({ turns, on_player_move }) => {
    const game_board = initial_board_state

    console.log({ turns })
    for (const turn of turns) {
        const {
            cell: { row, column },
            player,
        } = turn
        game_board[row][column] = player
    }

    return (
        <ol id={'game-board'}>
            {game_board.map((row, row_index) => {
                return (
                    <li key={row_index}>
                        <ol>
                            {row.map((symbol, col_index) => {
                                return (
                                    <li key={col_index}>
                                        <button
                                            onClick={() =>
                                                on_player_move(
                                                    row_index,
                                                    col_index
                                                )
                                            }
                                        >
                                            {symbol}
                                        </button>
                                    </li>
                                )
                            })}
                        </ol>
                    </li>
                )
            })}
        </ol>
    )
}

export default GameBoard
