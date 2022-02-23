
function Cart({ cart }) {

    let cartItems = cart.map((product) => {
        return <li>{`${product.name}: ${product.price}`}</li>
    })

    return(
        <ul>{cartItems}</ul>
    )
}

export default Cart;