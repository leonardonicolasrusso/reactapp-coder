
const Item = ({ item }) => {
    
    const handleClick = (ev) => {
        console.log(ev)
        ev.stopPropagation()
        console.log('click en el producto')
    }

    const handleOnKeyDown = ev => {
        if(ev.key == 'a' || ev.key == 'e' || ev.key == 'i' || ev.key == 'o' || ev.key == 'u') {
            ev.preventDefault()
    
        }else{
          console.log(ev.key)
        }
    }
  




    if(!item) {
        return <h1>Loading</h1>
    }

    return (
        <div style={{width: '200px', backgroundColor: 'white'}} onClick={handleClick}>
            <img style={{ width: '200px'}} src={item?.img} alt={item?.name}/>
            <h3>{item?.name}</h3>
            <p>precio: <strong>{item?.price}</strong></p>
            <input onKeyDown={handleOnKeyDown}/>
        </div>
    )
}

export default Item