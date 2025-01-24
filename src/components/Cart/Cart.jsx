import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, priceTotal, deleteProductById, deleteCart} = useContext(CartContext)

    if(cart.length === 0){
        return(
            <div>
                <h2>Tu carrito esta vacio...</h2>
                <Link to="/">Volver a la Tienda</Link>
            </div>
        )
    }

    return (
        <div>
            <ul>
                {
                    cart.map((productCart) => (
                        <li key={productCart.id}>
                            <p>{productCart.name}</p>
                            <p>Cantidad: {productCart.quantity}</p>
                            <p>Precio unitario: ${productCart.price}</p>
                            <p>Parcial: ${productCart.price * productCart.quantity}</p>
                            <button onClick={ () => deleteProductById (productCart.id) }>Eliminar</button>
                        </li>
                    ))
                }
            </ul>
            
            <h3>Total de la compra: ${priceTotal()}</h3>
            <button onClick={deleteCart}>eliminar compra</button>
        </div>
    )
}

export default Cart