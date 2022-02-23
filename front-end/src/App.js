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

  let grabCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Index />} />
            <Route path="/products/new" element={<New />} />
            <Route exact path="/products/:id" element={<Show grabCart={grabCart} />} />
            <Route path="/products/:id/edit" element={<Edit />} />
            <Route path="/cart" element={<Cart cart={cart} />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
