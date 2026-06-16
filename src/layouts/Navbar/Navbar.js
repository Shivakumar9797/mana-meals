import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#ff6b35",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "flex-start",
        gap: "700px",
        alignItems: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        position: "sticky",
        top: "0",
        zIndex: "1000",
      }}
    >
      {/* Logo */}
      <div
  style={{
    color: "white",
    fontSize: "28px",
    fontWeight: "bold",
    marginRight: "40px",
  }}
>
        🍽️ Mana Meals
      </div>

      {/* Menu */}
      <div
        style={{
          display: "flex",
          gap: "25px",
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Home
        </Link>

        <Link
          to="/restaurants"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Restaurants
        </Link>

        <Link
          to="/cart"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          🛒 Cart
        </Link>

        <Link
          to="/orders"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Orders
        </Link>

        <Link
          to="/profile"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Profile
        </Link>

        <Link
          to="/login"
          style={{
            backgroundColor: "white",
            color: "#ff6b35",
            padding: "8px 15px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;