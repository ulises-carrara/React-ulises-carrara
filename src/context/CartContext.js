import { createContext, useState } from "react";

const CartContext = createContext()
const CartProvider =({children})=>{
    const[cartProduct, setCartProduct ]=useState([])
    const[cantidadCart, setCantidadCart]=useState(0)

    const addProductToCart =(product)=>{
        let isInCart=cartProduct.find(cartitem => cartitem.id===product.id)
        if(!isInCart){
            setCantidadCart(cantidadCart + 1)
            return setCartProduct(cartProduct=>[...cartProduct, product])
        }
    }
    const deleteProduct = (product) =>{
        console.log("se elimino", product);
        setCartProduct(cartProduct.filter((productCart)=>productCart.id !==product.id))
    }

    const deleteAll=()=>{
        setCartProduct([])
    }
    
    const data ={
        cartProduct,
        setCartProduct,
        addProductToCart,
        cantidadCart,
        setCantidadCart,
        deleteProduct,
        deleteAll
       
    }
   console.log("producto", cartProduct);
   console.log("cantidad", cantidadCart);
    return(
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
  
)

}
export default CartProvider
export {CartContext }