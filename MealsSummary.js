import Card from '../UI/Card';
import  './Meals.Summary.modules.css';
const MealsSummary = (props) => {
  return (
    <section className='summary'>
      <Card>
      <h2>Delicious Food, Delivered To You</h2> 
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
    <br></br>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
      </Card>
    </section>  
  )
};

export default MealsSummary;
