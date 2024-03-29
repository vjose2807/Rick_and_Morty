import Card from "./Card";
import "./Cards.css";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className="cards_container">
      {characters.map(({ name, species, gender, image }, index) => {
        return (
          <Card
            key={index}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={() => window.alert("Emulamos que se cierra la card")}
          />
        );
      })}
    </div>
  );
}
