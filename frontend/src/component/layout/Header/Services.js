import React from 'react';
// import {motion} from "framer-motion";
import Typewriter from "typewriter-effect";
// import {AiFillIeCircle, AiFillAndroid, AiFillWindows} from "react-icons/ai";
// import "./services.css";
import "./service.css";

import { Link } from "react-router-dom";

const Services = () => {

    const animations = {
        whileInView: {
            x:0,
            y:0,
            opacity:1,
        },

        one: {
            x: "-100%",
            opacity: 0,
        },
        twoAndThree: {
            y: "-100%",
            opacity: 0,
        },
       
        four: {
            x: "100%",
            opacity: 0,
        }
    }
  return (
    <div id="services">
        <h2>Star Products</h2>

        <section>

            {/* <motion.div  */}
            {/* <motion.div */}
            
            <div
                className="serviceBox1" 
                whileInView={animations.whileInView}
                initial={animations.one}
            >
    
                {/* <h3>15+ Murabbas</h3> */}
                {/* <p>Spl.</p> */}
                {/* <p>Amla Barfi</p> */}
                {/* <p>Navratan murabba</p> */}
                {/* <p>Paan Khajoor (Seasonal)</p> */}
                {/* <p><Typewriter */}
                <span><Typewriter
                        options={{
                            strings: ["15+ Murabbas", "Spl.", "Amla Barfi", "Navratan murabba", "Paan Khajoor"],
                            autoStart: true,
                            loop: true,
                            // cursor: "",
                            wrapperClassName: "typewriterpara",
                        }}
                // /></p>
                /></span>
                {/* <a href='/products'>Products</a> */}
                <Link to="/products">Products</Link>

                
            {/* </motion.div> */}
            </div>

            {/* <motion.div  */}
            <div
                className="serviceBox2" 
                whileInView={animations.whileInView}
                initial={animations.twoAndThree}
            >
               {/* <AiFillIeCircle /> */}
               {/* <span>Pickles</span> */}
                {/* <h3>15+ Pickles</h3> */}
                {/* <p>Spl.</p> */}
                {/* <p>Mix Achar</p> */}
                {/* <p>Aam Achar</p> */}
                {/* <p>Nimbu Achar</p> */}
                <span><Typewriter
                        options={{
                            strings: ["15+ Pickles", "Spl.", "Mix Achar", "Aam Achar", "Nimbu Achar", "Mirch Achar"],
                            autoStart: true,
                            loop: true,
                            // cursor: "",
                            wrapperClassName: "typewriterpara",
                        }}
                /></span>
                {/* <a href='/products'>Products</a> */}
                <Link to="/products">Products</Link>

                
               
            {/* </motion.div> */}
            </div>

            {/* <motion.div  */}
            <div
                className="serviceBox3" 
                whileInView={animations.whileInView}
                initial={animations.twoAndThree}
                transition={{
                    delay:0.3
                }}
            >
               {/* <AiFillAndroid /> */}
               {/* <span>Spices</span> */}
                {/* <h3>30+ Spices</h3> */}
                {/* <p>Spl.</p> */}
                {/* <p>Chai Masala</p> */}
                {/* <p>Garam Masala</p> */}
                {/* <p>Kasuri Methi</p> */}
                {/* <p>Parantha Masala</p> */}
                <span><Typewriter
                        options={{
                            strings: ["30+ Spices", "Spl.", "Chai Masala", "Garam Masala", "Kasuri Methi", "Parantha Masala"],
                            autoStart: true,
                            loop: true,
                            // cursor: "",
                            wrapperClassName: "typewriterpara",
                        }}
                /></span>
                {/* <a href='/products'>Products</a> */}
                <Link to="/products">Products</Link>

            {/* </motion.div> */}
            </div>

            {/* <motion.div  */}
            <div
                className="serviceBox4" 
                whileInView={animations.whileInView}
                initial={animations.four}
            >
               {/* <AiFillWindows /> */}
               {/* <span>Gift Packs</span> */}
                {/* <h3>Gift Packs</h3> */}
                {/* <p>Spl.</p> */}
                {/* <p>Dry Fruits</p> */}
                {/* <p>Amla Barfi</p> */}
                {/* <p>Paan Khajoor</p> */}
                {/* <p>Navaratan Murabba</p> */}
                <span><Typewriter
                        options={{
                            strings: ["Gift Packs", "Spl.", "Dry Fruits", "Amla Barfi", "Paan Khajoor", "Navaratan Murabba"],
                            autoStart: true,
                            loop: true,
                            // cursor: "",
                            wrapperClassName: "typewriterpara",
                        }}
                /></span>
                {/* <a href='/products'>Products</a> */}
                <Link to="/products">Products</Link>

                
                
            {/* </motion.div> */}
            </div>
        </section>
    
    </div>
  )
}

export default Services