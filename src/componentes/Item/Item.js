import './Item.scss'
import ItemCounter from './ItemCounter';

function Item({data}) {
    const {img, title, price}=data
 
    return (
        <div className="card">
            <img src={img} alt="producto"/>
            <p>{title}</p>
            <span>$ {price}</span>
            <div className="contador">
                <ItemCounter/>
            </div>
            <button>Comprar</button>
        </div>

    );
}

export default Item