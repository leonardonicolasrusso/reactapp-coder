import { useState } from 'react'
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import Counter from './components/Counter/Counter.js'

const App = () => {
  
const [contadores, setContadores] = useState({
  contador1: 0,
  contador2: 0,
  contador3: 0
})

const funBoton1 = () => {
  const newContador = {
    ...contadores,
    contador1: contadores.contador1 + 1,
  }
  setContadores(newContador)
}

const funBoton2 = () => {
  const newContador = {
    ...contadores,
    contador2: contadores.contador2 + 1,
  }
  setContadores(newContador)
}
const funBoton3 = () => {
  const newContador = {
    ...contadores,
    contador3: contadores.contador3 + 1,
  }
  setContadores(newContador)
}

//  const miFuncionRestar = () => {
//      if(count > 0) {
//        setCount(count - 1)
//      }


  return (
    <div className="App">
      <header>
        <NavBar /> 
      </header>
      <Counter inicial="" max="25"/>
      <h1>{contadores.contador1}</h1>
      <h1>{contadores.contador2}</h1>
      <h1>{contadores.contador3}</h1>
      <button onClick={funBoton1}>boton1</button>
      <button onClick={funBoton2}>boton2</button>
      <button onClick={funBoton3}>boton2</button>
      {/* <h1 style={ {color: 'white'}}>{count}</h1>
      <button onClick={() => setView(!view)}>Mostrar Navbar o no</button>
      <button onClick={() => setCount(count + 1)}>Sumar al contador</button>
      <button onClick={miFuncionRestar}>Restar al contador</button>
      <img src={logo} className="App-logo" alt="logo" />
      { count <= 0 ? <h1 style={{ color: 'white'}}>EL CONTADOR YA ES CERO</h1> : <h1 style={{ color: 'white'}}>EL CONTADOR NO ES CERO</h1>} */}
    </div>
  );
}

export default App;
