import { Link } from "react-router-dom";

const TotalCartItems = (cart) => {
  return cart.reduce((total, item) => total + parseInt(item.quantity), 0);
}

const Header = (cart) => {
    return(
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <h1>[RockShop]</h1>
          </div>
          <div className="header-actions">
            <Link to="/" className="button">Home</Link>
            <Link to="/cart" className="button">
            Shopping Cart {TotalCartItems(cart.cart) > 0 ? `(${TotalCartItems(cart.cart)})` : ''}
            </Link>
          </div>
        </div>
      </header>
    )
}

export default Header
