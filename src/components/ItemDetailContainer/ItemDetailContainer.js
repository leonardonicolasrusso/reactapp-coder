import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { getProductById } from '../../products'

const ItemDetailContainer = ({ productsAdded, addProdFunction }) => {

    const [product, setProduct] = useState(undefined)
    const [loading, setLoading] = useState(true)
    const {itemid} = useParams()
    
    useEffect(() => {
        
        getProductById(itemid).then(result => {
            setProduct(result)
            setLoading(false)
            }
        )

        return (() => {
            setProduct(undefined)
        }
        )

    },[itemid])

    return (
        <div className='ItemDetailContainer' >
            {loading ? "Loading.." : <ItemDetail product={product} itemid={itemid} productsAdded={productsAdded} addProdFunction={addProdFunction}/>}    
        </div>
    )
}
export default ItemDetailContainer