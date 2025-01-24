import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BiCartDownload } from "react-icons/bi";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    let quantity = totalQuantity()
    return (
        <Link to={"/Cart"} className="carrito">
            <BiCartDownload />
            <p>{ quantity !== 0 && quantity }</p>
        </Link>
    )
}

export default CartWidget