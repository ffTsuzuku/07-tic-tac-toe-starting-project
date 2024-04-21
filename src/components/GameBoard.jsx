import { useState } from 'react'

const GameBoard = ({ board, on_player_move }) => {
    console.log('GameBoard Refreshed')
    return (
        <ol id={'game-board'}>
            {board.map((row, row_index) => {
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
                                            disabled={symbol !== null}
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
