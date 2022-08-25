import './Cart.scss'
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '../Modal/Modal';
import { sassFalse } from 'sass';

function Cart() {
    const { cartProduct, deleteProduct, deleteAll, precioTotal } = useContext(CartContext)
    const [showModal, setShowModal] = useState(false)

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
                <buttom onClick={() => setShowModal(true)} className={"btn_delete_all"}>Pagar</buttom>
            </div>
            <p>Total a pagar $ {precioTotal}</p>

            {showModal &&
                <Modal title={"Datos de contacto"} >
                    
                    <h3>ey</h3>
                </Modal>
            }

        </div>

    )

}
export default Cart