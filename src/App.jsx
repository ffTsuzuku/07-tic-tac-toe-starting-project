import { useState } from 'react'
import GameBoard from './components/GameBoard'
import Player from './components/Player'

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
                    <GameBoard
                        on_player_move={execute_player_move}
                        turns={game_turns}
                    />
                </div>
            </main>
        </>
    )
}

export default App
