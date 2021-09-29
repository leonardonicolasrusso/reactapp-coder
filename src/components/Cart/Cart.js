import { useState, useContext, useEffect } from 'react'
import { 
    collection, addDoc, getDoc, doc ,
    Timestamp, writeBatch 
} from 'firebase/firestore'
import './Cart.css'
import ItemList from "../ItemList/ItemList"
import UserContext from '../../context/UserContext'
import CartContext from '../../context/CartContext'
import NotificationContext from '../../context/NotificationContext'
import { db } from '../../services/firebase/firebase'

const Cart = () => {
    const [total, setTotal] = useState()
    const [processingOrder, setProcessingOrder] = useState(false)
    const { products, clearCart, getTotal } = useContext(CartContext)
    const { user } = useContext(UserContext)
    const { setNotification } = useContext(NotificationContext)

    useEffect(() => {
        setTotal(getTotal())
    }, [getTotal])

    const confirmOrder = () => {
        setProcessingOrder(true)

        const objOrder = {
            buyer: user,
            items: products,
            total: total,
            date: Timestamp.fromDate(new Date())
        }
                    
        const batch = writeBatch(db)
        const outOfStock = []
            
        objOrder.items.forEach((prod, i) => {
            getDoc(doc(db, 'items', prod.id)).then(DocumentSnapshot => {
                if(DocumentSnapshot.data().stock >= objOrder.items[i].quantity) {
                    batch.update(doc(db, 'items', DocumentSnapshot.id), {
                        stock: DocumentSnapshot.data().stock - objOrder.items[i].quantity
                    })
                } else {
                    outOfStock.push({...DocumentSnapshot.data(), id: DocumentSnapshot.id})
                }
                    
            })
        })

        if(outOfStock.length === 0) {
            addDoc(collection(db, 'orders'), objOrder).then(() => {
                batch.commit().then(() => {
                    setNotification('success', 'La orden se ejecuto con exito')
                })
            }).catch((error) => {
                setNotification('error','Error al ejecutar la orden')
            }).finally(() => {
                setProcessingOrder(false)
                clearCart()
                setTotal(0)
            })
        }
    }

    return ( 
        <div>
            <h1>Cart</h1>
            {(total > 0 && !processingOrder) && <h3>Total: ${total}</h3>}
            {!processingOrder && products.length > 0 && <button onClick={() => clearCart()} className="Button">Cancelar compra</button>}
            {!processingOrder && products.length > 0 && <button onClick={() => confirmOrder()} className="Button">Confirmar Compra</button>}
            {!processingOrder ? <ItemList products={products} /> : 'Procesando Orden'}
        </div>
    )
}
export default Cart