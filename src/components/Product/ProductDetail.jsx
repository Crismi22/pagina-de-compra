import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import ProductImages from "./ProductImages";
import ButtonBuy from "../Button/ButtonBuy";
import './ProductDetail.css';


const ProductDetail = () => {
  const initialDescription =
  "Procesador Intel Core i7-1355U, 10 núcleos, 12MB de caché, 5.0GHz con Turbo Boost.\n" +
  "16GB RAM DDR4.\n" +
  "2.000GB disco solido M.2 (Contamos también con 1TB SSD).\n" +
  "Pantalla táctil de 13,5 pulgadas, 3K2K (3000 X 2000), OLED, 400 NITS, 100% DCI-P3, AMOLED, LOW BLUE LIGHT.\n" +
  "Video Intel Iris Xe Graphics.\n" +
  "Teclado en Ingles retroiluminado.\n" +
  "1 x USB-A.\n" +
  "2 x USB-C (Thunderbolt 4).\n" +
  "1 x Lector de tarjeta microSD.\n" +
  "1 x Puerto Combinado para auriculares-micrófono.\n" +
  "Lector de huellas en el teclado.\n" +
  "Webcam 5MP (2560 x 1960) con obturador electrónico.\n" +
  "Wi-Fi® 6E AX211.\n" +
  "Bluetooth 5.2.\n" +
  "Quad Speakers Bang & Olufsen.\n" +
  "Batería: 4 celdas 66Whr.\n" +
  "Peso: 1.40kg.\n" +
  "Medidas: 29,7cm x 22cm x 1,6cm\n" +
  "Color: Nightfall black Aluminum.\n" +
  "Material: Cubierta superior y plataforma del teclado de aluminio.\n" +
  "Extras:\nFunda HP.\nLápiz HP Recargable MPP2.0 Tilt Pen.\n" +
  "Certificaciones:\nEPEAT Gold.\nENERGY STAR.\n" +
  "Equipo convertible a Tablet.\n" +
  "Sistema operativo: Windows 11 Home.\n" +
  "Garantía 12 meses.";

  const [showFullDescription, setShowFullDescription] = useState(false);
  const [purchased, setPurchased] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };


  const handleBuy = () => {
    console.log("Producto comprado");

  
    setTimeout(() => {
      setPurchased(false);
    }, 3000);
  };



  return (
    <div>
      <div className="product-container">
        <div className="product-info">
          <h2>Hp Spectre 14 X360 2en1 Oled I7-1355u | 16gb | 2tbssd |win11</h2>
          <div className="product-details">
            <p>Precio: $3.785.464,80</p>
            <p>SKU: 123456789</p>
            <p>Cantidad disponible: 10</p>
            <ButtonBuy onClick={handleBuy} />
          </div>
          <ProductImages
            images={[
              "/assets/imagen1.jpg",
              "/assets/imagen2.jpg",
              "/assets/imagen3.jpg",
              "/assets/imagen4.jpg",
              "/assets/imagen5.jpg",
            ]}
          />
  
          {purchased ? (
            <>
              <Card className="thank-you-card">
                <Card.Body>
                  <Card.Text>¡Gracias por tu compra! Que lo disfrutes.</Card.Text>
                </Card.Body>
              </Card>
            </>
          ) : (
            <div>
              <Card className="description-card">
                <Card.Body>
                  <Card.Text>
                    {showFullDescription ? initialDescription : initialDescription.slice(0, 300)}
                  </Card.Text>
                    {initialDescription.length > 300 && (
                  <Button size="sm" onClick={toggleDescription}>
                    {showFullDescription ? "Ver menos" : "Ver más"}
                  </Button>
                )}
                </Card.Body>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
)};
  

export default ProductDetail;
