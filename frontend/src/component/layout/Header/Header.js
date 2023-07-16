import React from "react";
import { ReactNavbar } from "overlay-navbar";
// import logo from "../../../images/logo.png";
// import logo from "../../../images/shoplogo.jpg";
import logo from "../../../images/shoplogo.jpg";

// const options = {
//   burgerColorHover: "#eb4034",
//   logo,
//   logoWidth: "20vmax",
//   navColor1: "white",
//   logoHoverSize: "10px",
//   logoHoverColor: "#eb4034",
//   link1Text: "Home",
//   link2Text: "Products",
//   link3Text: "Contact",
//   link4Text: "About",
//   link1Url: "/",
//   link2Url: "/products",
//   link3Url: "/contact",
//   link4Url: "/about",
//   link1Size: "1.3vmax",
//   link1Color: "rgba(35, 35, 35,0.8)",
//   nav1justifyContent: "flex-end",
//   nav2justifyContent: "flex-end",
//   nav3justifyContent: "flex-start",
//   nav4justifyContent: "flex-start",
//   link1ColorHover: "#eb4034",
//   link1Margin: "1vmax",
//   profileIconUrl: "/login",
//   profileIconColor: "rgba(35, 35, 35,0.8)",
//   searchIconColor: "rgba(35, 35, 35,0.8)",
//   cartIconColor: "rgba(35, 35, 35,0.8)",
//   profileIconColorHover: "#eb4034",
//   searchIconColorHover: "#eb4034",
//   cartIconColorHover: "#eb4034",
//   cartIconMargin: "1vmax",
// };

const options = {
  burgerColorHover: "#eb4034",
  burgerColor: "white",
  logo,
  logoWidth: "20vmax",
  navColor1: "black",
  // navColor1: "white",
  logoHoverSize: "30px",
  // logoHoverColor: "#eb4034",
  logoHoverColor: "blue",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.9vmax",
  // link1Color: "rgba(35, 35, 35, 1)",
  // link1Color: "lightcoral",
  link1Color: "white",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  // link1ColorHover: "#eb4034",
  // link1ColorHover: "white",
  link1ColorHover: "darkgoldenrod",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  // profileIconColor: "rgba(35, 35, 35,0.8)",
  // searchIconColor: "rgba(35, 35, 35,0.8)",
  // cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColor: "white",
  searchIconColor: "white",
  cartIconColor: "white",
  // profileIconColorHover: "#eb4034",
  // searchIconColorHover: "#eb4034",
  // cartIconColorHover: "#eb4034",
  profileIconColorHover: "darkgoldenrod",
  searchIconColorHover: "darkgoldenrod",
  cartIconColorHover: "darkgoldenrod",
  cartIconMargin: "1vmax",
};


const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
