import './App.css';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Content from './components/Content';
import { useEffect, useState } from 'react';
import fetchData from './fetch';

function App(props) {
  const [data, setData] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

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

  return (
    <div className="App">
      <Header cartCount={props.cart.length} search={search} />
      <SideMenu />
      <Content books={filteredBooks} setCart={props.setCart} />
    </div>
  );
}

export default App;
