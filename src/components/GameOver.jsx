const GameOver = ({ winner }) => {
    const winner_text = winner ? `${winner} won!` : 'Tie'
    return (
        <div id='game-over'>
            <h2>Game Over!</h2>
            <p>{winner_text}</p>
            <p>
                <button>Rematch!</button>
            </p>
        </div>
    )
}

export default GameOver
