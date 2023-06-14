import './App.css';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Content from './components/Content';
import { useEffect, useState } from 'react';
import fetchData from './fetch';

function App(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setData(data);
    };

    getData();
  }, []);

  return (
    <div className="App">
      <Header cartCount={props.cart.length} />
      <SideMenu />
      <Content books={data} setCart={props.setCart} />
    </div>
  );
}

export default App;
