import { useState } from 'react'

function ItemCounter(){

    const [contador, setcontador]=useState(1)
    const suma = () =>{
        setcontador(contador+1)
    }
    const resta = () =>{
        setcontador(contador-1)
    }

    return(
        <>
        <button onClick={suma}>+</button>
        <p>{contador}</p>
        <button onClick={resta}>-</button>
        </>
    )
}
export default ItemCounter