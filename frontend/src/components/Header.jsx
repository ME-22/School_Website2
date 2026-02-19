import { Link } from "react-router-dom";
const Header = () => {
    return(
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <h1>[RockShop]</h1>
          </div>
          <div className="header-actions">
            <Link to="/" className="cart-button">Home</Link>
            <Link to="/cart" className="cart-button">
            Shopping Cart
            </Link>
          </div>
        </div>
      </header>
    )
}

export default Header
