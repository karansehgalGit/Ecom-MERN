import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import support from "./support.js";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.755237862842!2d77.11228747469382!3d28.637096983874862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03eb232ad767%3A0xdf611be69500ba2!2sHerbal%20Mandir!5e0!3m2!1sen!2sin!4v1687609824337!5m2!1sen!2sin" title="Herbal Mandir Location" width="210" height="350" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className="midFooter">
        <h1>HERBAL MANDIR</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2007 &copy; MeKaranSehgal</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/">Instagram</a>
        <a href="https://m.facebook.com/Herbal-Mandir-Ayurvedic-Store-1968479030065849/">Facebook</a>
        <a href="tel:+91-921-329-6224">Call</a>
        <a href="https://wa.me/9999481211">What'sApp</a>
        <a href="/support">Support</a>
        <a href="/terms-of-services">Terms Of Services</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/cancellation">Cancellation</a>


      </div>

     
    </footer>
  );
};

export default Footer;
