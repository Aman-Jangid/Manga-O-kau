import BookListItem from './BookListItem';

export default function BookList(props) {
  return (
    <div className="BookList">
      <BookListItem num={1} />
      <BookListItem num={2} />
      <BookListItem num={3} />
      <BookListItem num={4} />
      <BookListItem num={5} />
      <BookListItem num={6} />
    </div>
  );
}
