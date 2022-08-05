import './Item.scss'
import ItemCounter from './ItemCounter';
import {Link} from 'react-router-dom'

function Item({ data }) {
    const { img, title, price, id } = data

    return (
        
            <div className="card">
                <Link to={`/Productos/${id}`}>
                <img src={img} alt="producto" />
                <p>{title}</p>
                <span>$ {price}</span>
                <div className="contador">
                    <ItemCounter />
                </div>
                
                </Link>
            </div>
        
    );
}

export default Item