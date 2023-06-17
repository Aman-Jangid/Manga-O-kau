import { useEffect, useState } from 'react';

export default function SideMenu(props) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [filterList, setFilterList] = useState(new Set());

  useEffect(() => {
    sendFilters(filterList);
  }, [filterList]);

  const handleClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  let removed;

  const sendFilters = (filterList) => {
    props.setFilters(filterList);
  };

  const setFilter = (e) => {
    let target = e.target;

    target.classList.toggle('active');

    if (
      target.classList.contains('active') &&
      !target.parentElement.parentElement.classList.contains('App') &&
      !target.parentElement.parentElement.classList.contains('SideMenu')
    ) {
      setFilterList((prevFilters) => [...prevFilters, target.textContent]);
    } else {
      removed = target.textContent;

      const newArr = new Set([...filterList]);
      newArr.delete(removed);
      setFilterList(newArr);
    }
  };

  return (
    <>
      <div
        className="SideMenu"
        onClick={(e) => setFilter(e)}
        id={isMenuVisible ? 'visible' : 'hidden'}
      >
        <div
          onClick={handleClick}
          className="toggleMenu"
          id={isMenuVisible ? 'hidden' : 'visible'}
        >
          <span className="toggleMenuIcon">➤</span>
        </div>

        <section className="Filter">
          <ul>
            Filter by Year
            <span className="tag">before 2000</span>
            <span className="tag">2000-2010</span>
            <span className="tag">2010-now</span>
          </ul>
        </section>
        <section className="Categories">
          <ul>
            Categories
            <span className="tag">Action</span>
            <span className="tag">Adventure</span>
            <span className="tag">Comedy</span>
            <span className="tag">Drama</span>
            <span className="tag">Fantasy</span>
            <span className="tag">Romance</span>
            <span className="tag">Horror</span>
            <span className="tag">Mystery</span>
            <span className="tag">Sci-fi</span>
            <span className="tag">Slice of Life</span>
            <span className="tag">Historical</span>
            <span className="tag">Supernatural</span>
            <span className="tag">Sports</span>
            <span className="tag">Psychological</span>
          </ul>
        </section>
        <section className="Demographic">
          <ul>
            Demographic
            <span className="tag">Shounen</span>
            <span className="tag">Shoujo</span>
            <span className="tag">Seinen</span>
            <span className="tag">Josei</span>
          </ul>
        </section>
      </div>
    </>
  );
}
