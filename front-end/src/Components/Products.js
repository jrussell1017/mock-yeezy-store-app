import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";

const API = process.env.REACT_APP_API_URL;

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Products">
      {products.map((product) => {
        return <Product key={product.id} product={product} id={product.id} />;
      })}
    </div>
  );
}

export default Products;
