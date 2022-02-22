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

{
  /* <div class="card">
  <img src="img_avatar.png" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
  </div>
</div> */
}

export default Product;
