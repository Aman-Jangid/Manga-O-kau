import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Checkout(props) {
  const [orderSuccess, setOrderSuccess] = useState(false);

  const navigate = useNavigate();

  const onClickHandle = () => {
    setOrderSuccess(true);
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="Checkout">
      <div className="PayPanel">
        {orderSuccess ? (
          <div className="orderSuccess">
            <span>Order Successfully placed...</span>
            <span>
              Thank you for buying from our shop
              <br />
              redirecting you to the home page
            </span>
          </div>
        ) : (
          <>
            <div className="total">Total: ${props.total}</div>
            <div className="coupon">
              <label htmlFor="coupon">Apply Coupon</label>
              <input type="text" id="coupon" placeholder="Coupon" />
            </div>
            <div className="buttons">
              <Link className="cancel" to="/cart">
                Cancel
              </Link>
              <button onClick={() => onClickHandle()}>Confirm</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
