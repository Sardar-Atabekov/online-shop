import React, { Component } from "react";
import Logo from "./../usersPage/header/img/e-shop(logo).svg";
import SocialIcon1 from "./img/Vector-1.svg";
import SocialIcon2 from "./img/Vector-2.svg";
import SocialIcon3 from "./img/Vector-3.svg";
import SocialIcon4 from "./img/Vector.svg";
// import { Link } from "react-router-dom";

import "./footer.css";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer-bottom mt-3">
        <div className="top-footer  row col-12 container">
          <div className="col-3 row offset-1">
            <div className="col-3 top_footer_link">Блог</div>
            <div className="col-3 top_footer_link">О нас</div>
            <div className="col-3 top_footer_link">Контакты</div>
          </div>
        </div>
        <footer className="footer">
          <div className="container row col-12 ">
            <div className="col-3 footer-number  ">
              <div className="offset-5">
                <div>+996 509 09 99 16</div>
                <div>+996 502 32 39 36</div>
              </div>
            </div>
            <div className="col-3 offset-1">
              <img src={Logo} className="img-fluid col-8 offset-4" alt="logo" />
            </div>
            <div className="col-3 row offset-2">
              <div className="col-2">
                <img src={SocialIcon1} className="social_icons" alt="icon" />
              </div>
              <div className="col-2">
                <img src={SocialIcon2} className="social_icons" alt="icon" />
              </div>
              <div className="col-2">
                <img src={SocialIcon3} className="social_icons" alt="icon" />
              </div>
              <div className="col-2">
                <img src={SocialIcon4} className="social_icons" alt="icon" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
