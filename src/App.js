import './App.css';
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Product from './views/Product'
import Products from './views/Products';


const App = () => {
  const products = [
    { id: 1, name: 'iphone'},
    { id: 2, name: 'samsung'}
  ]

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar products={products}/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/product/:name">
            <Product />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App