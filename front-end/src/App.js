import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import NavBar from "./Components/NavBar.js";
import Home from "./Pages/Home.js";
import Index from "./Pages/Index.js"
import Show from "./Pages/Show.js";
import New from "./Pages/New.js";
import Edit from "./Pages/Edit.js";
import Cart from "./Components/Cart.js"
import FourOFour from "./Pages/FourOFour.js";

function App() {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  let grabCart = (product) => {
    setCart([...cart, product])
  }

  const total = () => {
    let totalInCart = 0;
    for (let i = 0; i < cart.length; i++) {
        totalInCart += cart[i].price;
      }
      setCartTotal(totalInCart);
  };

  return (
    <div className="App">
      <Router>
        <NavBar cart={cart}/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Index />} />
            <Route path="/products/new" element={<New />} />
            <Route exact path="/products/:id" element={<Show grabCart={grabCart} />} />
            <Route path="/products/:id/edit" element={<Edit />} />
            <Route path="/cart" element={<Cart cart={cart} total={total} />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
