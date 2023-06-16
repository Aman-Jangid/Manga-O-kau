import { Link } from 'react-router-dom';

export default function Header(props) {
  const onChangeHandler = (e) => {
    props.search(e.target.value);
  };

  return (
    <div className="Header">
      <Link
        to="/"
        className="logo"
        style={{
          textDecoration: 'none',
          color: '#fff',
          fontWeight: 600,
          fontSize: '1.8rem',
        }}
      >
        Manga
        <span
          style={{
            color: 'lightsalmon',
            fontSize: '2rem',
          }}
        >
          <img
            height={'17px'}
            style={{
              filter: 'hue-rotate(163deg) brightness(1.7)',
              transform: 'rotate(260deg)',
            }}
            src={
              'https://www.freeiconspng.com/thumbs/load-icon-png/load-icon-png-10.png'
            }
          />
        </span>
        kau
      </Link>
      <input
        type="text"
        name="searchBar"
        id="search"
        style={{ background: 'salmon', outline: 'none' }}
        onChange={(e) => onChangeHandler(e)}
        placeholder="Search"
      />
      <div className=" cart">
        <Link to="/cart" className="material-symbols-outlined cartIcon">
          local_mall
        </Link>{' '}
        <span>{props.cartCount}</span>
      </div>
    </div>
  );
}
