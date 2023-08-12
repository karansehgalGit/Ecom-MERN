import React from "react";
import logo from "../../../images/shoplogo.jpg";
import { FaSistrix } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ setMenuOpen, menuOpen }) => {
  // return <ReactNavbar {...options} />;
  // return (
  //   <header id="header">
  //     <div className="header">
  //       <div className="leftHeader">
  //         <a href="/">
  //           <img src={logo} alt="Not" height="100vh" width= "130vw" />
  //         </a>
  //       </div>

  //       <div className="midHeader">

  //         <Link to="/">Home</Link>

  //         <Link to="/products">Products</Link>

  //         <Link to="/contact">Contact</Link>

  //         <Link to="/about">About</Link>
  //       </div>

  //       <div className="rightHeader">

  //         <Link to="/Search">< FaSistrix /></Link>

  //         <Link to="/Cart"> <FaCartArrowDown /></Link>

  //         <Link to="/login"><FaRegUser /></Link>

  //       </div>
  //     </div>
  //   </header>
  // );

  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>

      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={'navPhone ${menuOpen?"navPhonesComes" : ""'}>
      <NavContent  setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({setMenuOpen}) => (
  <>
    {/* <h2>Herbal Mandir</h2> */}
    <img src={logo} alt="Not" height="60vh" width= "130vw" />

    <div>
      <Link onClick={() => setMenuOpen(false)} to="/">Home</Link>

      <Link onClick={() => setMenuOpen(false)} to="/products">Products</Link>

      <Link onClick={() => setMenuOpen(false)}  to="/contact">Contact</Link>

      <Link onClick={() => setMenuOpen(false)} to="/about">About</Link>
    </div>

    <div>
      <Link onClick={() => setMenuOpen(false)} to="/Search">
        <FaSistrix />
      </Link>

      <Link onClick={() => setMenuOpen(false)} to="/Cart">
        <FaCartArrowDown />
      </Link>

      <Link onClick={() => setMenuOpen(false)} to="/login">
        <FaRegUser />
      </Link>
    </div>
  </>
);

export default Header;
