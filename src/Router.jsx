import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { useEffect, useState } from 'react';

export default function Router() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(315);

  useEffect(() => {
    console.log('cart Updated -> ' + cart);
  }, [cart]);

  const setCartItems = (item) => {
    const newArr = [...cart, item];
    setCart([...newArr]);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<App setCart={setCartItems} cart={cart} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/checkout" element={<Checkout total={total} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
