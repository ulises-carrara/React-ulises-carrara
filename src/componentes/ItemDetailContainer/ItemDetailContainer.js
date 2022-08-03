import ProduDetail from "../../utils/ProduDetail"
import { useEffect, useState } from 'react'
import ItemDetail from "../ItemDetail/ItemDetail"
function ItemDetailContainer() {

    const [detail, setDetail] = useState([])

    const getDetail = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ProduDetail)
        }, 2000)
    })
    useEffect(() => {
        getDetail
            .then((res) => {

                setDetail(res);
                console.log(res);
            })
    }, [])


    return (
        <>
         {detail.map(product=> <ItemDetail key={product.id} data={product} />
       
         )}

        </>

    )

}

export default ItemDetailContainer