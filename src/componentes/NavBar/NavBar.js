import './NavBar.scss'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import AutoModeIcon from '@mui/icons-material/AutoMode';
import BasicExample from './DropDown';


const NavBar = () => {
    
    return (


        <div className="navBar">
            <div className='NavIcon'>
                <Link to="/"><button><AutoModeIcon /></button></Link>
            </div>
            <div>
                <ul>
                    <Link to="/"><button>Inicio</button></Link>
                    <Link to="/Productos"><button>Productos</button></Link>
                    <Link to=""><button>Nostros</button></Link>
                    <Link to="/Contacto"><button>Contacto</button></Link>
                    <BasicExample />
                    <CartWidget />
                </ul>
            </div>
        </div>
    )



}
export default NavBar