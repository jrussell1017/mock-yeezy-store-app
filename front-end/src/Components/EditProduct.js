import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function EditProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState({
        name: "",
        description: "",
        featured: null,
        image: "",
        price: 0,
    });
    
    const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, navigate]);

  const handleTextChange = (e) => {
    setProduct({ ...product, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${API}/products/${id}`, product)
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

export default EditProduct;
