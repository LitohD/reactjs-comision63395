import { useState, useContext } from "react"
import FormCheckout from "./FormCheckout"
import { CartContext } from "../../context/CartContext"
import { Timestamp, collection, addDoc } from "firebase/firestore"
import db from "../../db/db.js"
import "./checkout.css"

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: "",
        address: ""
    })
    const [orderId, setOrderId] = useState(null)
    const { cart, priceTotal } = useContext(CartContext)

    const handleChangeInput = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value })
    }

    const handleSubmitForm = async (event) => {
        event.preventDefault()
        const order = {
            buyer: { ...dataForm },
            products: [...cart],
            total: priceTotal(),
            date: Timestamp.fromDate(new Date())
        }
        await uploadOrder(order)
    }

    const uploadOrder = async (newOrder) => {
        try {
            const ordersRef = collection(db, "orders")
            const response = await addDoc(ordersRef, newOrder)
            setOrderId(response.id)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            {
                orderId ? (
                    <div className="order-finish">
                        <h2>Su pedido se ha realizado coorectamente!! Guarde su numero de seguimiento </h2>
                        <h3>{orderId}</h3>
                    </div>
                            ) : (
                        <FormCheckout
                            dataForm={dataForm}
                            handleChangeInput={handleChangeInput}
                            handleSubmitForm={handleSubmitForm}
                        />
                    )
            }
        </div>

        
    )
}

export default Checkout