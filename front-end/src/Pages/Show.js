import ProductDetails from "../Components/ProductDetails";

function Show({ grabCart }) {
  return (
    <div>
      <ProductDetails grabCart={grabCart}/>
    </div>
  );
}

export default Show;
