import './NavBar.scss'
import CartWidget from './CartWidget'


const NavBar = () => {
    return (

        <div className="navBar">
            <h1>Bienvenidos</h1>
            <ul>
               <button>Inicio</button>
               <button>Productos</button>
               <button>Nostros</button>
               <button>Contacto</button>
                <CartWidget/>
            </ul>
        </div>
    )



}
export default NavBar