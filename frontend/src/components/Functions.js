import axios from 'axios'

function GetTabelData(setState, table) {
  const dataURL = `/api/${table}`;
  axios.get(dataURL)
    .then((response) => {
      //console.log(`${table}:`, response.data);
      setState(Array.isArray(response.data) ? response.data : []);
    })
    .catch((error) => {
      console.error('Error fetching devices:', error);
    });
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(cart, setCart, product) {
  //console.log(cart)
  const existing = cart.find(item => item.product_id === product.product_id);

  let updatedCart;
  if (existing) {
    updatedCart = cart.map(item =>
      item.product_id === product.product_id
        ? { ...item, quantity: (parseInt(item.quantity) + 1).toString() }
        : item
    );
  } else {
    updatedCart = [...cart, { ...product, quantity: "1" }];
  }

  setCart(updatedCart);
  saveCart(updatedCart);
}

function removeFromCart(cart, setCart, product) {
  const index = cart.findIndex(item => item.product_id === product.product_id);
  if (index === -1) return;

  const updated = [...cart];
  const newQty = parseInt(updated[index].quantity) - 1;

  if (newQty <= 0) {
    updated.splice(index, 1);
  } else {
    updated[index] = { ...updated[index], quantity: newQty.toString() };
  }

  setCart(updated);
  saveCart(updated);
}

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function clearCart(setCart) {
  setCart([]);
  localStorage.removeItem("cart");
  //console.log("done")
}

export { GetTabelData, addToCart, removeFromCart, getCart, clearCart };
