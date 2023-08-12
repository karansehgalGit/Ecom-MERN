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
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

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

  

  // return (
  //   <Fragment>
  //     {loading ? (
  //       <Loader />
  //     ) : (
  //       <Fragment>
  //         <div className="contain">
  //           {/* <div className="box">1</div> */}
  //           <div className="box" id="section1">
  //             <MetaData title="ECOMMERCE" />
  //             <div className="banner">
  //               <p>Welcome to Herbal Mandir</p>
  //               <h1>FIND AMAZING PRODUCTS BELOW</h1>

  //               <a href="#container">
  //                 <button>
  //                   Scroll <CgMouse />
  //                 </button>
  //               </a>
  //             </div>
  //             <h2 className="homeHeading">Featured Products</h2>
  //             <div className="container" id="container">
  //               {products &&
  //                 products.map((product) => (
  //                   <ProductCard key={product._id} product={product} />
  //                 ))}
  //             </div>
  //           </div>
  //           <div className="box" id="section2">
  //             2
  //             <div id="services">
  //               <h2>Star Products</h2>

  //               <section>
  //                 {/* <motion.div  */}
  //                 {/* <motion.div */}

  //                 <div
  //                   className="serviceBox1"
  //                   // whileInView={animations.whileInView}
  //                   // initial={animations.one}
  //                 >
  //                   <h3>15+ Murabbas</h3>
  //                   <p>Spl.</p>
  //                   {/* <p>Amla Barfi</p> */}
  //                   {/* <p>Navratan murabba</p> */}
  //                   {/* <p>Paan Khajoor (Seasonal)</p> */}
  //                   <p>
  //                     <Typewriter
  //                       options={{
  //                         strings: [
  //                           "Amla Barfi",
  //                           "Navratan murabba",
  //                           "Paan Khajoor",
  //                         ],
  //                         autoStart: true,
  //                         loop: true,
  //                         // cursor: "",
  //                         wrapperClassName: "typewriterpara",
  //                       }}
  //                     />
  //                   </p>
  //                   {/* <a href='/products'>Products</a> */}
  //                   <Link to="/products">Products</Link>

  //                   {/* </motion.div> */}
  //                 </div>

  //                 {/* <motion.div  */}
  //                 <div
  //                   className="serviceBox2"
  //                   // whileInView={animations.whileInView}
  //                   // initial={animations.twoAndThree}
  //                 >
  //                   {/* <AiFillIeCircle /> */}
  //                   {/* <span>Pickles</span> */}
  //                   <h3>15+ Pickles</h3>
  //                   <p>Spl.</p>
  //                   {/* <p>Mix Achar</p> */}
  //                   {/* <p>Aam Achar</p> */}
  //                   {/* <p>Nimbu Achar</p> */}
  //                   <p>
  //                     <Typewriter
  //                       options={{
  //                         strings: [
  //                           "Mix Achar",
  //                           "Aam Achar",
  //                           "Nimbu Achar",
  //                           "Mirch Achar",
  //                         ],
  //                         autoStart: true,
  //                         loop: true,
  //                         // cursor: "",
  //                         wrapperClassName: "typewriterpara",
  //                       }}
  //                     />
  //                   </p>
  //                   {/* <a href='/products'>Products</a> */}
  //                   <Link to="/products">Products</Link>

  //                   {/* </motion.div> */}
  //                 </div>

  //                 {/* <motion.div  */}
  //                 <div
  //                   className="serviceBox3"
  //                   // whileInView={animations.whileInView}
  //                   // initial={animations.twoAndThree}
  //                   // transition={{
  //                   //   delay: 0.3,
  //                   // }}
  //                 >
  //                   {/* <AiFillAndroid /> */}
  //                   {/* <span>Spices</span> */}
  //                   <h3>30+ Spices</h3>
  //                   <p>Spl.</p>
  //                   {/* <p>Chai Masala</p> */}
  //                   {/* <p>Garam Masala</p> */}
  //                   {/* <p>Kasuri Methi</p> */}
  //                   {/* <p>Parantha Masala</p> */}
  //                   <p>
  //                     <Typewriter
  //                       options={{
  //                         strings: [
  //                           "Chai Masala",
  //                           "Garam Masala",
  //                           "Kasuri Methi",
  //                           "Parantha Masala",
  //                         ],
  //                         autoStart: true,
  //                         loop: true,
  //                         // cursor: "",
  //                         wrapperClassName: "typewriterpara",
  //                       }}
  //                     />
  //                   </p>
  //                   {/* <a href='/products'>Products</a> */}
  //                   <Link to="/products">Products</Link>

  //                   {/* </motion.div> */}
  //                 </div>

  //                 {/* <motion.div  */}
  //                 <div
  //                   className="serviceBox4"
  //                   // whileInView={animations.whileInView}
  //                   // initial={animations.four}
  //                 >
  //                   {/* <AiFillWindows /> */}
  //                   {/* <span>Gift Packs</span> */}
  //                   <h3>Gift Packs</h3>
  //                   <p>Spl.</p>
  //                   {/* <p>Dry Fruits</p> */}
  //                   {/* <p>Amla Barfi</p> */}
  //                   {/* <p>Paan Khajoor</p> */}
  //                   {/* <p>Navaratan Murabba</p> */}
  //                   <p>
  //                     <Typewriter
  //                       options={{
  //                         strings: [
  //                           "Dry Fruits",
  //                           "Amla Barfi",
  //                           "Paan Khajoor",
  //                           "Navaratan Murabba",
  //                         ],
  //                         autoStart: true,
  //                         loop: true,
  //                         // cursor: "",
  //                         wrapperClassName: "typewriterpara",
  //                       }}
  //                     />
  //                   </p>
  //                   {/* <a href='/products'>Products</a> */}
  //                   <Link to="/products">Products</Link>

  //                   {/* </motion.div> */}
  //                 </div>
  //               </section>
  //             </div>
  //           </div>
  //           <div className="box" id="section3">
  //             3
  //           </div>
  //           {/* <div className="box">4</div> */}
  //         </div>
  //       </Fragment>
  //     )}
  //   </Fragment>
  // );
};

export default Home;
