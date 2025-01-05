/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Link, useNavigate } from "react-router-dom";

const ShowProduct = () => {
  const { products, filteredData, addToCart } = useContext(AppContext);
  const navigate = useNavigate();
  const handleBuy=() =>{
    

  }
  return (
  
      <div className=" bg-backgroundColor  d-flex justify-content-center align-items-center">
        <div className="row container d-flex justify-content-center align-items-center my-5">
          {filteredData?.map((product) => (
            <div
              key={product._id}
              className="my-3 col-md-4 
            d-flex justify-content-center align-items-center"
            >
              <div
                className="card bg-dark text-light text-center"
                style={{ width: "18rem" }}
              >
                <Link
                  to={`/product/${product._id}`}
                  className="d-flex justify-content-center align-items-center p-3"
                >
                  <img
                    src={product.imgSrc}
                    className="card-img-top"
                    alt="..."
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "10px",
                      border: "2px solid yellow",
                    }}
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <div className="my-3">
                   <Link
                   to={`/product/${product._id}`}
                   > <button className="btn btn-primary mx-3"
                    >
                      {product.price} {"₹"}

                    </button></Link>
                    <button
                      className="btn btn-warning"
                      onClick={() =>
                        addToCart(
                          product._id,
                          product.title,
                          product.price,
                          1,
                          product.imgSrc
                        )
                      }
                    >
                      Add To Cart
                    </button>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    
  );
};

export default ShowProduct;
