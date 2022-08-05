import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom'
function BasicExample() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Categorias
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item  ><Link to="/productos/:category"><button>Remeras</button></Link></Dropdown.Item>
                <Dropdown.Item  ><Link to="/productos/:category"><button>Pantalones</button></Link></Dropdown.Item>
                <Dropdown.Item  ><Link to="/productos/:category"><button>Abrigo</button></Link></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default BasicExample;