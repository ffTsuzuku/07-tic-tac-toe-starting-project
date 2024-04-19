import Player from './components/Player'

function App() {
    return (
        <>
            <a href='#main-content'>Skip To Main</a>
            <main id='main-content'>
                <div id='game-container'>
                    <ol id='players'>
                        <Player
                            default_name={'Player 1'}
                            symbol={'X'}
                        />
                        <Player
                            default_name={'Player 2'}
                            symbol={'O'}
                        />
                    </ol>
                    GAME BOARD
                </div>
            </main>
        </>
    )
}

export default App
