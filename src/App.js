import './App.css';
import Dictionary from "./Dictionary.js";
import bookImg from './book.png';


function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>DICTIONARY</h1>
        <img src={bookImg} alt="Book" className="book-image" />
        <h2>Search for a word</h2>
      <main>
        <Dictionary />
      </main>
      </div>
      <footer>Coded by <span className="myName">Lile Nozadze</span></footer>
    </div>
  );
}

export default App;
