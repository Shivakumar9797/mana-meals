import { useState } from "react";
import "./Home.css";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { restaurants } from "../../services/data";
import heroFood from "../../assets/images/hero-food.jpg";

function Home() {
  const [search, setSearch] = useState("");

  const [cart, setCart] = useState([]);

  const addToCart = (restaurant) => {
    setCart([...cart, restaurant]);
  };

    
  return (
    <div style={{ padding: "20px" }}>
     <div className="hero">
  <div className="hero-content">
    <h1>Delicious Food Delivered To Your Doorstep</h1>

    <p>
      Fresh food from your favorite restaurants
      with fast delivery.
    </p>

    <button className="hero-btn">
      Order Now
    </button>
  </div>

    <img
      className="hero-image"
      src={heroFood}
      alt="Food"
    />
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

      <h2
  style={{
    marginBottom: "20px",
    color: "#333",
  }}
>
  🍴 Popular Restaurants
</h2>
      <div className="restaurant-grid">
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
      <h3
  style={{
    marginTop: "30px",
    color: "#ff6b35",
  }}
>
  🛒 Cart Items: {cart.length}
</h3>
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