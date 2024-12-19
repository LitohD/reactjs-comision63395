import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import {getProducts} from "../../data/data.js"
import { use } from "react";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    useEffect(() => {

        getProducts()
            .then( ( data ) =>{
                const productFind =data.find( (dataProduct) => dataProduct.id === "prd8")
                setProduct(productFind)
            })
    }, [])
    return (
        <ItemDetail product={product}/>
    )
}

export default ItemDetailContainer
