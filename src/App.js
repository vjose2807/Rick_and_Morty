import "./App.css";
import Cards from "./components/Cards.jsx";
import characters from "./data.js";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <SearchBar onSearch={(characterID) => window.alert(characterID)} />

      <Cards characters={characters} />
    </div>
  );
}

export default App;
