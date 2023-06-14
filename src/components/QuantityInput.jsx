export default function QuantityInput(props) {
  return (
    <div className="QuantityInput">
      <button className="decrement">-</button>
      <input type="number" />
      <button className="increment">+</button>
    </div>
  );
}
