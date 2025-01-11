import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import RelatedProduct from "./RelatedProduct";
import AppContext from "../../context/AppContext";
import Footer from "../footer";

const ProductDetail = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const url = "https://shopvault-backend.onrender.com/api";
  // const url = "http://localhost:1000/api";
  const { addToCart } = useContext(AppContext);
  useEffect(() => {
    const fetchProduct = async () => {
      const api = await axios.get(`${url}/product/${id}`, {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      });
      // console.log(api);
      // console.log("yess");
      setProduct(api.data.product);
      // setProducts(api.data.products);
    };
    fetchProduct();
  }, [id]);


  const handleBuy=() =>{
    addToCart(
      product._id,
      product.title,
      product.price,
      1,
      product.imgSrc
    )
    navigate("/cart")

  }
  return (
    <>
      <div
        className="container text-center text-white my-5"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div className="left">
          <img
            src={product?.imgSrc}
            alt=""
            style={{
              width: "250px",
              height: "250px",
              borderRadius: "10px",
              border: "2px solid yellow",
            }}
          />
        </div>
        <div className="right">
          <h1>{product?.title}</h1>
          <p>{product?.description}</p>
          <h1>
            {product?.price} {"₹"}
          </h1>
          {/* <h3>{product.category}</h3> */}
          <div className="my-5">
            <button
              className="btn btn-danger mx-3"
              style={{ fontWeight: "bold" }}
            onClick={handleBuy}
            >
              Buy Now
              
            </button>
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
              style={{ fontWeight: "bold" }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      <RelatedProduct category={product?.category} />
      <Footer/>
    </>
  );
};

export default ProductDetail;
