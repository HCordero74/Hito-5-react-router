import { useState, useEffect } from "react";
import CardPizza from '../components/CardPizza';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () => {
    const response = await fetch("http://localhost:5000/api/pizzas");
    const data = await response.json();
    setPizzas(data);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <div className="container my-4">
      <div className="row g-4"> 
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="col-12 col-md-4">
            <CardPizza {...pizza} />
          </div>
        ))}
      </div>
    </div>
);
};

export default Home;

