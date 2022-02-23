
function Cart({ cart }) {

    let cartItems = cart.map((product) => {
        return <li key={product.id}>{`${product.name}: $${product.price}.00`}</li>
    })

    return(
        <ul>{cartItems}</ul>
    )
}

export default Cart;