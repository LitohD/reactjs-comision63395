import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import { Link, Links } from "react-router-dom"
import "./itemdetail.css"


const ItemDetail = ({ product }) => {
    const [principalImage, setPrincipalImage] = useState(product.image[0])

    const images = product.image.filter((image) => image !== principalImage)
    
    const [showItemCount, setShowItemCount] = useState(true)
    
    const { addProduct}= useContext(CartContext)

    const addProductCart = (count) => {
        const productCart = {...product, quantity: count}

        addProduct(productCart)
        setShowItemCount(false)
    }

    return(
        <div className="item-detail">
            <div className="images-detail-container">
                <div className="secondary-images">
                    {
                        images.map((image) =>(
                            <img src={image} key={image} onClick={ () => setPrincipalImage(image)}/>
                        ))
                    }
                </div>
                <div className="main-image">
                    <img src={principalImage} alt="" />
                </div>
            </div>

            <div className="text-detail-container">
                <h2 className="title-detail">{product.name}</h2>
                <p className="text-detail">Stock disponible: {product.stock}</p>
                <p className="text-detail">Descripción: {product.description}</p>
                <p className="text-detail">Precio: ${product.price}</p>
                {
                    showItemCount === true ? (
                        <ItemCount stock={product.stock} addProductCart={addProductCart}/>
                    ) : (
                        <Link to="/cart"> Terminar mi compra </Link>
                    )
                }
                
            </div>
        </div>
    )
}

export default ItemDetail