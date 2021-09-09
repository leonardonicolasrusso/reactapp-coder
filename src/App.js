import { useState, 
  // useEffect 
} from 'react'
import './App.css';



const App = () => {
  const [productos, setProductos] = useState([])
  const [input, setInput] = useState('')

  // useEffect(() => {
  //   fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone')
  //   .then( res => { return res.json()}).then( function (respuesta) {
  //     setProductos(respuesta.results.slice(0, 10))
  //   })
  // }, [])


  const handleClick = () => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
    .then( res => { return res.json()}).then( function (respuesta) {
      setProductos(respuesta.results.slice(0, 10))
    })
  }

  return (
    <div className="App">
      <div>
        <input type="text" onChange={(event) => setInput(event.target.value)}/>
        <button onClick={handleClick}>Buscar</button>
      </div>
      <ul>
        { productos.map(prod => {
          return <li style={{ color: 'white' }} key={prod.id}>{prod.title}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
