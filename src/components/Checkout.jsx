import { Link } from 'react-router-dom';

export default function Checkout(props) {
  return (
    <div className="Checkout">
      <div className="PayPanel">
        <div className="total">Total: ${props.total}</div>
        <div className="coupon">
          <label htmlFor="coupon">Apply Coupon</label>
          <input type="text" id="coupon" placeholder="Coupon" />
        </div>
        <Link className="buttons" to="/">
          <button>Cancel</button>
          <button>Confirm</button>
        </Link>
      </div>
    </div>
  );
}
