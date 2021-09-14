import { useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import Item from '../components/Item/Item';

//ESTA ES LA PROMISE QUE SIMULA LLAMADA AL SERVIDOR
const getProducts = () => {
  return new Promise((resolve, reject) => {
  const phones = [
      { id: 1, name: 'iphone', price: 'usd 1000', img:'../images/iphone.jpg'},
      { id: 2, name: 'samsung', price: 'usd 800', img:'../images/samsung.jpg'}
  ]
  setTimeout(() => resolve(phones), 2000)
})}

//AQUI EMPIEZA EL COMPONENTE
const Product = () => {
  const { name } = useParams()
  const [product, setProduct] = useState(undefined)

  useEffect(() => {
    const listProducts = getProducts()
    listProducts.then(result => {
      const product = result.find(prod => prod.name === name)
      setProduct(product)
    })
    return (() => {
      setProduct(undefined)
    })
  }, [name])
    

  return (
      <Item item={product} />
  )
}
  
export default Product;