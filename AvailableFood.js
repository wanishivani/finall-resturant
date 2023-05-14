import MealItem from "./MealsItem/MealItem";
import "./Available.css";
import Card from '../UI/Card';
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy... and green",
    price: 18.99,
  },
];

const AvailableFood = (props) => {
  const mealList = DUMMY_MEALS.map((meals) =>(
     <MealItem 
        key={meals.id}
        id={meals.id}
       name={meals.name} 
       Amount={meals.amount}
     description={meals.description}
      price={meals.price}/>
      )
  );

  return (       
    <section className='meals'>
      <Card>
      <ul>{mealList}</ul>
      </Card>
    </section>
      

  );
};

export default AvailableFood;
