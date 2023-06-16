import BookListItem from './BookListItem';
import uniqid from 'uniqid';

export default function BookList(props) {
  const books = props.cart;

  return (
    <div className="BookList">
      {props.cart.length === 0
        ? 'Your cart is empty'
        : books.map((book, i) => {
            return (
              <BookListItem
                key={uniqid()}
                index={i}
                bookDetail={book}
                remove={props.remove}
              />
            );
          })}
    </div>
  );
}
