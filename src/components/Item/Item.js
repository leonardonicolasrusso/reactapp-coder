import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ product }) => {
  return (
    <div className="CardItem">
      <div className="ContainerItem">
        <h2 className="ItemHeader">
            {product.name}
        </h2>
      </div>
      <img src={product.img} alt={product.name} className="ItemImg"/>
      <h6 className="Info">
        {`Categoria: ${product.category} `}
      </h6>
      <h6 className="Info">
        {`Precio: ${product.price} `}
      </h6>
      { product.quantity &&       
        <h6 className="Info">
          {`Cantidad a comprar: ${product.quantity} `}
        </h6>
      }
      { !product.quantity && <Link to={`/item/${product.id}`} className="Button">Comprar</Link> }
    </div>
    )
}
export default Item