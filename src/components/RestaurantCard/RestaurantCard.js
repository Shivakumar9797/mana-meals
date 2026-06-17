import "./RestaurantCard.css";

function RestaurantCard({
  id,
  name,
  cuisine,
  rating,
  onAddToCart,
}) {
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
        alt={name}
      />

      <div className="restaurant-content">
        <div className="discount">
          🔥 20% OFF
        </div>

        <h3>{name}</h3>

        <p>{cuisine}</p>

        <p className="details">
          ⭐ {rating} | ⏱️ 25 mins
        </p>

        <button
          className="cart-btn"
          onClick={() =>
            onAddToCart({
              id,
              name,
              cuisine,
              rating,
            })
          }
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default RestaurantCard;