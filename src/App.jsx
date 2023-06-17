import './App.css';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Content from './components/Content';
import { useEffect, useState } from 'react';
import fetchData from './fetch';

function App(props) {
  const [data, setData] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [filters, setFilters] = useState(new Set());

  // const [filtering, setFiltering] = useState(false);
  const [searching, setSearching] = useState(false);

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
      setSearchedBooks(data);
      setFilteredBooks(data);

      data.forEach((manga) => (manga.price = setPrice()));
    };

    getData();
  }, []);

  const search = (query) => {
    // set searching to true
    setSearching(true);

    const books = [];
    const regex = new RegExp(`${query}`, 'gi');
    data.forEach((manga) => {
      console.log(manga);
      if (regex.test(manga.title) || regex.test(manga.authors[0].name)) {
        books.push(manga);
      }
    });

    setSearchedBooks([...books]);
  };

  useEffect(() => {
    // call filtering function
    filterBooks(filters);
  }, [filters]);

  const setFiltersSet = (filter) => {
    setFilters(filter);
  };

  // filter stuff
  const filterBooks = (filters) => {
    // set searching to false
    setSearching(false);

    const filteredData = [];
    const regex = new RegExp(
      `(?=.*${Array.from(filters).join(')(?=.*')})`,
      'gi'
    );

    data.forEach((manga) => {
      const genresString = manga.genres.map((genre) => genre.name).join(' ');

      if (regex.test(genresString)) {
        filteredData.push(manga);
      }
    });

    setFilteredBooks([...filteredData]);
  };

  return (
    <div className="App">
      <Header cartCount={props.cart.length} search={search} />
      <SideMenu setFilters={setFiltersSet} />
      <Content
        books={searching ? searchedBooks : filteredBooks}
        setCart={props.setCart}
      />
    </div>
  );
}

export default App;
