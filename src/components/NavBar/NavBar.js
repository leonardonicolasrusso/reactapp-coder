import { useState, useEffect, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { UserContext } from '../../context/UserContext'

const NavBar = ({ categories, cartProducts }) => {
  const [productQuantity, setProductQuantity] = useState(0)
  const user = useContext(UserContext)

  useEffect(() => {
    if(cartProducts.length === 0) {
      setProductQuantity(0)
    } else {
      cartProducts.forEach(prod => {
        setProductQuantity(productQuantity + prod.quantity)
    })
    }
  }, [cartProducts]) // eslint-disable-line

  return (
    <nav className="NavBar">
      <div>
        <Link to='/'>
          <h3>MARKETapp</h3>
        </Link>
      </div>
      {user && <div className="Categories">
        {categories.map(category => <NavLink key={category.id} to={`/category/${category.id}`} className='Option' activeClassName="NavLink">{category.description}</NavLink>)}     
      </div>}
      <div>
        <Link to='/cart'>
          <CartWidget quantity={productQuantity} />
        </Link>
      </div>

    </nav>
  )
}
export default NavBar;