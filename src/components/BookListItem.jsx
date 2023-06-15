export default function BookListItem(props) {
  const book = props.bookDetail;
  return (
    <div className="BookListItem">
      <div className="cover">
        <img width={'40px'} src={book.image} alt={book.title} />
      </div>
      <div className="info">
        <span className="title">{book.title}</span>
        <span className="author">{book.author}</span>
      </div>
      <div className="pricing">
        <span className="price">${book.price}</span>
        <button className="remove">Remove</button>
      </div>
    </div>
  );
}
