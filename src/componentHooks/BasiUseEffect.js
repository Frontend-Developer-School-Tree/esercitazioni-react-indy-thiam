import React, {useState, useEffect} from 'react'

const BasiUseEffect = () => {
    const [size, setSize] = useState(window.innerWidth)

    const updateWindowSize = () => { //arrw func che aggiorna i pixel in diretta
        setSize(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize',updateWindowSize)
        return () => {
            window.removeEventListener('resize',updateWindowSize)
        }
    })

    return (
        <div style={{textAlign: 'center', margin:'auto', paddingTop: 100, border:100}}>
            <span style={{colore:'#fff'}}> window width: <h1>{size}</h1> </span>
        </div>
    )
}

export default BasiUseEffect
