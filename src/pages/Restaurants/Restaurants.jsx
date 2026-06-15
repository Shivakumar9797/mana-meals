import { restaurants } from "../../services/data";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";

function Restaurants() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>All Restaurants</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            name={restaurant.name}
            cuisine={restaurant.cuisine}
            rating={restaurant.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default Restaurants;