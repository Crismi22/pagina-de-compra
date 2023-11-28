import React, { useState } from "react";


const ButtonBuy = ({ onBuy }) => {
  const [purchased, setPurchased] = useState(false);

  const handleBuyClick = () => {
    setPurchased(true);

   
    if (onBuy) {
      onBuy();
    }
  };

  return (
    <div>
      {!purchased ? (
        <button onClick={handleBuyClick}>Comprar</button>
      ) : (
        <span>¡Gracias por tu compra!</span>
      )}
    </div>
  );
};

export default ButtonBuy;
