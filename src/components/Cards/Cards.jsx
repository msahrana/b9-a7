import {useEffect} from "react";
import {useState} from "react";
import Card from "../Card/Card";

const Cards = ({handleAddToCart}) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-4/7">
      {cards.map((card) => (
        <Card
          key={card.recipe_id}
          handleAddToCart={handleAddToCart}
          card={card}
        ></Card>
      ))}
    </div>
  );
};

export default Cards;
