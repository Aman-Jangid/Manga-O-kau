import { Link } from 'react-router-dom';
import BookList from './BookList';
import Header from './Header';
export default function Cart(props) {
  let totalPrice = 0;

  if (props.cart.length !== 0) {
    const Prices = props.cart.map((item) => +item.price);
    const total = Prices.reduce((acc, curr) => acc + curr);
    totalPrice = total;
  }

  return (
    <div className="CartPage">
      <Header disableSearch={props.disableSearch} />
      <div className="Cart">
        <BookList cart={props.cart} />
      </div>
      <div className="Proceed" style={{ padding: '10px' }}>
        <div>
          <Link to="/checkout">
            <button>Proceed To Checkout</button>
          </Link>
          <button>Clear Cart</button>
        </div>
        <div>
          <div>Total : ${totalPrice.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
