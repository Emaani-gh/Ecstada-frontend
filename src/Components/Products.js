import React, { useContext, useState } from "react";
import Context from "./Context";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const Products = () => {
  const { products } = useContext(Context).state;
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <section className="all-products">
      <div className="container ">
        <div className="p-grid">
          {products.map((prd, index) => {
            // Assuming imageData is the array of numbers
            const uint8Array = new Uint8Array(prd.images[0].data);
            const base64String = btoa(
              String.fromCharCode.apply(null, uint8Array)
            );

            const image = `data:image/jpg;base64,${base64String}`;
            console.log(image);
            console.log(typeof prd.images[0].data);

            return (
              <div key={index} className="card">
                <div className="card-top">
                  <a href="#">
                    <img className="card-img" src={image} alt="Product" />
                  </a>
                  <div className="wrap-btn">
                    <button onClick={() => handleProductClick(prd)}>
                      <BsCart2 className="icn" />
                    </button>
                    <button onClick={() => handleProductClick(prd)}>
                      <AiOutlineEye className="icn" />
                    </button>
                  </div>
                </div>
                <h5 className="card-title">{prd.productName}</h5>
                <p className="price">{`GHC ${prd.price}`}</p>
              </div>
            );
          })}
        </div>

        {selectedProduct && (
          <div className="prd-modal">
            <div className="product-details-container">
              <div className="product-image">
                <img
                  src={`data:image/jpg;base64,${selectedProduct.prd_image}`}
                  alt="Product"
                />
              </div>
              <div className="product-info">
                <div>
                  <h2 className="product-name">{selectedProduct.prd_name}</h2>
                  <p className="product-price">{selectedProduct.prd_price}</p>
                  <p className="product-description">Description</p>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
