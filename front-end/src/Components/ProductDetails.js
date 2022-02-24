import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Card } from "react-bootstrap";

const API = process.env.REACT_APP_API_URL;

function ProductDetails({ grabCart }) {
  const [product, setProduct] = useState([]);
  // const [cart, setCart] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
        navigate("/not-found");
      });
  }, [navigate, id]);

  const handleDelete = () => {
    axios
      .delete(`${API}/products/${id}`)
      .then((res) => {
        navigate("/products");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddToCart = (product) => {
    grabCart(product);
  };

  return (
    // <div>
    //   <img src={product.image} alt={product.name} width="350px"></img>
    //   <h5>{product.name}: {product.description}</h5>
    //   <div>
    //     <Link to={"/products"}>
    //       <button>Back</button>
    //     </Link>
    //     <Link to={`/products/${product.id}/edit`}>
    //       <button>Edit</button>
    //     </Link>
    //     <div>
    //       <button onClick={handleDelete}>Delete</button>
    //     </div>
    //     <div>
    //       <button onClick={()=>handleAddToCart(product)}>Add To Cart</button>
    //     </div>
    //   </div>
    // </div>

    <Card style={{ width: "25rem" }}>
      <Card.Title>Product Details</Card.Title>
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Text>
          <h5>
            {product.name}: {product.description}
          </h5>
          <h4>${product.price}.00</h4>
        </Card.Text>
        <Link to={"/products"}>
          <button>Back</button>
        </Link>
        <Link to={`/products/${product.id}/edit`}>
          <button>Edit</button>
        </Link>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
        <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
      </Card.Body>
    </Card>
  );
}

export default ProductDetails;
