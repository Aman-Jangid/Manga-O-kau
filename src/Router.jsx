import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
