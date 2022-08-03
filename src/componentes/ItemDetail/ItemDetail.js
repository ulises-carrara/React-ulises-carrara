import './ItemDetail.scss'


function ItemDetail({ data }) {
    const { img, title, price } = data
    return (
        <div className="detailContainer">

            <div className="detailimg">
                <img src={img} alt="producto" />
            </div>
            <div className="detailbody">
            <fieldset>
                <h2>{title}</h2>
                <span>$ {price}</span>
                <div className="detailtalla">
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                    <button>XL</button>
                </div>

                <button>Añadir al carrito</button>
                </fieldset>
            </div>
        </div>
    )
}
export default ItemDetail