import React, { useContext, useEffect, useState } from "react";
import Context from "./Context";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(Context).state;
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProductDetails = () => {
      const productDetails = products.find((prd) => prd._id === id);
      setProduct(productDetails);
    };

    fetchProductDetails();
  }, [id, products]); // Add 'id' and 'products' to the dependency array

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details-container">
      <div className="product-image">
        <img src={`data:image/jpg;base64,${product.prd_image}`} alt="productImage"/>
      </div>
      <div className="product-info">
        <h2 className="product-name">{product.prd_name}</h2>
        <p className="product-price">{product.prd_price}</p>
        <p className="product-description">Description</p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
