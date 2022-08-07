import products from '../../utils/products.mock';
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom"
import "./ItemListContainer.scss"

function ItemListContainer({ seccion }) {

    const { category } = useParams()
    console.log(category);




    const [listProducts, setListProduct] = useState([])

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)

    })
    useEffect(() => {
        getProducts
            .then((res) => {
                setListProduct(res);

            })
    }, [])



    return (
    <div>
         <h1>{seccion}</h1>
         <div className='ItemListContainer'> 
            <ItemList dataProducts={listProducts} />
            </div>
        </div>
    )
}

export default ItemListContainer