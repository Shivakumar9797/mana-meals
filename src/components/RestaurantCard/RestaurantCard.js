function RestaurantCard({ id, name, cuisine, rating, onAddToCart }) {
  return (
    <div
      style={{
        width: "250px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
      }}
    >
      <img
        src="https://picsum.photos/250/150"
        alt="food"
        style={{
          width: "100%",
          borderRadius: "10px",
        }}
      />

      <h3>{name}</h3>
      <p>{cuisine}</p>
      <p>⭐ {rating}</p>

      <button
        onClick={() => onAddToCart({ id, name, cuisine, rating })}
        style={{
          padding: "10px",
          backgroundColor: "orange",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add To Cart
      </button>
    </div>
  );
}

export default RestaurantCard;