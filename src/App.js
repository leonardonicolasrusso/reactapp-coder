import { useState, useEffect } from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/NavBar/NavBar'
import Cart from './components/Cart/Cart'
import Notification from './components/Notification/Notification'
import Login from './components/Login/Login'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'
import { getCategories } from './products'
import { NotificationContextProvider } from './context/NotificationContext'

const App = () => {
  const [cartProducts, setCartProduct] = useState([])
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    setTimeout(() => {
      setUser('sebastian')
    }, 5000)
  }, [])

  return (
    <div className="App">
      <NotificationContextProvider>      
        <BrowserRouter>
            <NavBar categories={getCategories()} cartProducts={cartProducts}/>  
          <Notification />
            <Switch>
            <Route exact path='/'>
                <ItemListContainer />
              </Route>
              <Route path='/category/:categoryid'>
                <ItemListContainer />
              </Route>
              <Route path='/item/:itemid'>
                <ItemDetailContainer productsAdded={cartProducts} addProdFunction={setCartProduct}/>
              </Route>
              <PrivateRoute path='/cart' user={user}>
                <Cart productsAdded={cartProducts} addProdFunction={setCartProduct}/>
              </PrivateRoute>
              <Route path='/login'>
                <Login/>
              </Route>
            </Switch>
        </BrowserRouter>
 
      </NotificationContextProvider>
    </div>
  )
}

export default App
