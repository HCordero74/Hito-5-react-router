import { useState, useEffect } from "react";

const Pizza = () => {
  
  const [pizza, setPizza] = useState(null);

 
  const getPizza = async () => {
    const response = await fetch("http://localhost:5000/api/pizzas/p001");
    const data = await response.json();
    console.log(data)
    setPizza(data);
  };

  useEffect(() => {
    getPizza();
  }, []);

    if (!pizza) return <div className="text-center mt-5">Cargando pizza...</div>;
        console.log("Estado de la pizza actual:", pizza);
  return (
    <div className="container mt-5">
        <div className="card mb-3 shadow-lg overflow-hidden" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div className="row g-0 align-items-center"> 
            
            
                <div className="col-md-4 d-flex justify-content-center align-items-center p-3">
                    <img 
                    src={pizza.img} 
                    className="img-fluid h-100 w-100" 
                    style={{ 
                    objectFit: 'contain', 
                    maxHeight: '250px',
                    width: 'auto' }}
                    alt={pizza.name} 
                    onError={(e) => { e.target.src = "https://www.freeiconspng.com/thumbs/pizza-png/pizza-png-15.png"; }}
                    />
                </div>

                
                <div className="col-md-8">
                    <div className="card-body h-100 d-flex flex-column justify-content-center">
                        <h5 className="card-title text-capitalize fw-bold">{pizza.name}</h5>
                        <p className="card-text text-muted">{pizza.desc}</p>
                        <hr />
                        <h6>Ingredientes:</h6>
                        <ul className="list-unstyled">
                            {pizza.ingredients.map((ing) => (
                            <li key={ing}>🍕 {ing}</li>
                            ))}
                        </ul>
                        <div className="mt-auto">
                            <h4 className="fw-bold text-success">
                            Precio: ${pizza.price.toLocaleString()}
                            </h4>
                            <button className="btn btn-dark w-100 mt-2">
                            Añadir al carrito 🛒
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
};

export default Pizza;