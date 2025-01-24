import { useState } from "react"

const ItemCount = ({stock, addProductCart}) => {
    const [count, setCount] = useState(1)

        const handleClickRemove = () =>{
            if( count > 1 ){
                setCount(count - 1)
            }
        }

        const handleClickAdd = () => {
            if( count < stock ){
                setCount(count + 1)
            }
            
        }
    return (
        <div>
            <button onClick={handleClickRemove}>-</button>
            <p>{count}</p>
            <button onClick={handleClickAdd}>+</button>
            <button onClick={() => addProductCart(count)}>Agregar pari, ya tu sabe!</button>
        </div>
    )
}

export default ItemCount