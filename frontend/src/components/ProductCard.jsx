import { useState, useEffect } from "react"
import { GetTabelData, addToCart,getCart,removeFromCart } from "./Functions"
import { Link } from "react-router-dom";


const ProductCard = ({product, cart, setCart}) => {
  return (
    <div className="product-inner">
      <h1>{product.name}</h1>
      <img src={product.img || "/placeholder.svg"} alt={product.name} />
      <h2>{product.description}</h2>
      <p>{product.price}€</p>
      <button onClick={() => addToCart(cart, setCart, product)}>Lisää ostoskoriin</button>
      <p></p>
      <button onClick={() => removeFromCart(cart, setCart, product)}>Poista ostoskorista</button>
    </div>
  )
}

const ProductLoop = ({ cart, setCart }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    GetTabelData(setProducts, "products")
  }, [])

  return (
    <div className="allProducts">
      {products.slice(0, 1000).map((product) => (
        <div className="productCard" key={product.product_id}>
          <ProductCard product={product} cart={cart} setCart={setCart} />
        </div>
      ))}
    </div>
  )
}

const HomePage = ({ cart, setCart }) => {
  return (
    <div className="home-page">
      <section className="products-section">
        <div className="section-header">
          <h2>Products</h2>
        </div>
        <ProductLoop cart={cart} setCart={setCart} />
      </section>
    </div>
  )
}

export default HomePage