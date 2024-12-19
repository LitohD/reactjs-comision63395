import { useState, useEffect } from "react"
import { getProducts } from "../../data/data.js"
import ItemList from "./ItemList.jsx"
import "./itemlistcontainer.css"
import {  } from "react-icons/pi"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts()
        .then((data) => {
            setProducts(data)
        })
        .catch((error) =>{
            console.error(error)
        })
        .finally(() => {
            console.log("promesa terminada")
        })
    }, [])

    return(
        <div className="itemlistcontainer">
            <h1>{greeting}</h1>
            <ItemList product={products}/>
        </div>
    )
}

export default ItemListContainer