import { useEffect, useState } from "react";

const Meals = ({ onCartData }) => {
  const [meals, setMeals] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMeals() {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:3001/meals");

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await response.json();
        setMeals(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMeals();
  }, []);

  return (
    <>
      {isLoading && <p style={{ color: "#000" }}>Loading...</p>}
      <div id="meals">
        {meals.map((meal) => (
          <li key={meal.id} className="meal-item">
            <article>
              <img src={`/backend/public/${meal.image}`} alt="food image" />
              <div>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{meal.price}</p>
                <p className="meal-item-description">{meal.description}</p>
              </div>
              <p className="meal-item-actions">
                <button className="button" onClick={() => onCartData(meal)}>
                  Add to Cart
                </button>
              </p>
            </article>
          </li>
        ))}
      </div>
    </>
  );
};

export default Meals;
