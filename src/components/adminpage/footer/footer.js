import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <nav className="footerComponent">
        <ul>
          <li className="nav-item">
            <Link to={"/admin/category"} className="nav-link">
              Home
            </Link>
          </li>
        </ul>
        <span className="copyright">Copyright © 2019 Neobis</span>
      </nav>
    );
  }
}

export default Footer;
