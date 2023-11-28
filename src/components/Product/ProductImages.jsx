import React, { useState } from "react";
import './ProductImages.css';

const ProductImages = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="product-images-container">
    <img src={process.env.PUBLIC_URL + selectedImage} alt="Producto" className="main-image" />
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={process.env.PUBLIC_URL + image}
            alt={`Vista ${index + 1}`}
            className="thumbnail"
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
