import { useState, useEffect } from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/NavBar/NavBar'
import Cart from './components/Cart/Cart'
import Notification from './components/Notification/Notification'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'
import { getCategories } from './products'
import { NotificationContextProvider } from './context/NotificationContext'
import { UserContext } from './context/UserContext'


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
          <UserContext.Provider value={user}>
            <NavBar categories={getCategories()} cartProducts={cartProducts}/> 
          </UserContext.Provider> 
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
              <Route path='/cart'>
                <Cart productsAdded={cartProducts} addProdFunction={setCartProduct}/>
              </Route>
            </Switch>
        </BrowserRouter>
 
      </NotificationContextProvider>
    </div>
  )
}

export default App
