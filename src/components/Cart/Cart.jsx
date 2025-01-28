import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { BsFillTrash3Fill } from "react-icons/bs"
import "./Cart.css"

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
            <h1 className="title-cart"> Productos en el carrito</h1>
                {
                    cart.map((productCart) => (
                        <div className= "item-cart" key={productCart.id}> 
                            <img className="img-item-cart" src={productCart.image} width={200} alt="" />
                            <p className="text-item-cart">{productCart.name}</p>
                            <p className="text-item-cart">Cantidad: {productCart.quantity}</p>
                            <p className="text-item-cart">Precio unitario: ${productCart.price}</p>
                            <p className="text-item-cart">Parcial: ${productCart.price * productCart.quantity}</p>
                            <button className="item-delete" onClick={ () => deleteProductById (productCart.id) }> <BsFillTrash3Fill/></button>
                        </div>
                    ))
                }
            
            <div className="info-cart">
                <p className="text-cart-info"> Precio total: ${priceTotal()}</p>
                <Link className="button-to-cart" to="/checkout"> Seguir comprando</Link>
                <button className="button-delete" onClick={deleteCart}> Vaciar carrito</button>
            </div>
        </div>
    )
}

export default Cart