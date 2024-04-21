const GameOver = ({ winner, onReset }) => {
    console.log('GameOver Refreshed')
    const winner_text = winner ? `${winner} won!` : 'Tie'
    return (
        <div id='game-over'>
            <h2>Game Over!</h2>
            <p>{winner_text}</p>
            <p>
                <button onClick={onReset}>Rematch!</button>
            </p>
        </div>
    )
}

export default GameOver
