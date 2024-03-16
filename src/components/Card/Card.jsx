import timeImg from "./../../assets/time.png";
import calorieImg from "./../../assets/calorie.png";

const Card = ({card}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={card.recipe_image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{card.recipe_name}</h2>
        <p>{card.short_description}</p>
        <div className="divider"></div>
        <h2>Ingredients: {card.ingredients.length}</h2>
        <div>
          <ul>
            {/* {
              ingredients.map((items, idx) => <li key={idx} {}></li>)
            } */}
          </ul>
        </div>
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
          <button className="btn bg-[#0be58a] text-xl font-semibold rounded-full border-none">
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
