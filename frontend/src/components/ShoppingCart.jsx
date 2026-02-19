import { useState, useEffect } from "react";
import { GetTabelData, addToCart, removeFromCart, clearCart } from "./Functions";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ShoppingCartCard = ({ product, cart, setCart }) => {
  const totalPrice = product.price * product.quantity;
  return (
    <div className="product-in-cart">
      <div className="product-info">
        <h2>{product.name}</h2>
        <h3>item price: {product.price}€</h3>
        <h3>Total item price: {totalPrice}€</h3>
      </div>
      <div className="product-quantity">
        <button onClick={() => removeFromCart(cart, setCart, product)}>-</button>
        <h2>{product.quantity}</h2>
        <button onClick={() => addToCart(cart, setCart, product)}>+</button>
      </div>
    </div>
  );
};

const ShoppingCartLoop = ({cart, setCart }) => {
  const navigate = useNavigate();
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "",
    street_address: "",
    postal_code: "",
    post_office_location: "",
  });

  const goToHomepage = () => {
    navigate("/");
    //console.log("Navigating to home");
  };

  const totalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSummary(true);
  };

  const updateContactInfo = (e, field) => {
    setDeliveryInfo({ ...deliveryInfo, [field]: e.target.value });
  };

  const reset = async () => {
    setShowSummary(false);
    setShowPaymentInfo(false);
    // setShowShoppingCart(false);
    clearCart(setCart)
    try {
      axios.put("/api/finish", {cart, deliveryInfo})
      .then(navigate("/"))
    } catch (error) {
      console.error("Error resetting cart:", error);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="empty-cart-container">
        <h1 className="empty-cart">Cart is empty</h1>
        <button className="homepage-button" onClick={goToHomepage}>
          Return to Homepage
        </button>
      </div>
    );
  }
  return (
    <div className="shopping-cart">
      <button className="homepage-button" onClick={goToHomepage}>
        Return to Homepage
      </button>
      {!showPaymentInfo && (
        <div className="cart-info">
          <h1>Shopping Cart</h1>
          <ul className="product-cart-list">
          {cart.map((product) => (
            <ShoppingCartCard
              key={product.product_id}
              product={product}
              cart={cart}
              setCart={setCart}
            />
          ))}
          </ul>
          <div className="cart-summary">
            <h3>Total: {totalPrice()}€</h3>
            <button className="pay-button" onClick={() => setShowPaymentInfo(true)}>
              Proceed to Payment
            </button>
          </div>
        </div>
      )}

      {showPaymentInfo && !showSummary && (
        <div className="payment-info">
          <form className="payment-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              onChange={(e) => updateContactInfo(e, "name")}
              type="text"
              value={deliveryInfo.name}
              name="name"
              id="name"
              required
            />

            <label htmlFor="street_address">Street Address:</label>
            <input
              onChange={(e) => updateContactInfo(e, "street_address")}
              type="text"
              value={deliveryInfo.street_address}
              name="street_address"
              id="street_address"
              required
            />

            <label htmlFor="postal_code">Postal Code:</label>
            <input
              onChange={(e) => updateContactInfo(e, "postal_code")}
              type="text"
              value={deliveryInfo.postal_code}
              name="postal_code"
              id="postal_code"
              required
            />

            <label htmlFor="post_office_location">Post Office Location:</label>
            <input
              onChange={(e) => updateContactInfo(e, "post_office_location")}
              type="text"
              value={deliveryInfo.post_office_location}
              name="post_office_location"
              id="post_office_location"
              required
            />

            <button type="submit">Order Summary</button>
          </form>
        </div>
      )}

      {showSummary && (
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="product-summary">
            {cart
              .filter((p) => p.quantity > 0)
              .map((product) => (
                <div key={product.product_id} className="product-summary-item">
                  <h2>{product.name}</h2>
                  <img className="small-img" src={product.img || "/placeholder.svg"} alt={product.name} />
                  <p>Quantity: {product.quantity}</p>
                  <p>Price: {product.price * product.quantity}€</p>
                </div>
              ))}
          </div>
          <div className="contact-summary">
            <h2>Delivery Information</h2>
            <p>Name: {deliveryInfo.name}</p>
            <p>Street Address: {deliveryInfo.street_address}</p>
            <p>Postal Code: {deliveryInfo.postal_code}</p>
            <p>Post Office Location: {deliveryInfo.post_office_location}</p>
          </div>
          <button className="back-to-shopping" onClick={reset}>
            Complete Order
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartLoop;
