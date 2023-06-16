import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SideMenu(props) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <div className="SideMenu" id={isMenuVisible ? 'visible' : 'hidden'}>
        <div
          onClick={handleClick}
          className="toggleMenu"
          id={isMenuVisible ? 'hidden' : 'visible'}
        >
          <span className="toggleMenuIcon">➤</span>
        </div>

        <section className="filters">
          Filters
          <ul style={{ height: '80px', overflow: 'scroll' }}>
            By Length
            <br />
            <Link className="tag">One-shot</Link>
            <Link className="tag">Short</Link>
            <Link className="tag">Long</Link>
          </ul>
          <ul>
            By Year
            <Link className="tag">before 2000</Link>
            <Link className="tag">2000-2010</Link>
            <Link className="tag">2010-now</Link>
          </ul>
        </section>
        <section className="Categories">
          Categories
          <ul style={{ height: '70px', overflow: 'scroll' }}>
            <Link className="tag">Action</Link>
            <Link className="tag">Adventure</Link>
            <Link className="tag">Comedy</Link>
            <Link className="tag">Drama</Link>
            <Link className="tag">Fantasy</Link>
            <Link className="tag">Romance</Link>
            <Link className="tag">Horror</Link>
            <Link className="tag">Mystery</Link>
            <Link className="tag">Sci-fi</Link>
            <Link className="tag">Slice of Life</Link>
            <Link className="tag">Historical</Link>
            <Link className="tag">Supernatural</Link>
            <Link className="tag">Sports</Link>
            <Link className="tag">Psychological</Link>
          </ul>
        </section>
        <section className="Author">
          Demographic
          <ul style={{ height: '70px', overflow: 'scroll' }}>
            <Link className="tag">Shounen</Link>
            <Link className="tag">Shoujo</Link>
            <Link className="tag">Seinen</Link>
            <Link className="tag">Josei</Link>
          </ul>
        </section>
      </div>
    </>
  );
}
