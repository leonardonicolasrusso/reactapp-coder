import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'

const NavBar = ({products}) => {
    
    return (
      <nav className='NavBar'>
        <Link to="/" className="Option">LOGO</Link>
        <NavLink to="/about" activeClassName="NavLink" className="Option">About</NavLink>
        <NavLink to="/contact" activeClassName="NavLink" className="Option">Contact</NavLink>
        <NavLink to="/products" activeClassName="NavLink" className="Option">Products</NavLink>
        {products.map(cat => <NavLink key={cat.id} to={`/product/${cat.name}`} activeClassName="NavLink" className="Option">{cat.name}</NavLink>)}                        
      </nav>
    )
}

export default NavBar
