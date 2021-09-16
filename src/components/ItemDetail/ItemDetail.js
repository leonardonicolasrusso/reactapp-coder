import { useState } from 'react'


const InputCount = ({onConfirm, maxQuantity}) => {
    const [count, setCount] = useState(0)

    const handleChange = ({ target }) => {
        if(target.value <= maxQuantity && target.value >= 0) {
            setCount(target.value)
        }    
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <div>
                <button onClick={() => onConfirm(count)}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

const ButtonCount = ({onConfirm, maxQuantity}) => {
    const [count, setCount] = useState(0)

    const handleRemove = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    const handleAdd = () => {
        if(count < maxQuantity) {
            setCount(count + 1)
        }
    }

    return (
        <div>
            <div>{count}</div>
            <button onClick={handleRemove}>-</button>
            <button onClick={handleAdd}>+</button>
            <div>
                <button onClick={() => onConfirm(count)}>Agregar al Carrito</button>
            </div>
        </div>
    )
}


const ItemDetail = ({ item, inputType = 'input' }) => {
    const [quantity, setQuantity] = useState(0)
    console.log('ESTA ES LA CANTIDAD EN ITEM DETAIL: ' + quantity)
    
    const Count = inputType === 'button' ?
        ButtonCount : InputCount

    const addToCart = (numberOfProductsAdd) => {
        console.log('agregado al carrito')
        setQuantity(numberOfProductsAdd)
    }

    if(!item) {
        return <h1>Loading</h1>
    }

    return (
        <div style={{width: '200px', backgroundColor: 'white'}}>
            <img style={{ width: '200px'}} src={item?.img} alt={item?.name}/>
            <h3>{item?.name}</h3>
            <h6>Description:</h6>
            <p>Aca iria una descripcion</p>
            <p>precio: <strong>{item?.price}</strong></p>
            <p>Stock: {item.max}</p>
            <Count onConfirm={addToCart} maxQuantity={item.max}/>
        </div>
    )
}

export default ItemDetail