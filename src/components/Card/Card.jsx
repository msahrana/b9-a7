import timeImg from "./../../assets/time.png";
import calorieImg from "./../../assets/calorie.png";

const Card = ({card, handleAddToCart}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={card.recipe_image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{card.recipe_name}</h2>
        <p>{card.short_description}</p>
        <div className="divider"></div>
        <div>
          <h2 className="font-bold">Ingredients: {card.ingredients.length}</h2>
          <ul className="pl-12 rounded-2xl">
            {card.ingredients.map((item, idx) => (
              <li key={idx} className="list-disc">
                ${item}
              </li>
            ))}
          </ul>
        </div>
        <div className="divider"></div>
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <img src={timeImg} alt="" />
            <p>{card.preparing_time}</p>
          </div>
          <div className="flex space-x-4">
            <img src={calorieImg} alt="" />
            <p>{card.calories}</p>
          </div>
        </div>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(card)}
            className="btn bg-[#0be58a] text-xl font-semibold rounded-full border-none"
          >
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
