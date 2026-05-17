import React, { useState } from 'react';
import { pizzaCart as initialCart } from '../Datos/pizzas';

const Cart = () => {

  const [cart, setCart] = useState(initialCart);

  const increment = (id) => {
    const newCart = cart.map((pizza) => {
      if (pizza.id === id) {
        return { ...pizza, count: pizza.count + 1 };
      }
      return pizza; 
    });
    setCart(newCart);
  };

   const decrement = (id) => {
        const newCart = cart.map((pizza) => {
      if (pizza.id === id) {
        return { ...pizza, count: pizza.count - 1 };
      }
      return pizza;
    })
   
    .filter(pizza => pizza.count > 0);
    
    setCart(newCart);
  };

 
  const total = cart.reduce((acc, pizza) => acc + (pizza.price * pizza.count), 0);


  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <h3 className="mb-4">Detalles del pedido:</h3>
      
      <div className="p-3 border rounded shadow-sm bg-white">
        {cart.length === 0 ? (
          <p className="text-center text-muted">Tu carrito está vacío</p>
        ) : (
          cart.map((pizza) => (
            <div key={pizza.id} className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
              {/* Sección de Imagen y Nombre */}
              <div className="d-flex align-items-center" style={{ gap: '15px' }}>
                <img 
                  src={pizza.img} 
                  alt={pizza.name} 
                  style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '5px' }} 
                />
                <span className="text-capitalize fw-bold">{pizza.name}</span>
              </div>

              {/* Sección de Precio, Botones y Cantidad */}
              <div className="d-flex align-items-center" style={{ gap: '15px' }}>
                <span className="fw-bold fs-5">
                  ${(pizza.price * pizza.count).toLocaleString('es-CL')}
                </span>
                
                {/* Botón Decrementar (-) */}
                <button 
                  className="btn btn-outline-danger btn-sm" 
                  onClick={() => decrement(pizza.id)}
                  style={{ width: '30px', height: '30px', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  -
                </button>
                
                {/* Cantidad */}
                <span className="fw-bold fs-5">{pizza.count}</span>
                
                {/* Botón Incrementar (+) */}
                <button 
                  className="btn btn-outline-primary btn-sm" 
                  onClick={() => increment(pizza.id)}
                  style={{ width: '30px', height: '30px', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Sección del Total y Botón de Pagar */}
      <div className="mt-4">
        <h2 className="fw-bold">Total: ${total.toLocaleString('es-CL')}</h2>
        <button className="btn btn-dark mt-3 px-4 py-2 fs-5">
          Pagar
        </button>
      </div>
    </div>
  );
};

export default Cart;