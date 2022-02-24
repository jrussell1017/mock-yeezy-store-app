import ProductDetails from "../Components/ProductDetails";

function Show({ grabCart }) {
  return (
    <div id="details-container">
      <ProductDetails grabCart={grabCart}/>
    </div>
  );
}

export default Show;
