import Book from './Book';
import uniqid from 'uniqid';

export default function Content(props) {
  const books = props.books;

  return (
    <div className="Content">
      <ul className="Books">
        {books.map((book) => {
          const price =
            Math.floor(Math.random() * (15 - 5) + 5) +
            '.' +
            Math.floor(Math.random() * 40);

          return (
            <Book
              setCart={props.setCart}
              title={book.title}
              author={book.authors[0].name.split(',').reverse().join(' ')}
              chapters={book.volumes ? book.volumes + ' volumes' : 'ongoing'}
              image={book.images.webp.image_url}
              price={price}
              key={uniqid()}
            />
          );
        })}
      </ul>
    </div>
  );
}
