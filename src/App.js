import './App.css';
import Dictionary from "./Dictionary.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
      <main>
        <Dictionary />
      </main>
      </div>
      <footer>Coded by <span className="myName">Lile Nozadze</span></footer>
    </div>
  );
}

export default App;
