import { useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import ItemDetail from '../components/ItemDetail/ItemDetail';

//ESTA ES LA PROMISE QUE SIMULA LLAMADA AL SERVIDOR
const getProducts = () => {
  return new Promise((resolve, reject) => {
  const phones = [
      { id: 1, name: 'iphone', price: 'usd 1000', img:'../images/iphone.jpg', max: 25},
      { id: 2, name: 'samsung', price: 'usd 800', img:'../images/samsung.jpg', max: 16}
  ]
  setTimeout(() => resolve(phones), 2000)
})}

//AQUI EMPIEZA EL COMPONENTE
const Product = () => {
  const { name } = useParams()
  const [product, setProduct] = useState(undefined)
  const [inputType, setInputType] = useState('input')

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
      <div>
          <div>

            <h4>Como quiere ingresar la cantidad?</h4>
            <button onClick={() => setInputType('input')}>Escribiendo</button>
            <button onClick={() => setInputType('button')}>Aprentando Botones</button>
          </div>
          <ItemDetail item={product} inputType={inputType}/>
      </div>
      
  )
}
  
export default Product;