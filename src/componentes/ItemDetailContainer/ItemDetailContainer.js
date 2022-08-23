import "./ItemListContainer.scss"
import { useEffect, useState } from 'react'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import db from "../../FirebaseConfig"
import { doc, getDoc } from "firebase/firestore"

function ItemDetailContainer() {
    const [productData, setProductData] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getProduct()
        .then((res)=>{
            setProductData(res)
        })
    }, [id])



    const getProduct = async ()=>{
        const docRef = doc(db, "1", id)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()
        product.id = docSnapshot.id
        console.log("detail", product);
        return product
    }


    return (
        <>

            <ItemDetail data={productData} />

        </>

    )

}

export default ItemDetailContainer