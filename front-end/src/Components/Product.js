import { Link } from "react-router-dom";

function Product({ product, id }) {
  return (
    <div className="Product">
      <Link to={`/products/${id}`}>
        <h4>
          <img src={product.image} alt="product: " />
          {product.name}
        </h4>
      </Link>
    </div>
  );
}

export default Product;