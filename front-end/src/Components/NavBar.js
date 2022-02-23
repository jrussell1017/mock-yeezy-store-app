import { Link } from "react-router-dom";
import yeezyLogo from "../assets/yeezyLogo.png";

function NavBar() {
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
          <Link to="/cart">Cart: </Link>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
