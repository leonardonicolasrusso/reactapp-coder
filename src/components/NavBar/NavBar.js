import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import UserContext from '../../context/UserContext'
import CartContext from '../../context/CartContext'
import NotificationContext from '../../context/NotificationContext'

const NavBar = ({ categories }) => {
  const {user, logout} = useContext(UserContext)
  const { getQuantity } = useContext(CartContext)
  const { setNotification } = useContext(NotificationContext)

  const handleLogout = () => {
    logout()
    setNotification('error', `Hasta luego ${user}`)
  }

  return (
    <nav className="NavBar">
      <div>
        <Link to='/'>
          <h3>MARKETapp</h3>
        </Link>
      </div>
      <div className="Categories">
        {categories.map(category => <NavLink key={category.id} to={`/category/${category.id}`} className='Option' activeClassName="NavLink">{category.description}</NavLink>)}     
      </div>
      <div>
        {
          user 
            ? <button onClick={handleLogout}>Logout</button>
            : <Link to='/login'><button>Login</button></Link>
        }
      </div>
      <div>
        {
        (user && getQuantity() > 0) &&
          <Link to='/cart'>
            <CartWidget />
          </Link>
        }
      </div>

    </nav>
  )
}
export default NavBar;