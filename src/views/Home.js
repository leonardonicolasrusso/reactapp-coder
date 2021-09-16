import { useState, useEffect } from 'react'

const Home = () => {
  const [color, setColor] = useState(false)

  const onResize = () => {
    console.log('resize')
    setColor(true)
  }

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
    window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    setColor(false)
  }, [color])

    return (
      <div className="Home" style={{ backgroundColor: color ? 'red' : '#60b4f8'}}>
        <h1>Home</h1>
      </div>
    );
  }
  
  export default Home;
  