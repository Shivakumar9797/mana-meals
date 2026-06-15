function Cart() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 My Cart</h1>

      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <h3>No items in cart</h3>
        <p>Add food items from restaurants.</p>
      </div>
    </div>
  );
}

export default Cart;