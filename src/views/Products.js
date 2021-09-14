import { useState, useEffect } from 'react'
import ItemList from "../components/ItemList/ItemList";

//ESTA ES LA PROMISE QUE SIMULA LLAMADA AL SERVIDOR
const getProducts = () => {
    return new Promise((resolve, reject) => {
    const phones = [
        { id: 1, name: 'iphone', price: 'usd 1000', img:'./images/iphone.jpg'},
        { id: 2, name: 'samsung', price: 'usd 800', img:'./images/samsung.jpg'}
    ]
    setTimeout(() => resolve(phones), 2000)
})}

//AQUI EMPIEZA EL COMPONENTE
const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
      const listProducts = getProducts()
      listProducts.then(result => setProducts(result))
      return (() => {
        setProducts([])
      })
    }, [])

    if(products.length === 0) {
      return <h1>Loading</h1>
    }
    
    return (
      <div style={{alignItems: 'center'}}>
        <h1>Products</h1>
        <ItemList products={products}/>
      </div>
    );
  }
  
  export default Products;