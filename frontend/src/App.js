import { useState } from "react";
import { createOrder } from "./api";

function App() {
  const products = [
    { name: "Laptop", price: 1000, img: "/images/laptop.png" },
    { name: "Phone", price: 500, img: "/images/mobile.png" },
    { name: "Headphones", price: 200, img: "/images/headphones.png" }
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [form, setForm] = useState({ name: "", address: "", phone: "" });

  const openProduct = (product) => {
    setSelectedProduct(product);
    setForm({ name: "", address: "", phone: "" });
  };

  const handleSubmit = () => {
    if (!form.name || !form.address || !form.phone) {
      alert("Please fill all details");
      return;
    }

    createOrder({
      productName: selectedProduct.name,
      price: selectedProduct.price,
      customerName: form.name,
      customerAddress: form.address,
      customerPhone: form.phone
    }).then(() => {
      alert("Order placed!");
      setSelectedProduct(null); // back to product list
    });
  };

  // Product list view
  if (!selectedProduct) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>E-commerce Shopping portal</h1>
        <div style={{ display: "flex", gap: "20px" }}>
          {products.map((p, i) => (
            <div
              key={i}
              style={{ border: "1px solid #ccc", padding: "10px", cursor: "pointer" }}
              onClick={() => openProduct(p)}
            >
              <img src={p.img} alt={p.name} width="150" />
              <h3>{p.name}</h3>
              <p>${p.price}</p>
            </div>
          ))}
        </div>
        <h2>this is E-commerce Shopping portal</h2>
      </div>
    );
  }

  // Product detail view
  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => setSelectedProduct(null)}>⬅ Back</button>
      <h2>{selectedProduct.name}</h2>
      <img src={selectedProduct.img} alt={selectedProduct.name} width="200" />
      <p>Price: ${selectedProduct.price}</p>

      <h3>Enter Delivery Details</h3>
      <input
        placeholder="Your Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <br />
      <input
        placeholder="Your Address"
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />
      <br />
      <input
        placeholder="Your Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <br />
      <button onClick={handleSubmit}>Place Order</button>
    </div>
  );
}

export default App;
