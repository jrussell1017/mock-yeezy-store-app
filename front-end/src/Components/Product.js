import { Link } from "react-router-dom";

function Product({ product, id }) {
  return (
    <div className="Product">
      <article className="cardContainer">
        <Link to={`/products/${id}`} style={{textDecoration: "none", color: "black"}}>
          <img src={product.image} alt="product: " />
          <h4>
            <b>{product.name}</b>
          </h4>
          <h5>Rating: {product.rating}</h5>
        </Link>
      </article>
    </div>
  );
}

export default Product;
