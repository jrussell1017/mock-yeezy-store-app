import { useState, useEffect } from "react";

function Cart({ cart }) {
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    total();
  }, [cart]);
  
  const total = () => {
      let totalInCart = 0;
      for (let i = 0; i < cart.length; i++) {
          totalInCart += cart[i].price;
        }
        setCartTotal(totalInCart);
    };
    
  let cartItems = cart.map((product) => {
    return <li key={product.id}>{`${product.name}: $${product.price}.00`}</li>;
  });

  return (
    <div>
      <ul>{cartItems}</ul>
      <h4>Cart Total: ${cartTotal}.00</h4>
    </div>
  );
}

export default Cart;
