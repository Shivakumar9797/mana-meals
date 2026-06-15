function CategoryFilter() {
  const categories = [
    "All",
    "Veg Only",
    "Non-Veg",
    "Desserts",
    "Beverages",
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Filter Categories</h2>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        {categories.map((item) => (
          <button
            key={item}
            style={{
              padding: "10px 15px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              cursor: "pointer",
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;