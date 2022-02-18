import { Link } from "react-router-dom";
import yeezyLogo from "../assets/yeezyLogo.png"

function NavBar() {
    return (
        <nav>
            <h1>
                <Link to="/products"><img id="logo" src={yeezyLogo}/></Link>
            </h1>
            <button>
                <Link to="/products/new">New Sneaker Entry</Link>
            </button>
        </nav>
    )
}

export default NavBar;