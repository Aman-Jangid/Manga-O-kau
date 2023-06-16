import './App.css';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Content from './components/Content';
import { useEffect, useState } from 'react';
import fetchData from './fetch';

function App(props) {
  const [data, setData] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [filterAppliedBooks, setfilterAppliedBooks] = useState([]);

  const setPrice = () => {
    return (
      Math.floor(Math.random() * (15 - 5) + 5) +
      '.' +
      Math.floor(Math.random() * 40)
    );
  };

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setData(data);
      setFilteredBooks(data);

      data.forEach((manga) => (manga.price = setPrice()));
    };

    getData();
  }, []);

  const search = (query) => {
    const books = [];
    const regex = new RegExp(`${query}`, 'gi');
    data.forEach((manga) => {
      console.log(manga);
      if (regex.test(manga.title) || regex.test(manga.authors[0].name)) {
        books.push(manga);
      }
    });

    setFilteredBooks([...books]);
  };

  // filter stuff
  const filterBooks = (filters, sections) => {
    const filteredData = [];
    setfilterAppliedBooks(
      filterAppliedBooks.length === 0 ? filteredBooks : filterAppliedBooks
    );
    console.log(filterAppliedBooks);

    const regex = new RegExp(
      `(?=.*${Array.from(filters).join(')(?=.*')})`,
      'gi'
    );

    filteredBooks.forEach((manga) => {
      const genresString = manga.genres.map((genre) => genre.name).join(' ');

      if (regex.test(genresString)) {
        filteredData.push(manga);
      }
    });
    setfilterAppliedBooks(filteredData);
  };

  return (
    <div className="App">
      <Header cartCount={props.cart.length} search={search} />
      <SideMenu setFilter={filterBooks} />
      <Content
        books={
          filterAppliedBooks.length === 0 ? filteredBooks : filterAppliedBooks
        }
        setCart={props.setCart}
      />
    </div>
  );
}

export default App;
