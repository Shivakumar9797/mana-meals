import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🍽️ Mana Meals</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/restaurants">Restaurants</Link>
        <Link to="/cart">🛒 Cart</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login" className="login-btn">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;