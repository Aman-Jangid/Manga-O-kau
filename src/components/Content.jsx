import Book from './Book';
import uniqid from 'uniqid';

export default function Content(props) {
  const books = props.books;

  return (
    <div className="Content">
      <ul className="Books">
        {books.map((book) => (
          <Book
            setCart={props.setCart}
            title={book.title}
            author={book.authors[0].name.split(',').join(' ')}
            chapters={book.chapters}
            image={book.images.jpg.large_image_url}
            key={uniqid()}
          />
        ))}
      </ul>
    </div>
  );
}
