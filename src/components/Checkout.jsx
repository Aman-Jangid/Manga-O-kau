export default function Checkout(props) {
  return (
    <div className="Checkout">
      <div className="PayPanel">
        <div className="total">Total: $124</div>
        <div className="coupon">
          <label htmlFor="coupon">Apply Coupon</label>
          <input type="text" id="coupon" placeholder="Coupon" />
        </div>
        <div className="buttons">
          <button>Cancel</button>
          <button>Confirm</button>
        </div>
      </div>
    </div>
  );
}
