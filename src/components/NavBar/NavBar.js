import { useState, useEffect } from 'react'
import './NavBar.css'
import MiButton from '../Button/Button.js'


const NavBar = ({bebida}) => {
  const [plato, setPlato] = useState('')

    useEffect(() => {
      console.log('Pedido al mozo')
      setPlato('Pastas')
      
      return () => {
       console.log('propina al mozo')
      }
    }, [])

    
    useEffect(() => {
      console.log('lavo el vaso')
    }, [bebida])


    console.log('El componente va a ser Renderizado')
    
    return (
      <nav className='NavBar'>
        <div className='LeftNav'>
          <div className='NavOptionsLeft'>
              <MiButton className='Option' label="Home"/>
              <MiButton className='Option' label="About"/>            
              <button className='Option'>Favourites</button>
          </div>
        </div>
        <div className='RightNav'>
          <div className='NavOptionsRight'>
            <button className="Option">Singin</button>
            <button className="Option">Singup</button>
          </div>
        </div>
      </nav>
    )
}

export default NavBar
