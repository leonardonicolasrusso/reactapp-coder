import Item from '../Item/Item.js'

const ItemList = ({ products }) => {

    return (
        <div onClick={() => console.log('click en item list')} style={{ backgroundColor: 'grey'}}>  
            {products.map(prod => {
                return <Item key={prod.id} item={prod}/>
            })}
        </div>
    )
}

export default ItemList