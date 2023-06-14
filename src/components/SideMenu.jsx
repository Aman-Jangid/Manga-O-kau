import { useState } from 'react';

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

        <section className="filters">Filters</section>
        <section className="Categories">Categories</section>
        <section className="Author">Author</section>
      </div>
    </>
  );
}
