import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { db } from '../../services/firebase/firebase'
import { doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = ({ productsAdded, addProdFunction }) => {
    const [product, setProduct] = useState(undefined)
    const [loading, setLoading] = useState(true)
    const {itemid} = useParams()
    
    useEffect(() => {
        setLoading(true)
        getDoc(doc(db, 'items' , itemid)).then((querySnapshot) => {
            console.log({id: querySnapshot.id, ...querySnapshot.data()})
            const product = { id: querySnapshot.id, ...querySnapshot.data()}
            setProduct(product)
        }).catch((error) => {
            console.log('Error searching intems', error)
        }).finally(() => {
            setLoading(false)
        })
        return (() => {
            setProduct(undefined)
        })
    },[itemid])

    return (
        <div className='ItemDetailContainer' >
            {loading ? "Loading.." : <ItemDetail product={product} itemid={itemid} productsAdded={productsAdded} addProdFunction={addProdFunction}/>}    
        </div>
    )
}
export default ItemDetailContainer