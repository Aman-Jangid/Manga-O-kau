import './App.css';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Content from './components/Content';
import { useEffect, useState } from 'react';
import fetchData from './fetch';

function App(props) {
  const [data, setData] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setData(data);
      setFilteredBooks(data);
    };

    getData();
  }, []);

  const search = (query) => {
    const books = [];
    const regex = new RegExp(`${query}`, 'gi');
    data.forEach((manga) => {
      if (regex.test(manga.title) || regex.test(manga.authors[0].name)) {
        books.push(manga);
      }
    });

    setFilteredBooks([...books]);
  };

  return (
    <div className="App">
      <Header cartCount={props.cart.length} search={search} />
      <SideMenu />
      <Content books={filteredBooks} setCart={props.setCart} />
    </div>
  );
}

export default App;
