import React, {useState} from 'react'

const Contatore = () => {
    const [count, setCount] = useState(0)
    
    const multipleCount = () => {
        for ( let i=0; i<5; i++)
        {
            setCount(prevState => prevState + 1)
        }
    }
    return (
        <div>
            <h1>Valore da incrementare : {count} </h1>
            <button onClick={()=> {setCount(count + 1)}}>AUMENTA DI 1</button>
            <button onClick={multipleCount}>AUMENTA DI 5</button>
            <button onClick={()=> {setCount(count - 1)}}>DIMINUISCI DI 1</button>
        </div>
    )
}

export default Contatore
