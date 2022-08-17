import './Cart.scss'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';

function Cart() {
    const { cartProduct, deleteProduct, deleteAll, precioTotal } = useContext(CartContext)
    console.log("productos desde cart", cartProduct);
    return (
        <div className='cart-container'>
            {cartProduct.map((product) => {
                return (
                    <div className='item-cart-product' key={product.id}>
                        <img src={product.img} alt="" />
                        <div className='cart-product__details'>
                            <p>{product.title}</p>
                            <p>Tamaño : XS</p>

                        </div>
                        <div className='cart-product__details'>
                            <p>$ {product.price}</p>
                        </div>
                        <div className='cart-product__action' >
                            <DeleteIcon onClick={() => deleteProduct(product)} />
                        </div>
                    </div>
                )
            })}
            <div className='btn_delete-all'>
                <button onClick={() => deleteAll()} className={"btn_delete_all"}>Eliminar todo</button>
            </div>
            <p>Total a pagar $ {precioTotal}</p>
        </div>

    )

}
export default Cart