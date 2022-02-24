import { Link } from "react-router-dom";
import yeezyLogo from "../assets/yeezyLogo.png";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import Button from "@mui/material/Button";

function NavBar({ cartTotal, cart }) {
  return (
    <nav>
      <h1>
        <Link to="/products">
          <img id="logo" src={yeezyLogo} alt="yeezy logo" />
        </Link>
      </h1>
      <div>
        <Link to="/products/new" style={{textDecoration: "none"}}>
          <Button variant="outlined" sx={{color: "black"}}>New Sneaker Entry</Button>
        </Link>
      </div>
      <div>
        <Link to="/cart">
          <Badge badgeContent={cart.length} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </Link>
        <div>{cartTotal}</div>
      </div>
    </nav>
  );
}

export default NavBar;
