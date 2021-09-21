const CartWidget = (props) => {
    return(
        <button >
            <img src="/assets/cart.svg" alt='cart'/>
            {props.quantity}
        </button>
  
    );
}

export default CartWidget
