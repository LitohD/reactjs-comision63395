import { Link } from "react-router-dom"
import "./itemlistcontainer.css"

const Item = ({product}) => {
    return (
    <div className="cards-container">
        <Link to={"/detail/"+product.id} className="item">
            <img src={product.image} className="img-item" alt="" width={100}/>
            <p className="text-item">{product.name}</p>
            <p className="text-item">Precio: $ {product.price}</p>
        </Link>
    </div>
    )
}

export default Item