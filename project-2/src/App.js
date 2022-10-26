import './App.css';
import Footer from './Components/Footer';
import Search from "./Components/Search";
//
function App() {
  return (
    <div className="App">
      <div className="hero">
        <Search />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
