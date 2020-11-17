import React, {useState} from 'react'


const BasiUseState = () => {
    const [title, setTitle] = useState ('React Hook')

    const handleTitle = () => {
        if (title == 'React Hook')
        {
            setTitle('Capitan Hook')
        }
        else
        {
            setTitle('React Hook')
        }
    }

    return (
        <div>
            <h1>{title}</h1>
            <button onClick ={handleTitle}>Cambio titolo!</button>
        </div>
    )
}

export default BasiUseState
