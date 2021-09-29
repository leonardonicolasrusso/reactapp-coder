import {useState, 
     useContext,
     useEffect
} from 'react'
import NotificationContext from '../../context/NotificationContext'
import CartContext from '../../context/CartContext'

const ItemCount = ({product, setCount})=> {
    const [quantity, setQuantity] = useState(0)
    const { setNotification } = useContext(NotificationContext)
    const { addItem, isInCart, getProduct } = useContext(CartContext)

    useEffect(() => {
        if(isInCart(product.id)) {
           const oldQuantity = getProduct(product.id)?.quantity
           setQuantity(oldQuantity)
        }
        return(() => {
            setQuantity(0)
        })
    }, [product, getProduct, isInCart])

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
        addItem(product, quantity)
        setCount(quantity) 
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