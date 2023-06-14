import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <div className="Header">
      <Link
        to="/"
        className="logo"
        style={{
          textDecoration: 'none',
          color: '#fff',
          fontWeight: 600,
          fontSize: '1.7rem',
        }}
      >
        Manga<span style={{ color: 'lightsalmon', fontSize: '2rem' }}>𐌏</span>
        kau
      </Link>
      <input
        type="text"
        name="searchBar"
        id="search"
        style={{ background: 'salmon', outline: 'none' }}
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
