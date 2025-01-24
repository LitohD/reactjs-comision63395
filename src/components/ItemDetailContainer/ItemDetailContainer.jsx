import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import {getProducts} from "../../data/data.js"
import { useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

        const { idProduct } = useParams()

    useEffect(() => {
        setLoading(true)

        getProducts()
            .then( ( data ) =>{
                const productFind = data.find( (dataProduct) => dataProduct.id === idProduct )
                setProduct(productFind)
            })
            .catch((error)=> console.log(error))
            .finally(() => setLoading(false))
    }, [idProduct])
    return (
        <>
        {
            loading === true ? ( <div> <PacmanLoader color="gold"/> </div>) : <ItemDetail product={product}/>
        }
        </>
    )
}

export default ItemDetailContainer
