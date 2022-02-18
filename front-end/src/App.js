import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar.js";
import Home from "./Pages/Home.js";
import Index from "./Pages/Index.js"
import FourOFour from "./Pages/FourOFour.js";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Index />} />
            {/* <Route path="/products/new" element={<New />} />
            <Route exact path="/products/:id" element={<Show />} />
            <Route path="/products/:id/edit" element={<Edit />} /> */}
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
