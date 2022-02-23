import { Link } from "react-router-dom";

function Product({ product, id }) {
  return (
    <div className="Product">
      <article className="cardContainer">
        <Link to={`/products/${id}`}>
          <img src={product.image} alt="product: " />
          <h4>
            <b>{product.name}</b>
          </h4>
        </Link>
      </article>
    </div>
  );
}

export default Product;
