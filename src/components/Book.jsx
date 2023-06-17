import { useEffect, useState } from 'react';
import QuantityInput from './QuantityInput';

export default function Book(props) {
  const [quantity, setQuantity] = useState(1);

  const cartClickHandle = () => {
    props.setCart({
      title: props.title,
      author: props.author,
      chaptersInCart: 1,
      image: props.image,
      price: props.price,
      quantity: quantity,
    });

    setQuantity(1);
  };

  useEffect(() => {
    setQuantity(quantity);
  }, [quantity]);

  const quantitySetter = (value) => {
    setQuantity(value);
  };

  return (
    <div className="Book">
      <img src={props.image} alt={props.title + 'cover'} />
      <button
        onClick={() => cartClickHandle()}
        className="addToCart material-symbols-outlined"
      >
        local_mall
      </button>
      <span className="title">{props.title}</span>
      <br />
      <span className="author">by {props.author}</span>
      <br />
      <span className="chapters">{props.chapters}</span>
      <span
        style={{
          position: 'absolute',
          right: '1px',
          color: '#eee',
          fontSize: '1.6rem',
          bottom: '7.2%',
          padding: '0px 3px',
          background: 'indianred',
          borderTopLeftRadius: '10px',
        }}
        className="price"
      >
        ${props.price}
      </span>
      <QuantityInput setQuantity={quantitySetter} />
    </div>
  );
}
