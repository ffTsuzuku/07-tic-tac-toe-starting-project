import { useState } from 'react'

const Player = ({ default_name, symbol }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [choosen_name, set_choosen_name] = useState(default_name)

    const handle_edit_click = () => {
        setIsEditing((curr_state) => !curr_state)
    }

    let name_jsx = <span className='player-name'>{choosen_name}</span>
    if (isEditing) {
        name_jsx = (
            <input
                type={'text'}
                placeholder='name'
                required
                value={choosen_name}
                onChange={(event) =>
                    set_choosen_name(event.target.value)
                }
            />
        )
    }
    return (
        <li>
            <span className='player'>
                {name_jsx}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handle_edit_click}>Edit</button>
        </li>
    )
}

export default Player
