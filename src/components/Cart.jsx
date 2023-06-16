import { Link } from 'react-router-dom';
import BookList from './BookList';
import Header from './Header';
export default function Cart(props) {
  return (
    <div className="CartPage">
      <Header disableSearch={props.disableSearch} />
      <div className="Cart">
        <BookList cart={props.cart} remove={props.removeCartItem} />
      </div>
      <div className="Proceed" style={{ padding: '10px' }}>
        <div
          style={{
            background: 'sandybrown',
            borderRadius: '6px',
            padding: '5px  2px 0px 2px',
            display: 'flex',
            flexDirection: 'column-reverse',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Link to="/checkout">
            <button>Proceed To Checkout</button>
          </Link>
          <button onClick={props.setCart}>Clear Cart</button>
          <div className="totalCart">Total : ${props.total.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
