import products from '../../utils/products.mock';
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList';

function ItemListContainer({ seccion }) {

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
            <div>
                <h1>{seccion}</h1>
            </div>
             <ItemList dataProducts={listProducts} />

        </div>
    )
}

export default ItemListContainer