import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    featured: null,
    image: "",
    price: 0,
  });

  const API = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const handleTextChange = (e) => {
    setProduct({ ...product, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API}/products`, product)
      .then(() => {
        navigate(`/products`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCheckboxChange = (e) => {
    setProduct({ ...product, featured: !product.featured });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Product Name:</label>
        <input
          id="name"
          value={product.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name.."
          required
        />
        <label htmlFor="description">product description:</label>
        <input
          id="description"
          type="text"
          value={product.description}
          onChange={handleTextChange}
        />
        <label htmlFor="price">price:</label>
        <input
          id="price"
          type="number"
          name="price"
          value={product.price}
          onChange={handleTextChange}
        />
        <label htmlFor="image">product image:</label>
        <input
          id="image"
          type="text"
          value={product.image}
          onChange={handleTextChange}
        />
        <label htmlFor="featured">Featured:</label>
        <input
          id="featured"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={product.featured}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default NewProduct;
