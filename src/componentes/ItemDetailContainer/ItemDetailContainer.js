import "./ItemListContainer.scss"
import products from "../../utils/products.mock"
import { useEffect, useState } from 'react'
import ItemDetail from "../ItemDetail/ItemDetail"
import {useParams} from "react-router-dom"


function ItemDetailContainer() {
    const [productData, setProductData]=useState({})
    const{id}=useParams()

    useEffect(()=>{
       filterById()
    },[])

const filterById=()=>{
     products.some((product)=>{
            if(product.id==id){
                setProductData(product)
            }
        })
}


    return (
        <>
 
         <ItemDetail data={productData}/>

        </>

    )

}

export default ItemDetailContainer