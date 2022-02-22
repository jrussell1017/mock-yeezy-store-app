import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function ProductDetails() {
  const [product, setProduct] = useState([]);
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

  return (
    <div>
      <img src={product.image} alt={product.name} width="350px"></img>
      <h5>{product.name}: {product.description}</h5>
      <div>
        <Link to={"/products"}>
          <button>Back</button>
        </Link>
        <Link to={`/products/${product.id}/edit`}>
          <button>Edit</button>
        </Link>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
