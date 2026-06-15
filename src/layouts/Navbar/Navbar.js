import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "15px",
        background: "#ff6b35",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/restaurants">Restaurants</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;