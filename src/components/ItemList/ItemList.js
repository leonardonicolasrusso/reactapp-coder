import Item from '../Item/Item.js'

const ItemList = ({ products }) => {

    return (
        <div>  
            {products.map(prod => {
                return <Item key={prod.id} item={prod}/>
            })}
        </div>
    )
}

export default ItemList