import BookList from './BookList';
import Header from './Header';

export default function Cart(props) {
  return (
    <div className="CartPage">
      <Header />
      <div className="Cart">
        <BookList cart={props.cart} />
      </div>
      <div className="Proceed">
        <div>
          <button>Proceed To Checkout</button>
          <button>Clear Cart</button>
        </div>
        <div>
          <button>Return HOME</button>
        </div>
      </div>
    </div>
  );
}
