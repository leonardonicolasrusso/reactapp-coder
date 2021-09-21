import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ product, productsAdded, addProdFunction }) => {

    if(!product) {
        return <h3>{`Ese producto ya no existe`}</h3>
    } 
    
    return (
        <div className="CardItem">
            <div className="ContainerItem">
                <h2 className="ItemHeader">
                    {product.name}
                </h2>
            </div>
            <img src={product.img} alt={product.name} className="ItemImg"/>
            <p className="Info">
            {`Categoria: ${product.category} `}
            </p>
            <p className="Info">
            {`Precio: ${product.price} `}
            </p>
            <p className="Info">
            {`Stock: ${product.stock} `}
            </p>
            <p>{product.description}</p>

            <ItemCount product={product} productsAdded={productsAdded} addProdFunction={addProdFunction} />
        </div>

    )
}
export default ItemDetail