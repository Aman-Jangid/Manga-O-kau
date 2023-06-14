import QuantityInput from './QuantityInput';

export default function Book(props) {
  // TODO
  //  ***************************************************
  // if an item is already in cart then don't add it again

  const cartClickHandle = () => {
    props.setCart({
      title: props.title,
      author: props.author,
      chaptersInCart: 5,
      image: props.image,
    });
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
      <span className="chapters">length : {props.chapters}</span>
      <QuantityInput />
    </div>
  );
}
