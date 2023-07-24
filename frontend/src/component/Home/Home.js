import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import Work from "../layout/Header/Work";
import Services from "../layout/Header/Services";
// import { Carousel } from "react-responsive-carousel";
// import img1 from "../../images/banner-gift-pack.jpg";
// import img3 from "../../images/Masale"
// import img2 from "../../images/banner-navratan-murabba.png";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          {/* <div className="header">
            <div className="logo">
              <img src="../../../images/shoplogo.jpg" alt="Logo"></img>
            </div>

            <div className="headerMenu"></div>

            <div className="headerLogin"></div>
          </div> */}

          <div className="banner">
            <p>Welcome to Herbal Mandir</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

         
          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          <Services />
          <Work />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
