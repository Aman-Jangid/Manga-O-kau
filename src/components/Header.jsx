import { Link } from 'react-router-dom';

export default function Header(props) {
  const onChangeHandler = (e) => {
    props.search(e.target.value);
  };

  const styles = {
    display: props.results === null ? 'none' : 'block',
    position: 'absolute',
    right: '0',
    top: '12rem',
    border: '2px solid #eee',
    borderRight: 'none',
    background: 'indianred',
    color: '#eee',
    fontWeight: '600',
    padding: '3px 5px',
    boxShadow: '0px 0px 4px 0px rgba(0,0,0,0.3)',
    borderRadius: '10px',
    marginLeft: '3px',
    borderBottomRightRadius: '0px',
    borderTopRightRadius: '0px',
  };

  return (
    <div className="Header">
      <div className="searchResults" style={styles}>
        Results : {props.results}
      </div>
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
      {props.disableSearch ? (
        <div></div>
      ) : (
        <input
          type="text"
          name="searchBar"
          id="search"
          style={{ background: 'salmon', outline: 'none' }}
          onChange={(e) => onChangeHandler(e)}
          placeholder="Search title or author"
        />
      )}
      <div className=" cart">
        <Link to="/cart" className="material-symbols-outlined cartIcon">
          local_mall
        </Link>{' '}
        <span>{props.cartCount}</span>
      </div>
    </div>
  );
}
