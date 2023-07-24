import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import support from "./support.js";
import "./Footer.css";
import  {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer">
        <div className="leftFooter">
          <div className="footerLogo">
            {/* <a href="https://www.google.com/maps">
              <img src="" alt=""></img>
            </a> */}
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.755237862842!2d77.11228747469382!3d28.637096983874862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03eb232ad767%3A0xdf611be69500ba2!2sHerbal%20Mandir!5e0!3m2!1sen!2sin!4v1687609824337!5m2!1sen!2sin" title="Herbal Mandir Location" width="100%" height="auto" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>


        <div className="midFooter">
          <h1>HERBAL MANDIR</h1>
          <p>High Quality is our first priority</p>
        </div>

        <div className="rightFooter">
          <h4>Follow Us</h4>
          <Link to="http://instagram.com/">Instagram</Link>
          <Link to="https://m.facebook.com/Herbal-Mandir-Ayurvedic-Store-1968479030065849/">
            Facebook
          </Link>
          <Link to="tel:+91-921-329-6224">Call</Link>
          <Link to="https://wa.me/9999481211">What'sApp</Link>
        </div>
      </div>
      <div className="footerSupport">
        <Link to="/support">Support</Link>
        <Link to="/terms-of-services">Terms Of Services</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/cancellation">Cancellation</Link>
        <p>Copyrights 2007 &copy; All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
