import Book from './Book';
import uniqid from 'uniqid';

export default function Content(props) {
  const books = props.books;

  console.log(props);

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
              author={book.author}
              chapters={book.chapters ? '0' : '1'}
              image={book.image}
              price={price}
              key={uniqid()}
            />
          );
        })}
      </ul>
    </div>
  );
}
