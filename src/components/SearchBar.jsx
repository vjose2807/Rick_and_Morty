export default function SearchBar(props) {
  return (
    <div>
      <input type="search" />
      <button onClick={() => props.onSearch("aun no funciona")}>Agregar</button>
    </div>
  );
}
