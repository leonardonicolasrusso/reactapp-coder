import {useState, 
     useContext
} from 'react'
import NotificationContext from '../../context/NotificationContext'

const ItemCount = ({product, productsAdded, addProdFunction, setCount})=> {
    const [quantity,setQuantity] = useState(0)
    const { setNotification } = useContext(NotificationContext)

    const onAdd = () => {
        if(quantity < product.stock) {
            setQuantity(quantity+1)
        }
    }

    const onRemove = () => {
        if(quantity > 0) {
            setQuantity(quantity - 1)
        }     
    }

    const onAddtoCart = () =>{
        const newProduct = {
            ...product,
            quantity: quantity
        }
        setCount(quantity) 
        addProdFunction([...productsAdded, newProduct])
        setNotification('success', `${product.name} ha sido agregado al carrito`)
    }


    
    return(
        <div align="center">          
            <table >
                <tbody>
                    <tr>
                        <td align="left"><button className="Button" onClick={()=> onRemove() }>-</button></td>
                        <td align="center" style={{fontSize : '20px'}}>{quantity}</td>
                        <td align="right"><button className="Button" onClick={() => onAdd() }>+</button></td>
                    </tr>
                    <tr>
                        <td align="center" colSpan="5"><button className="Button" onClick={()=>onAddtoCart()}>Agregar al carrito</button></td>
                    </tr>

                </tbody>
            </table>       
        </div>
    )

}
export default ItemCount