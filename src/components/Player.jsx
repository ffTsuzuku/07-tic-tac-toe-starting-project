import { useState } from 'react'

const Player = ({
    default_name,
    symbol,
    is_active,
    on_name_change,
}) => {
    const [isEditing, setIsEditing] = useState(false)
    const [choosen_name, set_choosen_name] = useState(default_name)
    console.log(`${choosen_name} Player Component Reset`)

    const handle_edit_click = () => {
        setIsEditing((curr_state) => !curr_state)
        on_name_change(symbol, choosen_name)
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

    const button_text = isEditing ? 'Save' : 'Edit'
    return (
        <li className={is_active ? 'active-player' : undefined}>
            <span className='player'>
                {name_jsx}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handle_edit_click}>{button_text}</button>
        </li>
    )
}

export default Player
