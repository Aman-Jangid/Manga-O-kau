import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { useEffect, useState } from 'react';

export default function Router() {
  const [cart, setCart] = useState([]);
  let totalPrice = 0;

  // welcome
  useEffect(() => {
    console.log('sup 👋');
  }, []);

  useEffect(() => {
    setCart(cart);
  }, [cart]);

  const setCartItems = (item) => {
    const newArr = [...cart, item];
    setCart([...newArr]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeCartItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart([...newCart]);
  };

  if (cart.length !== 0) {
    const Prices = cart.map((item) => +item.price * item.quantity);
    const total = Prices.reduce((acc, curr) => acc + curr);
    totalPrice = total;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<App setCart={setCartItems} cart={cart} />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                removeCartItem={removeCartItem}
                setCart={clearCart}
                disableSearch={true}
                total={totalPrice}
              />
            }
          />
          <Route path="/checkout" element={<Checkout total={totalPrice} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
