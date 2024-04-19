const initial_board_state = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

const GameBoard = () => {
    return (
        <ol id={'game-board'}>
            {initial_board_state.map((row, index) => {
                return (
                    <li key={index}>
                        <ol>
                            {row.map((symbol, index) => {
                                return (
                                    <li key={index}>
                                        <button>{symbol}</button>
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
