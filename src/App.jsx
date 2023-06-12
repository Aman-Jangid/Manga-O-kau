import './App.css';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Content from './components/Content';
import fetchData from './fetch';

function App() {
  fetchData();

  return (
    <div className="App">
      <Header />
      <SideMenu />
      <Content />
    </div>
  );
}

export default App;
