import React from 'react'
import Item from "../Item/Item"

const ItemList = ({products}) => {

  if(products.length === 0) {
    return <h3>No hay productos</h3>
  } 

  return (
    <ul className="list-group">
      {products.map(product =><Item key={product.id} product={product}/>)}
    </ul>
  )
}
export default React.memo(ItemList)