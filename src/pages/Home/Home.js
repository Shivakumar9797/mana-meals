import { useState } from "react";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { restaurants } from "../../services/data";

function Home() {
  const [search, setSearch] = useState("");

  const [cart, setCart] = useState([]);

  const addToCart = (restaurant) => {
    setCart([...cart, restaurant]);
  };

    
  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          backgroundColor: "#fff3e6",
          padding: "40px",
          borderRadius: "15px",
        }}
      >
        <h1>50% OFF ON FIRST ORDER</h1>

        <p>
          Order from top rated local restaurants
        </p>

        <button>
          Order Now
        </button>
      </div>

      <CategoryFilter />
      <input
        type="text"
        placeholder="Search restaurants..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
        width: "100%",
        padding: "10px",
        margin: "20px 0",
        borderRadius: "5px",}}
      />

      <h2>Popular Restaurants</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {restaurants
  .filter((restaurant) =>
    restaurant.name.toLowerCase().includes(search.toLowerCase())
  )
  .map((restaurant) => (
    <RestaurantCard
  key={restaurant.id}
  id={restaurant.id}
  name={restaurant.name}
  cuisine={restaurant.cuisine}
  rating={restaurant.rating}
  onAddToCart={() => addToCart(restaurant)}

    />
    
  ))}
      </div>
      <h3>Cart Items: {cart.length}</h3>
      <ul>
  {cart.map((item, index) => (
    <li key={index}>
      {item.name} - {item.cuisine}
    </li>
  ))}
</ul>
    </div>
  );
}

export default Home;