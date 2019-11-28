import React from "react";
import { getData } from "../../requests.js";

import { Link } from "react-router-dom";

import Eshoplogo from "./img/e-shop(logo).svg";
import Person from "./img/Person.svg";
import Heart from "./img/l.svg";
import Cart from "./img/pocket.svg";
import "./header.css"; 


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  
  async componentDidMount() {
    getData(`/category/all`).then(data => {
      this.setState({ data });
    });
  }

  render() {
    return (
      <header>
      <div className="header_top">
        <div className="container row">
          <div className="col-3 offset-2 row ">
            <div className="col-3 ">
              <Link className="header_top_link">О нас </Link>
            </div>
            <div className="col-3">
              <Link className="header_top_link">Блог</Link>
            </div>
            <div className="col-3">
              <Link className="header_top_link">Контакты</Link>
            </div>
          </div>

          <div className="col-4 offset-2 row">
            <div className="col-5">
              <p className="header_tel">+996 XXX XXX XXX</p>
            </div>
            <div className="col-6">
              <p className="header_tel">+996 XXX XXX XXX</p>
            </div>
          </div>
        </div>
      </div>

      <div className="header">
        <div className="container row">
          <div className="col-2">
            <Link to="/" className="header_link">
              <img src={Eshoplogo} alt="logo" className="header_logo" />
            </Link>
          </div>

          <div className="col-1 ">
            <Link className="header_link">Women</Link>
          </div>
          <div className="col-1 header_link_block">
            <Link className="header_link">Men</Link>
          </div>
          <div className="col-5">
            <form action="#">
              <input
                className="header_input"
                type="text"
                placeholder="Искать по запросу"
              />
            </form>
          </div>

          <div className="col-3">
            <Link to="/" className="header_link">
              <img src={Person} alt="logo" className="header_icons col-2" />
            </Link>
            <Link to="/" className="header_link">
              <img src={Heart} alt="logo" className="header_icons col-2" />
            </Link>
            <Link to="/cart" className="header_link">
              <img src={Cart} alt="logo" className="header_icons col-2" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  
    );
  }
}


export default Header;


