import { useParams } from "react-router-dom";
import { restaurants } from "../../services/data";

function RestaurantDetails() {
  const { id } = useParams();

  const restaurant = restaurants.find(
    (item) => item.id === Number(id)
  );

  if (!restaurant) {
    return <h2>Restaurant Not Found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{restaurant.name}</h1>

      <img
        src="https://picsum.photos/500/250"
        alt="food"
        style={{
          width: "100%",
          maxWidth: "500px",
          borderRadius: "10px",
        }}
      />

      <h3>Cuisine: {restaurant.cuisine}</h3>

      <h3>⭐ Rating: {restaurant.rating}</h3>

      <button
        style={{
          padding: "10px 20px",
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

export default RestaurantDetails;