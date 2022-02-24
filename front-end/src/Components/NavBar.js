import { Link } from "react-router-dom";
import yeezyLogo from "../assets/yeezyLogo.png";

function NavBar({cartTotal}) {
  return (
    <nav>
      <h1>
        <Link to="/products">
          <img id="logo" src={yeezyLogo} alt="yeezy logo"/>
        </Link>
      </h1>
      <div>
        <button>
          <Link to="/products/new">New Sneaker Entry</Link>
        </button>
      </div>
      <div>
        <button>
          <Link to="/cart"><img id="cart-icon" width="50px" src={"http://toppng.com/uploads/preview/shopping-cart-sign-shopping-cart-empty-ico-11563228005rnccz3lvl0.png"} alt="cart icon"/></Link>
        </button>
        <div>
          {cartTotal}
        </div>
      </div>
    </nav>
  );
}


export default NavBar;
