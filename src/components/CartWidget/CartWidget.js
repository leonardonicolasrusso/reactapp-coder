import { useContext } from "react";
import CartContext from '../../context/CartContext'

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)

    return(
        <button >
            <img src="/assets/cart.svg" alt='cart'/>
            {getQuantity()}
        </button>
  
    );
}

export default CartWidget
