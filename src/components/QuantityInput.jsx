import { useEffect, useRef, useState } from 'react';

export default function QuantityInput(props) {
  const [quantity, setQuantity] = useState(1);

  let target = useRef();

  useEffect(() => {
    if (quantity < 1) {
      setQuantity(1);
    }

    target.current.value = quantity;
    props.setQuantity(quantity);
  }, [quantity]);

  const removeItemHandler = (e) => {
    setQuantity(parseInt(quantity) - 1);
  };

  const addItemHandler = (e) => {
    setQuantity(parseInt(quantity) + 1);
  };

  const onChangeHandler = (e) => {
    if (e.target.value < 0) {
      e.target.value = 1;
    }
    setQuantity(e.target.value);
  };

  return (
    <div className="QuantityInput">
      <button className="decrement" onClick={() => removeItemHandler()}>
        -
      </button>
      <input
        ref={target}
        onChange={(e) => onChangeHandler(e)}
        style={{ background: '#ddd', textAlign: 'center' }}
        type="number"
      />
      <button onClick={() => addItemHandler()} className="increment">
        +
      </button>
    </div>
  );
}
